import styles from './home.module.css';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export function Home() {
    return (
      <main className={styles.container}>
        <form className={styles.form}>
          <input 
            type="text"
            placeholder="Digite o nome da moeda..."
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
            <tr className={styles.tr}>
              <td className={styles.tdLabel} data-label="Moeda">
                <div className={styles.name}>
                  <Link to={"/detail/bitcoin"}>
                  <span>Bitcoin</span> | BTC
                </Link>
                </div>
              </td>

              <td className={styles.tdLabel} data-label="Valor mercado">
                1T
              </td>

              <td className={styles.tdLabel} data-label="Preco">
                8.000
              </td>

              <td className={styles.tdLabel} data-label="Volume">
                2B
              </td>

              <td className={styles.tdLabel} data-label="Mudanca 24h">
                <span>1.20</span>
              </td>
              
            </tr>
          </tbody>
        </table>
      </main>
    )
  }
  