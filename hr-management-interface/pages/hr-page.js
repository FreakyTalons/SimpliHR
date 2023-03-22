//stylesheet import
import style from "../styles/hrPage.module.css";

//react bootstrap import
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";

//components import
import OptionsBar from "@/Components/OptionsBar/OptionsBar";
import AttritionInsights from "@/Components/AttritionInsights/AttritionInsights";

//recat imports
import { useState } from "react";

//next imports
import Head from "next/head";
import { useRouter } from "next/router";

//react icons import
import { MdFingerprint } from "react-icons/md";

//auth context
import { useAuth } from "@/context/AuthContext";
import AttendancePage from "@/Components/AttendancePage/AttendancePage";

const SignupForm = ({ setShowSignup }) => {
  const [status, setStatus] = useState("");
  const { user, signUp } = useAuth();
  console.log(user);
  const [formInput, setFormImput] = useState({
    email: "",
    password: "",
  });

  const [showPswd, setShowPswd] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(formInput.email, formInput.password);
      setStatus("User Created!");
    } catch (err) {
      console.log(err);
      setStatus("Error while creating user!");
    }
  };

  return (
    <>
      <div
        className={`${style.login_wrapper} d-flex justify-content-center align-items-center flex-column`}
      >
        <form onSubmit={handleSubmit}>
          <Stack gap={2} className="w-100 mx-auto">
            <input
              type="email"
              value={formInput.email}
              onChange={(e) => {
                setFormImput({ ...formInput, email: e.target.value });
              }}
              className={`${style.cust_input}`}
              placeholder="Enter Email ID"
            />

            <input
              type={showPswd ? "text" : "password"}
              value={formInput.password}
              onChange={(e) => {
                setFormImput({ ...formInput, password: e.target.value });
              }}
              className={`${style.cust_input}`}
              placeholder="Enter Password"
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
              Create New User!
            </button>
          </Stack>
          <p className="text-center">{status}</p>
        </form>
        <button
          className={`${style.cust_button}`}
          onClick={() => {
            setShowSignup(false);
          }}
        >
          Done
        </button>
      </div>
    </>
  );
};

export default function HRPage() {
  const router = useRouter();
  const [showSignup, setShowSignup] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);
  const [showInsights, setShowInsights] = useState(false);
  const { logout } = useAuth();

  return (
    <>
      <Head>
        <title>SimpliHR x Hexa</title>
      </Head>
      <>
        <div className={`${style.nav_styles} d-flex align-items-center`}>
          <h1 className={`${style.logo_text}`}>
            Simpli<span className={`${style.logo_white}`}>HR</span>
          </h1>
          <p className={`${style.welcome_text} mb-0`}>
            Welcome to the HR Portal!
          </p>
          <button
            className={`${style.cust_button_right}`}
            onClick={() => {
              logout();
              router.push("/");
            }}
          >
            Logout
          </button>
        </div>
        <Container fluid>
          {showSignup ? (
            <SignupForm setShowSignup={setShowSignup} />
          ) : showInsights ? (
            <AttritionInsights setShowInsights={setShowInsights} />
          ) : showAttendance ? (
            <AttendancePage setShowAttendance={setShowAttendance} />
          ) : (
            <div
              className={`${style.main_cont} d-flex align-items-center justify-content-center flex-column `}
            >
              <p className={`${style.placeholder}`}>
                What would you like to accomplish today?⚡
              </p>
              <OptionsBar
                setShowSignup={setShowSignup}
                setShowInsights={setShowInsights}
                setShowAttendance={setShowAttendance}
              />
            </div>
          )}
        </Container>
      </>
    </>
  );
}
