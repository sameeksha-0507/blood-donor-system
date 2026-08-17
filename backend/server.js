const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
let donors = [];
let donorId = 0;

let requests = [];
let requestId = 0;

app.post("/donors", (req, res) => {
  const { name, blood, contact, location, availability } = req.body;
  if (!name || !blood || !contact || !location) {
    return res.status(400).send("Please provide name, blood group, contact, and location");
  }
  const donor = { id: donorId++, name, blood, contact, location, availability };
  donors.push(donor);
  res.send("Donor added successfully");
});

app.get("/donors", (req, res) => res.json(donors));

app.put("/donors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const donor = donors.find(d => d.id === id);
  if (!donor) return res.status(404).send("Donor not found");

  const { name, blood, contact, location, availability } = req.body;
  donor.name = name;
  donor.blood = blood;
  donor.contact = contact;
  donor.location = location;
  donor.availability = availability;
  res.send("Donor updated successfully");
});

app.delete("/donors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  donors = donors.filter(d => d.id !== id);
  res.send("Donor deleted successfully");
});

app.post("/requests", (req, res) => {
  const { patient, blood, hospital, location, contact, urgency, notes } = req.body;

  if (!patient || !blood || !hospital || !contact) {
    return res.status(400).send("Please provide patient, blood group, hospital, and contact");
  }

  const request = {
    id: requestId++,
    patient,
    blood,
    hospital,
    location,
    contact,
    urgency,
    notes
  };

  requests.push(request);
  res.send("Emergency request submitted successfully");
});

app.get("/requests", (req, res) => res.json(requests));

app.put("/requests/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const request = requests.find(r => r.id === id);
  if (!request) return res.status(404).send("Request not found");

  const { patient, blood, hospital, location, contact, urgency, notes } = req.body;
  request.patient = patient;
  request.blood = blood;
  request.hospital = hospital;
  request.location = location;
  request.contact = contact;
  request.urgency = urgency;
  request.notes = notes;
  res.send("Request updated successfully");
});

app.delete("/requests/:id", (req, res) => {
  const id = parseInt(req.params.id);
  requests = requests.filter(r => r.id !== id);
  res.send("Request deleted successfully");
});


app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
