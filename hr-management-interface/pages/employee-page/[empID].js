//stylesheet import
import style from "../../styles/employeePage.module.css";

//next import
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

//assets import
import Hexa from "../../Assets/Images/hexa.png";

//react-bootstrap import
import { Container, Row, Col, Stack } from "react-bootstrap";

//react-icons import
import { BsPersonCircle } from "react-icons/bs";
import { MdLabel } from "react-icons/md";
import { MdOutlineCake } from "react-icons/md";
import { BsGenderAmbiguous } from "react-icons/bs";
import { SiHandshake } from "react-icons/si";
import { TiPointOfInterest } from "react-icons/ti";
import { RiStarSmileFill } from "react-icons/ri";

//react import
import { useEffect, useState } from "react";

//auth import
import { useAuth } from "@/context/AuthContext";

//dataset imports
import allEmps from "@/db/dataset_allemp";
import empNameId from "@/db/empNameId";

//firebase imports
import { rtdatabase } from "@/config/firebase";
import { ref, onValue } from "firebase/database";

const db = rtdatabase;

const dummyData = {
  Name: "Tony Stark",
  Age: 32,
  Department: "Research & Development",
  EducationField: "Life Sciences",
  EmployeeNumber: 2069,
  Gender: "Male",
  JobRole: "Research Director",
  MaritalStatus: "Single",
  YearsAtCompany: 8,
  PerformanceRating: 4,
};

