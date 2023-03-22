import pickle
import face_recognition
import numpy as np
import cv2

from datetime import datetime


import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred, {'databaseURL':"https://capstone-hr-software-default-rtdb.firebaseio.com/"})

#loading the encoded file
print("Loading Face Encodings...")
file = open("EncodeFile.p","rb")
encodingsKeyValues = pickle.load(file)
file.close()
encodings,IDsList = encodingsKeyValues
print("Face Encodings Imported!")

counter = 0 
id = -1

#setting up live video capture
cap = cv2.VideoCapture(0)
cap.set(3,1280)
cap.set(4,720)

while True:
    success, img = cap.read()
    imgResize = cv2.resize(img,(0,0),None,0.5,0.5)
    imgResize = cv2.cvtColor(imgResize,cv2.COLOR_BGR2RGB)
    cv2.imshow("Camera Input",imgResize)
    cv2.waitKey(1)

    facesInFrame = face_recognition.face_locations(imgResize)
    encodingsForFrame = face_recognition.face_encodings(imgResize,facesInFrame)

    for encodedFace, faceLocation in zip(encodingsForFrame,facesInFrame):
        matches = face_recognition.compare_faces(encodings,encodedFace)
        faceDis = face_recognition.face_distance(encodings,encodedFace)
        indexMatch = np.argmin(faceDis)

        if matches[indexMatch]:
            id = IDsList[indexMatch]
            
            if counter == 0:
                counter = 1
    
    if counter != 0:
        if counter == 1:
            empInfo = db.reference(f'Employees/{id}').get()
            print(empInfo)
            datetimeObject = datetime.strptime(empInfo['last_attendance_time'], '%Y-%m-%d %H:%M:%S')
            secondsElapsed = (datetime.now() - datetimeObject).total_seconds()
            if secondsElapsed> 43200:
                ref = db.reference(f'Employees/{id}')
                ref.child('last_attendance_time').set(datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
        counter+=1

        if counter > 5:
            empInfo = []
            counter = 0
