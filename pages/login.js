import React, { useState } from "react";
import authStyle from "../styles/auth.module.css";
import Image from "next/image";
import avatar from "../public/images/img-user-default.png";
import { BiLockAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { Spinner } from "react-bootstrap";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    setIsLoading(true);
    axios
      .post(`http://localhost:8000/auth/login`, { email, password })
      .then((res) => {
        const userDataStorage = {
          id: res?.data?.data?.id,
          name: res?.data?.data?.name,
          email: res?.data?.data?.email,
          token: res?.data?.token,
          image_profile: res?.data?.data?.image_profile,
          phone_number: res?.data?.data?.phone_number,
        };

        localStorage.setItem(
          "userDataStorage",
          JSON.stringify(userDataStorage)
        );

        Swal.fire({
          icon: "success",
          text: "Login Success",
        }).then((result) => (result.isConfirmed ? router.replace("/") : null));
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: `${err?.response?.data?.error}`,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div id="loginPage" className="row justify-content-center">
        <div className={`col-md-4 ${authStyle.bodyWrapper}`}>
          <div className="row align-items-center justify-content-center">
            <div className={`text-center `}>
              <div className="mt-5 mb-3">
                <Image src={avatar} />
              </div>
              <div className={authStyle.welcomeBody}>
                <h5>Welcome !</h5>
                <p>Log in to your exiting account.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="containter">
              <div className="row mx-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                >
                  <div className="input-group mb-4">
                    <span className="input-group-text" id="basic-addon1">
                      <FiUser color="#C4C4C4" size={30} />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="examplexxx@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      required
                    />
                  </div>
                  <div className="input-group mb-4">
                    <span className="input-group-text" id="basic-addon1">
                      <BiLockAlt color="#C4C4C4" size={30} />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      required
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-warning"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Spinner animation="border" variant="light" />
                      ) : (
                        "LOG IN"
                      )}
                    </button>
                    <div>
                      <p className={`text-center ${authStyle.forgotPassword}`}>
                        Don’t have an account?{" "}
                        <Link href="/register" passHref>
                          <span>Sign Up</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
