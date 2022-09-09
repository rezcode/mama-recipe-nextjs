import Link from "next/link";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 align-items-center">
            <div className="row mt-3">
              <div className="col-4">
                <Link href="/" passHref>
                  <a>
                    <FiChevronLeft size={40} className="mb-2" />
                  </a>
                </Link>
              </div>
              <div className="col-7">
                <h5 style={{ marginTop: "7px" }}>Recipe List</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
