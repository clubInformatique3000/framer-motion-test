import { SquareComponent, SunComponent, WindComponent } from "../../components";
import style from "./JumpSquare.module.css";
export function JumpSquare() {
  return (
    <section className={style.wrapper}>
      <SunComponent />
      <WindComponent />
      <SquareComponent />
      <div className={style.shade} />
    </section>
  );
}
