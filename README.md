Blood Donor & Emergency Request System

Description
This project provides a simple system for managing blood donors and emergency requests.  
- Donors can register with their details (name, blood group, contact, location, availability).  
- Patients or hospitals can submit emergency blood requests.  
- The backend provides APIs to create, read, update, and delete donors and requests.  

Setup Instructions

Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
Install dependencies:
bash
npm install

Start the server:
bash
nodemon server.js

The backend will run at:
http://localhost:3000

Navigate to the frontend folder:
bash
cd frontend
Open index.html in your browser.

API Endpoints
Donors
POST /donors → Add a new donor

Example body:
json
{
  "name": "Sam",
  "blood": "O+",
  "contact": "9876543210",
  "location": "Mangaluru",
  "availability": true
}
GET /donors → Get all donors

PUT /donors/:id → Update donor by ID

DELETE /donors/:id → Delete donor by ID

Requests
POST /requests → Add a new emergency request
Example body:

json
{
  "patient": "John",
  "blood": "A+",
  "hospital": "City Hospital",
  "location": "Mangaluru",
  "contact": "9876543210",
  "urgency": "High",
  "notes": "Need within 2 hours"
}
GET /requests → Get all requests
PUT /requests/:id → Update request by ID
DELETE /requests/:id → Delete request by ID

API Testing
You can test the APIs using Postman:
Send requests to http://localhost:3000.

API Testing Evidence

## Donors API

- POST /donors  
  ![Add Donor](https://github.com/sameeksha-0507/blood-donor-system/blob/main/screenshot/donors-post.png?raw=true)

- GET /donors  
  ![Get Donors](https://github.com/sameeksha-0507/blood-donor-system/blob/main/screenshot/donors-get.png?raw=true)

- PUT /donors/:id  
  ![Update Donor](https://github.com/sameeksha-0507/blood-donor-system/blob/main/screenshot/donors-put.png?raw=true)

- DELETE /donors/:id  
  ![Delete Donor](https://github.com/sameeksha-0507/blood-donor-system/blob/main/screenshot/donor-delete.png?raw=true)

- Updated Donor Example  
  ![Updated Donor](https://github.com/sameeksha-0507/blood-donor-system/blob/main/screenshot/donors-updated.png?raw=true)



