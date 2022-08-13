import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeaderProfile from "../../components/headerProfile";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { Spinner } from "react-bootstrap";
import style from "../../styles/editUserPage.module.css";
import axios from "axios";
import Swal from "sweetalert2";

const EditProfile = () => {
  const [userDataStorage, setUserDataStorage] = useState({});
  const router = useRouter();

  useEffect(() => {
    setUserDataStorage(JSON.parse(localStorage?.getItem("userDataStorage")));
  }, []);

  const handleEdit = (values) => {
    // console.log("form values", values);
    const { name, email, phoneNumber, password } = values;
    const config = {
      headers: {
        Authorization: `Bearer ${userDataStorage?.token}`,
      },
    };

    const body = {
      name,
      email,
      phoneNumber,
      password,
    };

    console.log("body", body);
    if (name === "" && email === "" && phoneNumber === "" && password === "") {
      Swal.fire({
        icon: "warning",
        text: "Nothing changed",
      });
      formik.setSubmitting(false);
    } else {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_URL_API}/users/${userDataStorage?.id}`,
          body,
          config
        )
        .then((res) => {
          Swal.fire({
            icon: "success",
            text: "Update data successfully",
          }).then((result) =>
            result.isConfirmed ? router.push("/profile/user") : null
          );
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          formik.setSubmitting(false);
          formik.resetForm;
        });
    }
  };
  const formik = useFormik({
    // initial values
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    // validation schema
    validationSchema: Yup.object({
      name: Yup.string(),
      email: Yup.string().email("Invalid email format"),
      phoneNumber: Yup.number().typeError("Must be number"),
      password: Yup.string()
        .min(6, "Should more than 6 characters")
        // .matches(/[a-z]/g, "Should contain at least 1 lowercase")
        .matches(/[A-Z]/g, "Should contain at least 1 uppercase")
        .matches(/[0-9]/g, "Should contain at least 1 number")
        .matches(/^\S*$/, "Should not contain spaces"),
    }),
    // handle submission
    onSubmit: handleEdit,
  });

  // console.log("formik", formik);

  return (
    <>
      <div id="editProfilePage" className="container">
        <div className="row justify-content-center">
          <div className={`col-md-4 bodyWrapper`}>
            <HeaderProfile header={"Edit Profile"} />
            <div className="container" style={{ minHeight: "100vh" }}>
              <form onSubmit={formik.handleSubmit} className={style.formSubmit}>
                <div className="input-group mt-4">
                  <span className="input-group-text" id="basic-addon1">
                    <FiUser color="#8B8A8F" size={30} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.name && <p>{formik.errors.name}</p>}
                <div className="input-group mt-4">
                  <span className="input-group-text" id="basic-addon1">
                    <HiOutlineMail color="#8B8A8F" size={30} />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-Mail"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.email && <p>{formik.errors.email}</p>}
                <div className="input-group mt-4">
                  <span className="input-group-text" id="basic-addon1">
                    <AiOutlinePhone color="#8B8A8F" size={30} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.phoneNumber && (
                  <p>{formik.errors.phoneNumber}</p>
                )}
                <div className="input-group mt-4">
                  <span className="input-group-text" id="basic-addon1">
                    <BiLockAlt color="#8B8A8F" size={30} />
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.password && <p>{formik.errors.password}</p>}
                <div className="row justify-content-center mt-4">
                  <div className="col-7">
                    <div className="d-grid gap-2">
                      <button
                        className="btn btn-warning"
                        type="submit"
                        disabled={formik.isSubmitting}
                      >
                        {formik.isSubmitting ? (
                          <Spinner animation="border" variant="light" />
                        ) : (
                          "Submit"
                        )}
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
