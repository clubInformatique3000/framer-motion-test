import { Link } from "react-router-dom";
import style from "./Home.module.css";

export function Home() {
  return (
    <section className={style.wrapper}>
      <h1>Projects</h1>
      <ul>
        <li>
          <Link to="/jump-square">Jump square</Link>
        </li>
      </ul>
    </section>
  );
}
