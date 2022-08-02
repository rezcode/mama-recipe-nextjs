import React from "react";
import homeStyle from "../styles/footer.module.css";
import { FiHome } from "react-icons/fi";
import { MdOutlineAddBox } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
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
            <Link href="/profile/user" passHref>
              <FiUser size={25} className={homeStyle.pointer} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
