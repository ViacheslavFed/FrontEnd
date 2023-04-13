import React from "react";
import s from "./Servises.module.css";
import servises from "../../images/servises.jpg";

function Servises() {
  return (
    <div className={s.sekcion}>
      <div className={s.sekcion_left}>
        <h2>Что мы предлагаем</h2>
        <p>
          В нашей мастерской можно выполнить комплексное техническое
          обслуживание велосипеда, ремонт и настройку всех его узлов,
          шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает
          избежать многих проблем и дорогого ремонта. Все работы выполняем
          качественно и с душой.
        </p>
      </div>
      <div className={s.sekcion_right}>
        <img src={servises} />
      </div>
    </div>
  );
}

export default Servises;
