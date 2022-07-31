import React from "react";
import profileStyle from "../../styles/profile.module.css";
import Image from "next/image";
import imageUser from "../../public/images/img-user-default.png";

const ProfileUser = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div
            className={`row align-items-center justify-content-center ${profileStyle.bgTopWrapper}`}
          >
            <div className="col-4 text-center">
              <Image src={imageUser} className="text-center" />
              <p className="text-white">Mareta Lopeda</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
