//stylesheet import
import style from "../styles/login.module.css";

//react import
import { useState } from "react";

//react bootstrap import
import { Stack } from "react-bootstrap";

//react icons import
import { MdFingerprint } from "react-icons/md";

//assets import
import Hexa from "../Assets/Images/hexa.png";

//next import
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

//auth context
import { useAuth } from "@/context/AuthContext";

export default function UserLogin() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [formInput, setFormImput] = useState({
    email: "",
    password: "",
  });

  const [showPswd, setShowPswd] = useState(false);
  const [status, setStatus] = useState("");
  const [empID, setEmpID] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formInput.email !== "hr@hexa.com") {
      try {
        await signIn(formInput.email, formInput.password);
        router.push(`/employee-page/${empID}`);
      } catch (err) {
        setStatus(err.message);
      }
    } else {
      setStatus("Kindly use Employee login credentials only!");
    }
  };

  return (
    <>
      <Head>
        <title>SimpliHR x Hexa</title>
      </Head>
      <div className={`${style.bg_div}`}>
        <div
          className={`${style.login_wrapper} d-flex justify-content-center align-items-center`}
        >
          <form onSubmit={handleSubmit}>
            <Stack gap={2} className="w-100 mx-auto">
              <Image
                src={Hexa}
                className={`${style.company_logo}`}
                alt="hexa logo"
              />
              <input
                type="email"
                value={formInput.email}
                onChange={(e) => {
                  setFormImput({ ...formInput, email: e.target.value });
                }}
                className={`${style.cust_input}`}
                placeholder="Enter you Email ID"
              />
              <input
                type="text"
                value={empID}
                onChange={(e) => {
                  setEmpID(e.target.value);
                }}
                className={`${style.cust_input}`}
                placeholder="Enter your Employee ID"
              />

              <input
                type={showPswd ? "text" : "password"}
                value={formInput.password}
                onChange={(e) => {
                  setFormImput({ ...formInput, password: e.target.value });
                }}
                className={`${style.cust_input}`}
                placeholder="Enter your Password"
              />

              <p
                className={`${style.green_txt}`}
                onClick={() => {
                  setShowPswd((prevValue) => !prevValue);
                }}
              >
                Show Password <MdFingerprint />
              </p>

              <button className={`${style.cust_button}`} type="submit">
                Login
              </button>
              <p className={`${style.status}`}>{status}</p>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
}
