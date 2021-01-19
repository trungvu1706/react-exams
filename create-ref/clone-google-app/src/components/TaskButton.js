import React, { Component } from "react";
import "./style.css";

class TaskButton extends Component {
  render() {
    return (
      <div className="task-btn">
        <div className="center">
          <center>
            <button className="btn-controll">Google search</button>
            <button className="btn-controll">I'm feeling lucky</button>
            <div className="religion">
              <p>Google offered in: </p>
              <a href="https://www.google.com/setprefs?sig=0_DEFz-bFxiU6CpFVn3GyxVmd-Otw%3D&hl=vi&source=homepage&sa=X&ved=0ahUKEwiz7vuWj6fuAhUPPnAKHc4HAf4Q2ZgBCA8">
                Tiếng Việt
              </a>
              <a href="https://www.google.com/setprefs?sig=0_DEFz-bFxiU6CpFVn3GyxVmd-Otw%3D&hl=fr&source=homepage&sa=X&ved=0ahUKEwiz7vuWj6fuAhUPPnAKHc4HAf4Q2ZgBCBA">
                Français
              </a>
              <a href="https://www.google.com/setprefs?sig=0_DEFz-bFxiU6CpFVn3GyxVmd-Otw%3D&hl=zh-TW&source=homepage&sa=X&ved=0ahUKEwiz7vuWj6fuAhUPPnAKHc4HAf4Q2ZgBCBE">
                中文（繁體）
              </a>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default TaskButton;
