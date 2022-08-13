import React from "react";
import HeaderProfile from "../../components/headerProfile";
// import profileStyle from "../../styles/profile.module.css";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";

const EditProfile = () => {
  return (
    <>
      <div id="editProfilePage" className="container">
        <div className="row justify-content-center">
          <div className={`col-md-4 bodyWrapper`}>
            <HeaderProfile header={"Edit Profile"} />
            <div className="container" style={{ minHeight: "100vh" }}>
              <form>
                <div className="input-group mb-3 mt-4">
                  <span className="input-group-text" id="basic-addon1">
                    <FiUser color="#8B8A8F" size={30} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                    // onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <HiOutlineMail color="#8B8A8F" size={30} />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-Mail"
                    required
                    // onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <AiOutlinePhone color="#8B8A8F" size={30} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                    // onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <BiLockAlt color="#8B8A8F" size={30} />
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    // onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="row justify-content-center mt-4">
                  <div className="col-7">
                    <div className="d-grid gap-2">
                      <button className="btn btn-warning" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
