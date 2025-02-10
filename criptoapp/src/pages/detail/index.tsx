import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CoinProps } from "../../utils/interfaces";

export function Detail() {
  const { cripto } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getCoin(){
      try{
        fetch(`https://api.coincap.io/v2/assets/${cripto}`)
        .then(response => response.json())
        .then(data => {

        })
      }catch(err){
        console.log(err);
        navigate("/");
      }
    }

    getCoin();
  }, [cripto])

    return (
      <>
        <div>
          <h1>Detalhes {cripto}</h1>
        </div>
      </>
    )
  }
  