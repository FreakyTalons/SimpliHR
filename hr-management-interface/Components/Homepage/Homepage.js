//stylesheet import
import style from "../../styles/login.module.css";

//next import
import Link from "next/link";

//react-bootstrap import
import { Stack } from "react-bootstrap";

//auth import
import { useAuth } from "@/context/AuthContext";

export default function Homepage() {
  const { user } = useAuth();

  return (
    <>
      <div className={`${style.bg_div}`}>
        <div
          className={`${style.login_wrapper} d-flex justify-content-center align-items-center`}
        >
          <div>
            <Stack gap={3} className="mx-auto">
              <h1 className={`${style.logo_text}`}>
                Welcome to Simpli
                <span className={`${style.logo_green}`}>HR</span>!
              </h1>
              <p className={`${style.subtext}`}>
                Choose your login option below.
              </p>
              <button className={`${style.cust_button}`}>
                <Link className={`${style.cust_link}`} href="/hr-login">
                  HR Login
                </Link>
              </button>
              <button className={`${style.cust_button}`}>
                <Link className={`${style.cust_link}`} href="/employee-login">
                  Employee Login
                </Link>
              </button>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}
