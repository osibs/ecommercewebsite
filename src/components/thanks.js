import { Link } from "react-router-dom";

const Thanks = () => {
    return ( 
        <div>
            
<div class="card1 position-absolute top-50 start-50 translate-middle"> 
  <div class="header1"> 
    <div class="image">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#000000" d="M20 7L9.00004 18L3.99994 13"></path> </g></svg>
      </div> 
      <div class="content">
         <span class="title">Order validated</span> 
         <p class="message">Thank you for your purchase. you package will be delivered within 2 days of your purchase</p> 
         </div> 
         <div class="actions">
            <Link to='/'> <button type="button" class="track">I want to shop more!</button> </Link>
            </div> 
            </div> 
            </div>




        </div>
     );
}
 
export default Thanks;