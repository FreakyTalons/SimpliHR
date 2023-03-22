//stylesheet import
import style from "../../styles/attendance.module.css";

//firebase imports
import { rtdatabase } from "@/config/firebase";
import { ref, onValue } from "firebase/database";

//react imports
import { useState, useEffect } from "react";

//react bootstrap import
import Table from "react-bootstrap/Table";

const db = rtdatabase;

export default function AttendancePage({ setShowAttendance }) {
  const [empAttendance, setEmpAttendance] = useState([]);

  const date = new Date();
  let day = date.getDate();

  const fetchFirebaseData = () => {
    const dbRef = ref(db, "Employees");
    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ id: keyName, ...data });
      });
      setEmpAttendance(records);
    });
  };

  useEffect(() => {
    fetchFirebaseData();
  }, []);

  return (
    <>
      <div className={`${style.font_def}`}>
        <Table className="w-75 mx-auto mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Attendance</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {empAttendance &&
              empAttendance.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td>
                    {day <=
                    parseInt(item.last_attendance_time.substring(8, 10)) ? (
                      <p className={`${style.insight_no}`}>Present</p>
                    ) : (
                      <p className={`${style.insight_yes}`}>Absent</p>
                    )}
                  </td>
                  <td>{item.last_attendance_time}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        <button
          className={`${style.cust_button_home}`}
          onClick={() => setShowAttendance(false)}
        >
          Go Back
        </button>
      </div>
    </>
  );
}
