import React, { useState } from "react";
import homeStyle from "../styles/footer.module.css";
import { FiHome } from "react-icons/fi";
import { MdOutlineAddBox } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const Footer = (props) => {
  const router = useRouter();

  const handleRedirect = () => {
    if (!props?.data?.token) {
      Swal.fire({
        icon: "error",
        text: "You need to login first",
      }).then((result) => (result.isConfirmed ? router.push("/login") : null));
    } else {
      router.push(`/profile/user`);
    }
  };

  return (
    <div
      className={`row align-items-center justify-content-center ${homeStyle.footer}`}
    >
      <div className="col-md-4">
        <div className={`row justify-content-center`}>
          <div className="col-3">
            <Link href="/" passHref>
              <FiHome size={25} className={homeStyle.pointer} />
            </Link>
          </div>
          <div className="col-3">
            <Link href="/recipe/add" passHref>
              <MdOutlineAddBox size={27} className={homeStyle.pointer} />
            </Link>
          </div>
          <div className="col-3">
            <BsChat size={25} className={homeStyle.pointer} />
          </div>
          <div className="col-3">
            {props?.data?.token ? (
              <div onClick={handleRedirect}>
                <FiUser size={25} className={homeStyle.pointer} />
              </div>
            ) : (
              <div onClick={handleRedirect}>
                <FiUser size={25} className={homeStyle.pointer} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
