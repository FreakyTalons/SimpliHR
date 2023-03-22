//stylesheet import
import style from "../../styles/optionsbar.module.css";

//react bootstrap import
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//react icons import
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsCalendarCheck } from "react-icons/bs";
import { BiBrain } from "react-icons/bi";

export default function OptionsBar({
  setShowSignup,
  setShowInsights,
  setShowAttendance,
}) {
  return (
    <>
      <Container fluid>
        <Row className={`${style.sidebar_wrapper}`}>
          <Col>
            <Stack
              direction="horizontal"
              gap={2}
              className={`${style.sidebar_stack} p-2 align-items-center justify-content-center`}
              onClick={() => {
                setShowSignup(true);
              }}
            >
              <BsFillPersonPlusFill className={`${style.icon}`} />
              <p className={`${style.sidebar_txt} mb-0 `}>Add New Employee</p>
            </Stack>
          </Col>
          <Col>
            <Stack
              direction="horizontal"
              gap={2}
              className={`${style.sidebar_stack} p-2 align-items-center justify-content-center`}
              onClick={() => {
                setShowAttendance(true);
              }}
            >
              <BsCalendarCheck className={`${style.icon}`} />
              <p className={`${style.sidebar_txt} mb-0 `}>Attendance</p>
            </Stack>
          </Col>
          <Col>
            <Stack
              direction="horizontal"
              gap={2}
              className={`${style.sidebar_stack} p-2 align-items-center justify-content-center`}
              onClick={() => {
                setShowInsights(true);
              }}
            >
              <BiBrain className={`${style.icon}`} />
              <p className={`${style.sidebar_txt} mb-0 `}>Attrition Insights</p>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}
