import React from "react";
import s from "./Rent.module.css";
import rent from "../../images/rent.jpg";

function Rent() {
  return (
    <div className={s.sekcion}>
      <div className={s.sekcion_left}>
        <img src={rent} />
      </div>
      <div className={s.sekcion_right}>
        <h2>Прокат велосипедов</h2>
        <p>
          У нас вы можете взять на прокат хорошо обслуженные и настроенные
          велосипеды. Как раз мы находимся в прекрасном парке!
        </p>
      </div>
    </div>
  );
}

export default Rent;
