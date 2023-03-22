import cv2
import pickle
import face_recognition
import os

folderPath = "imgs/train"
pathsList = os.listdir(folderPath)
imgList = []
IDsList = []

for path in pathsList:
    imgList.append(cv2.imread(os.path.join(folderPath,path)))
    IDsList.append(os.path.splitext(path)[0])

def generateEncodings(imgList):
    encodeList = []

    for img in imgList:
        img=cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
        encode = face_recognition.face_encodings(img)[0]
        encodeList.append(encode)
    
    return encodeList

print("Encoding Initiated...")
encodings = generateEncodings(imgList)
encodingsKeyValues = [encodings,IDsList]
print("Encoding Complete!")

file = open("EncodeFile.p", "wb")
pickle.dump(encodingsKeyValues,file)
file.close()
print("File Generated!")