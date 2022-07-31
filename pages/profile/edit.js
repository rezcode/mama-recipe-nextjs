import React from "react";
import HeaderProfile from "../../components/HeaderProfile";
import profileStyle from "../../styles/profile.module.css";

const EditProfile = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <HeaderProfile header={"Edit Profile"} />
            <div className="container" style={{ minHeight: "80vh" }}>
              <div className="row mt-4">
                <p className={profileStyle.pointer}>Change Photo Profile</p>
              </div>
              <hr className="mt-0" />
              <div className="row">
                <p className={profileStyle.pointer}>Change Password</p>
              </div>
              <hr className="mt-0" />
            </div>
            <div className={profileStyle.buttonProfile}>
              <div className="row">
                <div className="container">
                  <div className="d-grid">
                    <div
                      className={`btn-group-vertical ${profileStyle.buttonPhoto}`}
                    >
                      <button type="button" className="btn btn-secondary">
                        Photo Library
                      </button>
                      <button type="button" className="btn btn-secondary">
                        Take Photo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-1">
                <div className="container">
                  <div className={`d-grid ${profileStyle.buttonCancel}`}>
                    <button type="button" className="btn btn-secondary">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
