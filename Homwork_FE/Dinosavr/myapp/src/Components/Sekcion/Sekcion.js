import React from "react";
import s from "./Sekcion.module.css";
import dino from "../../images/dino.png";

function Sekcion() {
  return (
    <div className={s.sekcion}>
      <div className={s.sekcion_left}>
        <h2>Веломастерская “Велозар”</h2>
        <p>
          Мы, мастера веломастерской «Велозар», как раз те самые счастливые
          люди, которые смогли превратить свое увлечение и хобби в профессию. Мы
          сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам
          только радость и удовольствие от езды.
        </p>
      </div>
      <div className={s.sekcion_right}>
        <img src={dino} />
      </div>
    </div>
  );
}

export default Sekcion;
