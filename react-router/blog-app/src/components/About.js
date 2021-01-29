import React from "react";
import "../asset/scss/About/About.scss";

const About = () => {
  return (
    <div className="About">
      <div className="About-content">
        <div>
          <img src="../img/avatar-ab.jpg" alt="avt" />
        </div>

        <div className="ab-text">
          <h2>About me</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum
          turpis, mollis quis lacinia id, volutpat in ex. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed
          scelerisque dapibus mauris, in maximus erat dapibus non. Etiam
          egestas, erat interdum vestibulum rutrum, ipsum quam condimentum
          nulla, ut elementum orci sem ut ligula. Donec libero tellus,
          scelerisque in pellentesque ut, faucibus non quam. Ut euismod accumsan
          purus vel suscipit. Nulla tincidunt lacus sit amet est viverra
          eleifend. Nam blandit purus in felis auctor, in maximus justo tempus.
          Integer at finibus velit. Aliquam vel ipsum vel nunc lobortis
          interdum. In rhoncus at elit sit amet maximus. Nam ornare sagittis
          ipsum quis congue. Nullam euismod diam sed iaculis mattis. Donec
          hendrerit ullamcorper libero eget volutpat. In hac habitasse platea
          dictumst. Quisque ac aliquet dolor, at tincidunt turpis.
        </div>
      </div>
    </div>
  );
};

export default About;
