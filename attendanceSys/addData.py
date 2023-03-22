
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred, {'databaseURL':"https://capstone-hr-software-default-rtdb.firebaseio.com/"})

ref = db.reference('Employees')

data = {"3":{
    "name":"Gauri Joshi",
    "department":"Human Resources",
    "last_attendance_time": "2023-03-19 08:02:54"
},
"5":{
    "name":"Rowan Atkinson",
    "department":"Sales",
    "last_attendance_time": "2023-03-19 08:02:54"
},
"14":{
    "name":"Lucas Wright",
    "department":"Research & Development",
    "last_attendance_time": "2023-03-19 08:02:54"
},
"28":{
    "name":"Taylor Swift",
    "department":"Human Resources",
    "last_attendance_time": "2023-03-19 08:02:54"
},
"29":{
    "name":"Leonardo DiCaprio",
    "department":"Human Resources",
    "last_attendance_time": "2023-03-19 08:02:54"
},
"44":{
    "name":"Dwayne Johnson",
    "department":"Human Resources",
    "last_attendance_time": "2023-03-19 08:02:54"
}}

for key, value in data.items():
    ref.child(key).set(value)
