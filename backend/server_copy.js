const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/select-company", (req, res) => {
    const { company } = req.body;
    console.log("Company selected:", company);  // For debug/logging
    res.sendStatus(200);
});


// app.post("/send-question", (req, res) => {
//     const { question } = req.body;
//     console.log("📩 Received question:", question); // for debug/log
//     res.sendStatus(200);
// });


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
