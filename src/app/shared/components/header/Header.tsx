import { Outlet, useNavigate } from "react-router-dom"
import dropworklogo from "../../../../assets/img/dropworklogo.png"
import './Header.scss'
const Header = () => {
const navigate =useNavigate();

  return (
    <div className="header-main">
      <div  className="header-content">
        <div className="header-left">
      <img src={dropworklogo}  onClick={()=>navigate("/")}></img>
      <span  onClick={()=>navigate("/featured")}>Featured</span>
      <span onClick={()=>navigate("/dropstocks")}>Drop Stocks</span>
      <span onClick={()=>navigate("/dropoffer")}>Drop Offer</span>
      <span onClick={()=>navigate("/collection")}>Collection</span>

        </div>
      <div  className="header-right">
      <button onClick={()=>navigate("/sign-up")}>Sign up</button>
      <button onClick={()=>navigate("/login")}>Login</button>
      </div>
      </div>
      <div className="header-outlet">
      <Outlet />
      </div>
      
    </div>
  )
}

export default Header