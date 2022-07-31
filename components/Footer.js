import React from "react";
import homeStyle from "../styles/footer.module.css";
import { FiHome } from "react-icons/fi";
import { MdOutlineAddBox } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const Footer = () => {
  return (
    <div
      className={`row align-items-center justify-content-center ${homeStyle.footer}`}
    >
      <div className="col-3">
        <FiHome size={25} className={homeStyle.pointer} />
      </div>
      <div className="col-3">
        <MdOutlineAddBox size={27} className={homeStyle.pointer} />
      </div>
      <div className="col-3">
        <BsChat size={25} className={homeStyle.pointer} />
      </div>
      <div className="col-3">
        <FiUser size={25} className={homeStyle.pointer} />
      </div>
    </div>
  );
};

export default Footer;
