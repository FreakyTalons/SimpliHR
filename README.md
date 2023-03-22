# SimpliHR

## 🗒️Project Overview 

 - **Employee Attrition Prediction:**
 A fast, light-weight(integrated into an API) and highly accurate (~90%  accuracy achieved on training/ test data) Logistic Regression based model for predicting the probabilty of employee attrition.
 
 - **Realtime Attendance Monitoring:**
 Monitioring the employees' attendance through an integrated system, with software capabilities (highly accurate and light-weight HOG - Linear SVM based facial recognition, optimisations in video feed, only one picture required to generate recognition encodings) to function in real-time on a standalone unit.
 
 - **HR and Employee Portals:**
 Separate web based portals for HR [to view attrition insights, monitor attendance and manage employees] and Employees [to view attendance and manage personal info]
 
 ## ⚒️System Design 
 
![image](https://user-images.githubusercontent.com/60323313/227006779-5756ed51-1251-482e-ad7a-eec8493c64f2.png)

 ## ⚙️Set Up Steps 
 
 ### 🔗API_Config
 
 1. cd to the directory where requirements.txt is located on your local.
 2. run: `pip install -r requirements.txt`
 3. run : `uvicorn main:app --reload` this starts the server at http://127.0.0.1:8000/ 
 4. the endpoints that can be accessed are `/` and `/predict/{employee_category}` (possible values:`[allEmps, hrEmps, salesEmps, rndEmps]`)
 
 ### ✅Attendance System

 1. cd to the directory where requirements.txt is located on your local.
 2. run: `pip install -r requirements.txt`
 3. create an `imgs` directory here, in which create a `train` sub-directory to store the training images.
 4. run `python3 encodeAlgo.py` in the `SimpliHR/AttendanceSys` directory to generate encodings.
 5. create a `serviceAccountKey.json` that contains all the Firebase Credentials including the URL one for Firebase Realtime Database.
 6. edit the `data` and run `python3 addData.py` in the `SimpliHR/AttendanceSys` directory to add data to Firebase Realtime Database.
 7. run `python3 encodeAlgo.py` in the `SimpliHR/AttendanceSys` directory to run the main face recognition app.
 
 ### 💻hr-management-interface
 
 1. cd into `SimpliHR/hr-management-interface` and run `npm install` to install the dependencies.
 2. make `.env.local` file as given in the `.env.example` with your pertinent Firebase Credentials.
 3. run `npm run dev` to start the development server.
 4. run `mpm run build` to create a build followed by `npm run start` to tun the build.
 5. the server can be accessed over http://127.0.0.1:3000/
 
 
 *For a demo and detailed overview and explanation of the project, view this <a href="https://www.canva.com/design/DAFdsbWonHY/6nce2S5DCoYNnrc6nt2h4A/view?utm_content=DAFdsbWonHY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" >presentation</a>.*
