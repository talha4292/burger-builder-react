import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../database/firebase-config";
import { Link } from "react-router-dom";
import "./Auth.css";
import Loader from "./Loader";

function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState("register");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const onSubmit = async () => {
    try {
      setLoader(true);
      if (flag === "login") {
        await signInWithEmailAndPassword(auth, email, password);
        setLoader(false);
        navigate("/");
      } else if (flag === "register") {
        await createUserWithEmailAndPassword(auth, email, password);
        setLoader(false);
        alert("Account Created");
        setError("");
      }
    } catch (error) {
      setError(error.message);
      setLoader(false);
    }
  };

  if (loader) {
    return <Loader />;
  }
  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        {flag === "login" ? (
          <h2>Login here</h2>
        ) : (
          <h2>Register your account</h2>
        )}
        <div className="Auth-form-content">
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          {error && <p className="text-center text-danger mt-2">{error}</p>}
          <div className="d-grid gap-2 mt-3">
            <button onClick={onSubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="d-grid gap-2 mt-3">
            {flag === "login" ? (
              <Link
                className="btn btn-secondary"
                onClick={() => setFlag("register")}
                to={"/auth"}
              >
                Register
              </Link>
            ) : (
              <Link
                className="btn btn-secondary"
                onClick={() => setFlag("login")}
                to={"/auth"}
              >
                Login
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Auth;
