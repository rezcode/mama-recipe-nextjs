import React from "react";
import authStyle from "../styles/auth.module.css";
import Image from "next/image";
import avatar from "../public/images/img-user-default.png";
import { BiLockAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import Link from "next/link";

const login = () => {
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
                <form action="submit">
                  <div className="input-group mb-4">
                    <span className="input-group-text" id="basic-addon1">
                      <FiUser color="#C4C4C4" size={30} />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="examplexxx@gmail.com"
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
                    />
                  </div>
                  <div>
                    <div className="d-grid gap-2">
                      <button className="btn btn-warning" type="button">
                        LOG IN
                      </button>
                      <div>
                        <p
                          className={`text-center ${authStyle.forgotPassword}`}
                        >
                          Don’t have an account?{" "}
                          <Link href="/register" passHref>
                            <span>Sign Up</span>
                          </Link>
                        </p>
                      </div>
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