export default function EmployeePage() {
  const router = useRouter();
  const { empID } = router.query;
  const { logout } = useAuth();
  const [showSurvey, setShowSurvey] = useState(false);
  const [empData, setEmpData] = useState(dummyData);
  const [empName, setEmpName] = useState({ empID: "", name: "" });

  const [survey, setSurvey] = useState({
    distanceFromHome: "",
    totalWorkingYears: "",
    yearsInCurrentRole: "",
    yearsSinceLastPromotion: "",
    yearsWithCurrManager: "",
    businessTravel: "",
    environmentSatisfaction: "",
    jobSatisfaction: "",
    overTime: "",
    workLifeBalance: "",
    stockOptionLevel: "",
  });

  const [attendance, setAttendance] = useState("");

  const date = new Date();
  let day = date.getDate();

  const fetchFirebaseData = () => {
    const dbRef = ref(db, `Employees/${empID}/last_attendance_time`);
    onValue(dbRef, (snapshot) => {
      let value = snapshot.val();
      let num = parseInt(value.substring(8, 10));
      day <= num ? setAttendance("Present") : setAttendance("Absent");
    });
  };

  useEffect(() => {
    fetchFirebaseData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(survey);
  };

  const getEmpDeets = () => {
    setEmpData(allEmps[parseInt(empID) - 1]);
    setEmpName(empNameId[parseInt(empID) - 1]);
  };

  useEffect(() => {
    getEmpDeets();
  });

  return (
    <>
      <Head>
        <title>Hexa - Employee</title>
      </Head>
      <>
        <div className={`${style.nav_styles} d-flex align-items-center`}>
          <Image
            className={`${style.logo_styles}`}
            src={Hexa}
            alt="Hexa logo"
          />
          <p className={`${style.welcome_text} mb-0`}>
            Welcome, {empName.name}!
          </p>
          <button
            className={`${style.cust_button}`}
            onClick={() => {
              logout();
              router.push("/");
            }}
          >
            Logout
          </button>
        </div>
        {!showSurvey ? (
          <Container fluid>
            <Row
              className={`${style.wrapper} align-items-center justify-content-center`}
            >
              <Col className=" d-flex align-items-center justify-content-center">
                <Stack gap={3}>
                  <Stack
                    direction="horizontal"
                    gap={2}
                    className="justify-content-start align-items-center"
                  >
                    <BsPersonCircle className={`${style.icon}`} />
                    <p className={`${style.prop_val} mb-0`}>
                      Employee Number: {empID}
                    </p>
                  </Stack>

                  <Stack
                    direction="horizontal"
                    gap={2}
                    className="justify-content-start align-items-center"
                  >
                    <RiStarSmileFill className={`${style.icon_gold}`} />
                    <p className={`${style.prop_val} mb-0`}>
                      Performance Rating: {empData.PerformanceRating}
                    </p>
                  </Stack>

                  <Stack
                    direction="horizontal"
                    gap={2}
                    className="justify-content-start align-items-center"
                  >
                    <BsGenderAmbiguous className={`${style.icon}`} />
                    <p className={`${style.prop_val} mb-0`}>{empData.Gender}</p>
                  </Stack>

                  <Stack
                    direction="horizontal"
                    gap={2}
                    className="justify-content-start align-items-center"
                  >
                    <MdOutlineCake className={`${style.icon}`} />
                    <p className={`${style.prop_val} mb-0`}>
                      {`${empData.Age} years`}
                    </p>
                  </Stack>

                  <Stack
                    direction="horizontal"
                    gap={2}
                    className="justify-content-start align-items-center"
                  >
                    <MdLabel className={`${style.icon}`} />
                    <p className={`${style.prop_val} mb-0`}>
                      {empData.Department} - {empData.JobRole}
                    </p>
                  </Stack>

                  <Stack
                    direction="horizontal"
                    gap={2}
                    className="justify-content-start align-items-center"
                  >
                    <SiHandshake className={`${style.icon}`} />
                    <p className={`${style.prop_val} mb-0`}>
                      {empData.MaritalStatus}
                    </p>
                  </Stack>

                  <Stack
                    direction="horizontal"
                    gap={2}
                    className="justify-content-start align-items-center"
                  >
                    <TiPointOfInterest className={`${style.icon}`} />
                    <p className={`${style.prop_val} mb-0`}>
                      Education Field: {empData.EducationField}
                    </p>
                  </Stack>

                  <Stack
                    direction="horizontal"
                    gap={2}
                    className="justify-content-start align-items-center"
                  >
                    <TiPointOfInterest className={`${style.icon}`} />
                    <p className={`${style.prop_val} mb-0`}>
                      Years at Hexa: {empData.YearsAtCompany} years
                    </p>
                  </Stack>
                </Stack>
              </Col>
              <Col>
                <Stack
                  gap={4}
                  className="align-items-center justify-content-center"
                >
                  <button
                    className={`${style.cust_button1}`}
                    onClick={() => {
                      setShowSurvey(true);
                    }}
                  >
                    Fill Survey
                  </button>

                  <p className={`${style.prop_val} mb-0 d-inline`}>
                    {" "}
                    Your Attendance:{" "}
                  </p>

                  <div>
                    <p className={`${style.prop_val} mb-0 d-inline`}>
                      {" "}
                      Today:{" "}
                    </p>
                    {attendance === "Present" ? (
                      <p
                        className={`${style.prop_val} mb-0 d-inline`}
                        style={{ color: "#00A36C" }}
                      >
                        Present
                      </p>
                    ) : attendance === "Absent" ? (
                      <p
                        className={`${style.prop_val} mb-0 d-inline`}
                        style={{ color: "#FF5733" }}
                      >
                        Absent
                      </p>
                    ) : (
                      <p
                        className={`${style.prop_val} mb-0 d-inline`}
                        style={{ color: "#FDDA0D" }}
                      >
                        Update
                      </p>
                    )}
                  </div>
                </Stack>
              </Col>
            </Row>
          </Container>
        ) : (
          <Container fluid>
            <div className={`${style.form_wrapper}`}>
              <form onSubmit={handleSubmit}>
                <Stack
                  gap={2}
                  className="align-items-start justify-content-center"
                >
                  <p className={`${style.prop_val} mb-0`}>
                    Kindly answer the following questions, to the best of your
                    knowledge 😄
                  </p>
                  <p className={`${style.prop_val} mb-0`}>Distance from Home</p>
                  <input
                    type="text"
                    value={survey.distanceFromHome}
                    onChange={(e) => {
                      setSurvey({
                        ...survey,
                        distanceFromHome: e.target.value,
                      });
                    }}
                    className={`${style.cust_input}`}
                    placeholder="in kilometers"
                  />
                  <p className={`${style.prop_val} mb-0`}>
                    Total Working Years
                  </p>
                  <input
                    type="text"
                    value={survey.totalWorkingYears}
                    onChange={(e) => {
                      setSurvey({
                        ...survey,
                        totalWorkingYears: e.target.value,
                      });
                    }}
                    className={`${style.cust_input}`}
                    placeholder="Enter number only"
                  />
                  <p className={`${style.prop_val} mb-0`}>
                    Years in Current Role
                  </p>
                  <input
                    type="text"
                    value={survey.yearsInCurrentRole}
                    onChange={(e) => {
                      setSurvey({
                        ...survey,
                        yearsInCurrentRole: e.target.value,
                      });
                    }}
                    className={`${style.cust_input}`}
                    placeholder="Enter number only"
                  />
                  <p className={`${style.prop_val} mb-0`}>
                    Years since last promotion
                  </p>
                  <input
                    type="text"
                    value={survey.yearsSinceLastPromotion}
                    onChange={(e) => {
                      setSurvey({
                        ...survey,
                        yearsSinceLastPromotion: e.target.value,
                      });
                    }}
                    className={`${style.cust_input}`}
                    placeholder="Enter number only"
                  />
                  <p className={`${style.prop_val} mb-0`}>
                    Years with current Manager
                  </p>
                  <input
                    type="text"
                    value={survey.yearsWithCurrManager}
                    onChange={(e) => {
                      setSurvey({
                        ...survey,
                        yearsWithCurrManager: e.target.value,
                      });
                    }}
                    className={`${style.cust_input}`}
                    placeholder="Enter number only"
                  />
                  <p className={`${style.prop_val} mb-0`}>Business Travel</p>
                  <input
                    type="text"
                    value={survey.businessTravel}
                    onChange={(e) => {
                      setSurvey({
                        ...survey,
                        businessTravel: e.target.value,
                      });
                    }}
                    className={`${style.cust_input}`}
                    placeholder="Travel_Rarely / Travel_Frequently"
                  />
                  <p className={`${style.prop_val} mb-0`}>
                    Environment Satisfaction
                  </p>
                  <input
                    type="text"
                    value={survey.environmentSatisfaction}
                    onChange={(e) => {
                      setSurvey({
                        ...survey,
                        environmentSatisfaction: e.target.value,
                      });
                    }}
                    className={`${style.cust_input}`}
                    placeholder="Rate 1-5"
                  />
                  <p className={`${style.prop_val} mb-0`}>Job Satisfaction</p>
                  <input
                    type="text"
                    value={survey.jobSatisfaction}
                    onChange={(e) => {
                      setSurvey({
                        ...survey,
                        jobSatisfaction: e.target.value,
                      });
                    }}
                    className={`${style.cust_input}`}
                    placeholder="Rate 1-5"
                  />
                  <p className={`${style.prop_val} mb-0`}>Work Life Balance</p>
                  <input
                    type="text"
                    value={survey.workLifeBalance}
                    onChange={(e) => {
                      setSurvey({
                        ...survey,
                        workLifeBalance: e.target.value,
                      });
                    }}
                    className={`${style.cust_input}`}
                    placeholder="Rate 1-5"
                  />
                  <p className={`${style.prop_val} mb-0`}>
                    Stock-Options Level:
                  </p>
                  <input
                    type="text"
                    value={survey.stockOptionLevel}
                    onChange={(e) => {
                      setSurvey({
                        ...survey,
                        stockOptionLevel: e.target.value,
                      });
                    }}
                    className={`${style.cust_input}`}
                    placeholder="Rate 1-5"
                  />
                  <p className={`${style.prop_val} mb-0`}>
                    Do you do overtime?
                  </p>
                  <input
                    type="text"
                    value={survey.overTime}
                    onChange={(e) => {
                      setSurvey({
                        ...survey,
                        overTime: e.target.value,
                      });
                    }}
                    className={`${style.cust_input}`}
                    placeholder="Yes / No"
                  />

                  <button className={`${style.cust_button1}`} type="submit">
                    Submit
                  </button>
                </Stack>
              </form>
              <button
                className={`${style.cust_button1}`}
                onClick={() => {
                  setShowSurvey(false);
                }}
              >
                Go Back
              </button>
            </div>
          </Container>
        )}
      </>
    </>
  );
}
