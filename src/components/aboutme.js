import { Link } from "react-router-dom";

const Aboutme = () => {
    return (
      <div>
        <div class="page">
          <div class="margin"></div>
          <p>
            Hi there Visitor! This is a project I built using React, It is an ecommerce website, You can not purchase anything but all buttons will lead you somewhere! Do some clicking!, hehehe. Hope you like it! Catch me on  @ <Link to="https://wa.me/message/KAJCTXPOHAWXB1" target="_blank">Whatsapp</Link><br/>
            Please view in web version for better experience. This is a test of knowledge gained in my react class.
          </p>
        </div>
      </div>
    );
  };
  
  export default Aboutme;
  