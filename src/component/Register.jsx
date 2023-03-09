import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Register = () => {

    const{
        register,handleSubmit, formState: { errors }
    } = useForm();
    const[firstname,setFirstName] = useState("");
    const[lastname,setLastName] = useState("");
    const[mobno,setMobNo] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

  return (
    <>
    <div className="container">
      <div className="inputs">
        <div className="con">
          <div className="icon">
            <input
              type="text"
              placeholder="Enter Your First Name"
              className="inputinfo"
            />
          </div>
          <div className="icon">
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="inputinfo"
            />
          </div>
          <div className="icon">
            <input
              type="number"
              placeholder="Enter Your Number"
              className="inputinfo"
            />
          </div>
          <div className="icon">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="inputinfo"
            />
          </div>
          <div className="icon">
            <input
              type="password"
              placeholder="Enter Your Password"
              className="inputinfo"
            />
          </div>
          <input type="submit" className="submit" />
        </div>
      </div>
      </div>
    </>
  );
};
export default Register;
