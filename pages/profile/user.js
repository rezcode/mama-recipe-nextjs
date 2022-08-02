import React from "react";
import profileStyle from "../../styles/profile.module.css";
import Image from "next/image";
import imageUser from "../../public/images/img-user-default.png";
import { FiUser, FiAward, FiChevronRight, FiBookmark } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import Footer from "../../components/Footer";
import Link from "next/link";

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
          <div className="container">
            <div className={profileStyle.bgBotWrapper}>
              <div className="row">
                <div className={profileStyle.wrapperContent}>
                  <Link href="/profile/edit">
                    <div
                      className="row my-4 align-items-center"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="col-2 text-center">
                        <FiUser color="#EEC302" size={35} />
                      </div>
                      <div className="col-8">Edit User</div>
                      <div className="col-2">
                        <FiChevronRight size={20} />
                      </div>
                    </div>
                  </Link>

                  <Link href="/profile/my-recipe">
                    <div
                      className="row my-5 align-items-center"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="col-2 text-center">
                        <FiAward color="#EEC302" size={35} />
                      </div>
                      <div className="col-8">My Recipe</div>
                      <div className="col-2">
                        <FiChevronRight size={20} />
                      </div>
                    </div>
                  </Link>

                  <Link href="/profile/saved-recipe">
                    <div
                      className="row my-5 align-items-center"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="col-2 text-center">
                        <FiBookmark color="#EEC302" size={35} />
                      </div>
                      <div className="col-8">Saved Recipe</div>
                      <div className="col-2">
                        <FiChevronRight size={20} />
                      </div>
                    </div>
                  </Link>

                  <Link href="/profile/liked-recipe">
                    <div
                      className="row my-5 align-items-center"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="col-2 text-center">
                        <BiLike color="#EEC302" size={35} />
                      </div>
                      <div className="col-8">Liked Recipe</div>
                      <div className="col-2">
                        <FiChevronRight size={20} />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileUser;
