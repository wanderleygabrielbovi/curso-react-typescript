import { useState, FormEvent, useEffect } from 'react';
import styles from './home.module.css';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { CoinProps } from '../../utils/interfaces';
import { DataProp } from '../../utils/interfaces';

export function Home() {
    const [input, setInput] = useState("");
    const [coins, setCoins] = useState<CoinProps[]>([]);

    useEffect(() => {
      getData();
    }, [])

    async function getData() {
      fetch("https://api.coincap.io/v2/assets?limit=10&offset=0")
      .then(response => response.json())
      .then((data: DataProp) => {
        const coinsData = data.data;
        
        const price = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        })

        const priceCompact = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          notation: "compact"
        })

        const formatedResult = coinsData.map((item) => {
          const formated = {
            ...item,
            formatedPrice: price.format(Number(item.priceUsd)),
            formatedMarket: priceCompact.format(Number(item.priceUsd)),
            formatedVolume: priceCompact.format(Number(item.volumeUsd24Hr))
          }

          return formated;
        })

        setCoins(formatedResult);
      })
    }

    const navigate = useNavigate();

    function handleSubmit(e: FormEvent) {
      e.preventDefault();

      navigate(`/datail/${input}`)
    }

    function handleGetMore() {

    }

    return (
      <main className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Digite o nome da moeda..."
            value={input}
            onChange={ (e) => setInput(e.target.value) }
            />
            <button type="submit">
              <BsSearch size={30} color="#FFF" />
            </button>
        </form>

        <table>
          <thead>
            <tr>
              <th scope="col">Moeda</th>
              <th scope="col">Valor mercado</th>
              <th scope="col">Preco</th>
              <th scope="col">Volume</th>
              <th scope="col">Mudanca 24h</th>
            </tr>
          </thead>

          <tbody id="tbody">
            
          {coins.length > 0 && coins.map((item) => (
            <tr className={styles.tr} key={item.id}>
              
              <td className={styles.tdLabel} data-label="Moeda">
                <div className={styles.name}>
                  <img 
                  className={styles.logo}
                    src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} 
                    alt="Logo Cripto" 
                  />
                  <Link to={`/detail/${item.id}`}>
                  <span>{item.name}</span> | {item.symbol}
                </Link>
                </div>
              </td>

              <td className={styles.tdLabel} data-label="Valor mercado">
                {item.formatedMarket}
              </td>

              <td className={styles.tdLabel} data-label="Preco">
                {item.formatedPrice}
              </td>

              <td className={styles.tdLabel} data-label="Volume">
                {item.formatedVolume}
              </td>

              <td className={Number(item.changePercent24Hr) > 0 ? styles.tdProfit : styles.tdLoss} data-label="Mudanca 24h">
                <span>{Number(item.changePercent24Hr).toFixed(3)}</span>
              </td>
            
            </tr>
          ))}

          </tbody>
        </table>

        <button className={styles.buttonMore} onClick={handleGetMore}>
          Carregar mais
        </button>

      </main>
    )
  }
  