import React from "react";
import authStyle from "../styles/auth.module.css";
import { FiChevronLeft, FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";
import Link from "next/link";

const register = () => {
  return (
    <>
      <div id="loginPage" className="row justify-content-center">
        <div className={`col-md-4 ${authStyle.bodyWrapper}`}>
          <div className="row">
            <div className={authStyle.navBack}>
              <Link href="/login" passHref>
                <FiChevronLeft size={40} color="#999999" />
              </Link>
            </div>
          </div>
          <div className="row text-center">
            <div className={authStyle.getStarted}>
              <h5>Let’s Get Started !</h5>
              <p>Create new account to access all feautures</p>
            </div>
          </div>
          <div className="row mx-3 mt-4">
            <form action="submit">
              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">
                  <FiUser color="#C4C4C4" size={30} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">
                  <HiOutlineMail color="#C4C4C4" size={30} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="E-Mail"
                />
              </div>
              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">
                  <BsTelephone color="#C4C4C4" size={30} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">
                  <BiLockAlt color="#C4C4C4" size={30} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Create New Password"
                />
              </div>
              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">
                  <BiLockOpenAlt color="#C4C4C4" size={30} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-warning" type="button">
                  CREATE
                </button>
                <div>
                  <p className={`text-center ${authStyle.forgotPassword}`}>
                    Already have account?{" "}
                    <Link href="/login" passHref>
                      <span>Log in Here</span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
