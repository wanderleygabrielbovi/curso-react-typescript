import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CoinProps } from "../../utils/interfaces";
import Styles from "../detail/detail.module.css";

interface ErrorData{
  error: string;
}

interface ResponseData{
  data: CoinProps;
}

type DataProps = ResponseData | ErrorData;

export function Detail() {
  const { cripto } = useParams();
  const navigate = useNavigate();

  const [coin, setCoin] = useState<CoinProps>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCoin(){
      try{
        fetch(`https://api.coincap.io/v2/assets/${cripto}`)
        .then(response => response.json())
        .then((data: DataProps) => {

          if ("error" in data) {
            navigate("/")
            return;
          }

          const price = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          })
  
          const priceCompact = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            notation: "compact"
          })

          const resultData = {
            ...data.data,

            formatedPrice: price.format(Number(data.data.priceUsd)),
            formatedMarket: priceCompact.format(Number(data.data.priceUsd)),
            formatedVolume: priceCompact.format(Number(data.data.volumeUsd24Hr))
          }

          setCoin(resultData);
          setLoading(false);
      })
      }catch(err){
        console.log(err);
        navigate("/");
      }
    }

    getCoin();
  }, [cripto])

  if (loading || !coin) {
    return (
      <div className={Styles.container}>
        <h4 className={Styles.center}>Carregando...</h4>
      </div>
    )
  }
  
  return (
      <>
        <div className={Styles.container}>
          <h1 className={Styles.center}>{coin?.name}</h1>
          <h1 className={Styles.center}>{coin?.symbol}</h1>

          <section className={Styles.content}>
            <img 
              src={`https://assets.coincap.io/assets/icons/${coin?.symbol.toLowerCase()}@2x.png`}
              alt="Logo da moeda"
              className={Styles.logo} 
            />
            <h1>{coin?.name} | {coin?.symbol}</h1>

            <p><strong>Preço: </strong>{coin.formatedPrice}</p>

            <a>
              <strong>Mercado: </strong>{coin.formatedMarket}
            </a>

            <a>
              <strong>Volume: </strong>{coin.formatedVolume}
            </a>

            <a>
              <strong>Mudança 24h: </strong><span className={Number(coin?.changePercent24Hr) > 0  ? Styles.profit : Styles.loss} >
                {Number(coin?.changePercent24Hr).toFixed(3)}</span>
            </a>

          </section>

        </div>
      </>
    )
  }
  