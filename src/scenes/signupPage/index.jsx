import axios from "axios";
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";

function SignupPage() {
  const [photo, setPhoto] = useState("");
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
    );

    if (response.status === 200) {
      alert("Registration successful");
      setTimeout(() => {
        setRedirect(true);
      }, 5000);
    } else {
      alert("registration failed");
    }
  }

  if (redirect) {
    return <Navigate to={"/login"} />;
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
                <label className="label" htmlFor="avatar">
                  <span className="label-text">Avatar profil</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-xs w-full max-w-xs"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
