import React, { useState } from "react";
import authStyle from "../styles/auth.module.css";
import { FiChevronLeft, FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";
import { Spinner } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleRegister = () => {
    setIsLoading(true);
    const body = {
      name,
      email,
      phoneNumber,
      password,
    };

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        text: `Your password and confirmation password does not match.`,
      });
      setIsLoading(false);
    } else {
      axios
        .post(`${process.env.NEXT_PUBLIC_URL_API}/auth/register`, body)
        .then((res) => {
          Swal.fire({
            icon: "success",
            text: "Register Success",
          }).then((result) =>
            result.isConfirmed ? router.push("/login") : null
          );
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            text: `${err?.response?.data}`,
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <div id="registerPage" className="row justify-content-center">
        <div className={`col-md-4 ${authStyle.registerWrapper}`}>
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRegister();
              }}
            >
              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">
                  <FiUser color="#C4C4C4" size={30} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">
                  <HiOutlineMail color="#C4C4C4" size={30} />
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-Mail"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">
                  <BsTelephone color="#C4C4C4" size={30} />
                </span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
                  placeholder="Create New Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">
                  <BiLockOpenAlt color="#C4C4C4" size={30} />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                    "CREATE"
                  )}
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
