import React from "react";
import s from "./Paragraf.module.css"

function Paragraf() {
  return (
    <div className={s.paragraf}>
      <p>
        Приехав к нам однажды, многие наши клиенты становятся постоянными, а
        часть из них даже друзьями.
      </p>
      <p>
        А также в нашей мастерской можно отремонтировать электросамокат и
        электровелосипед.
      </p>
    </div>
  );
}

export default Paragraf;
