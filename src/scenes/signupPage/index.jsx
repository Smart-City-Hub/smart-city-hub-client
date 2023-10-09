import axios from "axios";
import { useState } from "react";
import React from "react";
import { Navigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function SignupPage() {
  // const navigate = useNavigate();
  // const [inputValue, setInputValue] = useState({
  //   email: "",
  //   password: "",
  //   username: "",
  // });
  // const { email, password, username } = inputValue;
  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputValue({
  //     ...inputValue,
  //     [name]: value,
  //   });
  // };

  // const handleError = (err) =>
  //   toast.error(err, {
  //     position: "bottom-left",
  //   });
  // const handleSuccess = (msg) =>
  //   toast.success(msg, {
  //     position: "bottom-right",
  //   });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:4000/signup",
  //       {
  //         ...inputValue,
  //       },
  //       { withCredentials: true }
  //     );
  //     const { success, message } = data;
  //     if (success) {
  //       handleSuccess(message);
  //       setTimeout(() => {
  //         navigate("/");
  //       }, 1000);
  //     } else {
  //       handleError(message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setInputValue({
  //     ...inputValue,
  //     email: "",
  //     password: "",
  //     username: "",
  //   });
  // };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3000/api/users/register",
      {
        username,
        email,
        password,
      }
    ) ;

    if (response.status === 200) {
      //  toast.success("Registration successful");
      alert("registration successfull");

        setTimeout(() => {
          setRedirect(true);
        }, 5000);
    } else {
      alert("registration failed");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up Now</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  className="input input-bordered"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Username</span>
                </label>
                <input
                  className="input input-bordered"
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter your username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text">Password</span>
                </label>
                <input
                  className="input input-bordered"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <label className="label">
                <span className="label-text-alt">Already have an account?</span>
                <Link to={"/login"}>Login</Link>
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
