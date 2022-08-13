import React, { useEffect, useState } from "react";
import profileStyle from "../../styles/profile.module.css";
import Image from "next/image";
import { FiUser, FiAward, FiChevronRight, FiBookmark } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { BsCamera } from "react-icons/bs";
import Footer from "../../components/footer";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const ProfileUser = () => {
  const [userDataStorage, setUserDataStorage] = useState({});
  const [logOut, setLogOut] = useState(null);
  const [userProfile, setUserProfile] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setUserDataStorage(JSON.parse(localStorage?.getItem("userDataStorage")));
    setLogOut(localStorage?.getItem("userDataStorage"));
    getProfileUser();
  }, [userDataStorage?.name]);

  const handleLogout = () => {
    setLogOut(localStorage.clear());
    Swal.fire({
      icon: "success",
      text: "Logout success",
    }).then((result) => (result.isConfirmed ? router.replace("/") : null));
  };

  const config = {
    headers: {
      Authorization: `Bearer ${userDataStorage?.token}`,
    },
  };

  const getProfileUser = () => {
    axios
      .get(`http://localhost:8000/users/${userDataStorage?.id}`, config)
      .then((res) => {
        setUserProfile(res?.data?.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div
            className={`row align-items-center justify-content-center ${profileStyle.bgTopWrapper}`}
          >
            <div className="col-8 text-center">
              <div className={profileStyle.avatarWrapper}>
                <label>
                  <input type="file" hidden />
                  <Image
                    src={userProfile?.image_profile}
                    className="text-center"
                    height={64}
                    width={64}
                  />
                  <div className={profileStyle.overlay}>
                    <BsCamera color="#EEC300" size={40} />
                    <p>Change photo</p>
                  </div>
                </label>
              </div>
              <p className="text-white mt-2">{userProfile?.name}</p>
              <div>
                <button
                  type="button"
                  className="btn btn-outline-light btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
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
      <Footer data={userDataStorage} />
    </>
  );
};

export default ProfileUser;
