import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonFill } from "react-bootstrap-icons";
import { LockFill } from "react-bootstrap-icons";
import "./Login.css";



const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submithandler = (e) => {
    const dataObj = {
      email,
      password,
    };
    console.log(dataObj);

    navigate("/dashboard");
  };

  return (
    <>
      <div className="container">
        <div className="con_2">
          <h3 className="heading">Welcome to Senwell solution</h3>
          <p className="about">
            We believe the beauty of an application is not only in the user
            interface but also in the code, performance and maintainability. We
            participate in the entire software development life cycle of
            solutions.
          </p>
        </div>
        <div className="inputs">
          <h3 className="heading">Login </h3>

          <form onSubmit={handleSubmit(Submithandler)}>
            <div className="icon">
              <PersonFill />
              <input
                {...register("firstName", { required: true })}
                placeholder="Enter Your Email"
                type="email"
                className="inputinfo"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.firstname && <p className="err">*Email is required.</p>}

            <div className="icon">
              <LockFill />
              <input
                {...register("lastName", { required: true })}
                placeholder="Enter Your Password"
                type="password"
                className="inputinfo"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errors.lastName && <p className="err">*Password is required.</p>}

            <p>
              <a href="https://senwellsys.com/">Forgot password</a>
            </p>

            <input type="submit" className="submit" />
          </form>
          <p>
            Don't have Account then <a href="">Register</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
