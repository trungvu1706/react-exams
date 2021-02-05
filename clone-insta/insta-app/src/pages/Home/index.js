import React from "react";
import cls from "./style.module.scss";

import { Stories, Posts } from "../../components";

function Home() {
  return (
    <div className={cls.Home}>
      <Stories />
    </div>
  );
}

export default Home;
