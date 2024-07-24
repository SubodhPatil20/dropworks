import { useNavigate } from "react-router-dom";
import "./SignupPage.scss";
const SignupPage = () => {
  const navigate =useNavigate();
  return (
    <div className="homepage-main">
      <div className="homepage-content">
        <div className="homepage-heading">Sign Up</div>
        <div className="homepage-full_length_input">
          <input placeholder="Email" />
          <input placeholder="Password" />
          <input placeholder="Confirm Password" />
          <button>Register</button>
          <button  className="homepage-register-btn1">Google</button>
          <button  className="homepage-register-btn2">Facebook</button>
         <span>Already a member ? <span className="gotologin" onClick={()=>navigate("/login")} >Login here</span> </span>
         <div className="homepage-agreet">I agree with the Terms and Conditions</div>
         
        </div>
        
        <div></div>
      </div>
    </div>
  );
};

export default SignupPage;
