import axios from "axios";
import { UserContext } from "../../context/userContext";
import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authService } from "../../services";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate()
  const login = async (e) => {
    e.preventDefault()
    try {
        const response = await authService.login({
          email: email,
          password: password
        })
        // console.log(response)
        // console.log('masuk', response.data)
        if (response.data.status === "success") {
          setUserInfo(response.data.data)
          localStorage.setItem("smartcityhub", JSON.stringify(response.data.data))
          navigate("/")
        }
    } catch (e) {
      if (e.response.data === "wrong password") {
        alert("Password salah")
      }
    }
  }
  // async function login(e) {
  //   e.preventDefault();
 
  //   const response = await fetch("http://localhost:3000/api/users/login", {
  //     method: "POST",
  //     body: JSON.stringify({ email, password }),
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   if (response.ok) {
  //     response.json().then((userInfo) => {
  //       setUserInfo(userInfo.data);
  //       localStorage.setItem("smartcityhub", JSON.stringify(userInfo.data));
  //       setRedirect(true);
  //     });
  //   } else {
  //     alert("Wrong credentials");
  //   }

  //   if (response.status === 200) {
  //     alert("login successfull");
  //   } else {
  //     alert("login failed");
  //   }
  // }

  // if (redirect) {
  //   return <Navigate to={"/"} />;
  // }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={login}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                <Link to="/signup">Sign UP</Link>
              </button>
            </div>
            <div className="divider"></div>
            <button className="btn">Google</button>
            <button className="btn">Twiiter</button>
            <button className="btn">Github</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
