import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Button,
} from "reactstrap";

import profile from "../../assets/images/profile.jpg";
import { Handle_Logout } from "../../utils/Auth/Logout_Auth";
import toast from 'react-hot-toast';
import { messages } from "../../constants/toast_messages";
import DecryptData from "../../utils/Password_decryption";

const ProductHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
 
  const [data, setData] = useState(false);
  

  console.log(data);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("isLogin")));
  }, [location]);

  const handleLogout = () => {
    Handle_Logout();
    navigate("/login");
    toast.success(messages.Logout_Success)
  };

  return (
   
    <div>
       {console.log(DecryptData('U2FsdGVkX18doIGbiIglkD2ON0AAo7jwg8HasdqZoN8='))}
      <Navbar>
        <NavbarBrand href="/">Shopping App</NavbarBrand>

        <Nav className="m-auto" navbar>
          <NavItem className="d-flex gap-3">
            {data && (
              <NavLink to="/login" onClick={handleLogout}>
                <Button className="bg-danger" id="logout">LogOut</Button>
              </NavLink>
            )}
            {data && (
              <NavLink to="/change_password">
                <Button className="bg-secondary" id='change_password'>Change password</Button>
              </NavLink>
            )}
            {data && (
              <NavLink to="/editprofile">
                <Button className="bg-success" id="change_profile">Edit Profile</Button>
              </NavLink>
            )}

            {data && (
              <NavLink to="/products">
                <Button className="bg-primary">Products</Button>
              </NavLink>
            )}
          </NavItem>
        </Nav>
        <NavbarText>
          <button className="border border-none">
            <img src={profile} height="50px" alt="this is pictur" />
          </button>
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default ProductHeader;
