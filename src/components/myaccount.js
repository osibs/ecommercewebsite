import { Link } from "react-router-dom";

const Myaccount = () => {
  return (
    <div>
        

      <div class="login-box">

      <div className="log-or-sign">
      <p> Login To Your Account</p>

      <p> or </p>

      <Link to='/'> <button className="btn text-white border"> Sign up </button> </Link>
      </div>

        <form>
          <div class="user-box">
            <input type="text" name="" required="" placeholder="Not Required" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" placeholder="Just hit Login" />
            <label>Password</label>
          </div>
          <center>
            <a href="/">
              LOG IN
              <span></span>
            </a>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Myaccount;
