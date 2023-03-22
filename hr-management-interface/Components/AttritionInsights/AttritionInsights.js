//stylesheet import
import style from "../../styles/insights.module.css";

//react bootstrap import
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

//dataset imports
import allEmps from "@/db/dataset_allemp";
import hrEmps from "@/db/dataset_hr";
import salesEmps from "@/db/dataset_sales";
import rndEmps from "@/db/dataset_rnd";
import empNameId from "@/db/empNameId";

//react imports
import { useState } from "react";

export default function AttritionInsights({ setShowInsights }) {
  const [empCat, setEmpCat] = useState();
  const [insights, setInsights] = useState();

  const fetchData = (reqTxt) => {
    reqTxt === "allEmps"
      ? setEmpCat(allEmps)
      : reqTxt === "hrEmps"
      ? setEmpCat(hrEmps)
      : reqTxt === "rndEmps"
      ? setEmpCat(rndEmps)
      : setEmpCat(salesEmps);

    fetch(`http://localhost:8000/predict/${reqTxt}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInsights(data);
      });
  };

  const getNameByID = (id) => {
    for (let i = 0; i < empNameId.length; i++) {
      if (empNameId[i].empId == id) return empNameId[i].name;
    }
  };

  console.log(allEmps);

  return (
    <>
      <div
        className={`${style.main_cont} d-flex align-items-center  flex-column `}
      >
        <p className={`${style.placeholder}`}>
          Select a department to view the Attrition Insights💡
        </p>
        <Row className={`${style.menu_wrapper}`}>
          <Col>
            <button
              className={`${style.cust_button}`}
              onClick={() => {
                fetchData("allEmps");
              }}
            >
              {" "}
              All Employees{" "}
            </button>
          </Col>
          <Col>
            <button
              className={`${style.cust_button}`}
              onClick={() => {
                fetchData("salesEmps");
              }}
            >
              {" "}
              Sales & Marketting{" "}
            </button>
          </Col>
          <Col>
            <button
              className={`${style.cust_button}`}
              onClick={() => {
                fetchData("rndEmps");
              }}
            >
              {" "}
              Research & Development{" "}
            </button>
          </Col>
          <Col>
            <button
              className={`${style.cust_button}`}
              onClick={() => {
                fetchData("hrEmps");
              }}
            >
              {" "}
              Human Resources{" "}
            </button>
          </Col>
        </Row>
        <Table className="w-75 mx-auto mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Job Role</th>
              <th>Job Level</th>
              <th>Might Resign?</th>
            </tr>
          </thead>
          <tbody>
            {empCat &&
              empCat.map((emp, key) => (
                <tr>
                  <td>{key + 1}</td>
                  <td>{emp.EmployeeNumber}</td>
                  <td>{getNameByID(emp.EmployeeNumber)}</td>
                  <td>{emp.Department}</td>
                  <td>{emp.JobRole}</td>
                  <td>{emp.JobLevel}</td>
                  {insights && (
                    <td>
                      {insights[key] === 0 ? (
                        <p className={`${style.insight_no}`}>No</p>
                      ) : (
                        <p className={`${style.insight_yes}`}>Yes</p>
                      )}
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </Table>
        <button
          className={`${style.cust_button_home}`}
          onClick={() => setShowInsights(false)}
        >
          Go Back
        </button>
      </div>
    </>
  );
}
