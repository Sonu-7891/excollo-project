const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

app.post("/submit-form", async (req, res) => {
  try {
    const formData = new URLSearchParams();
    Object.entries(req.body).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await axios.post(
      "https://script.google.com/macros/s/AKfycbzQJ_mIA1cuYtUl6qicKdphKe2MZ-m7b39dmAkJYDEx2Z_4bmnLfXOIUNE4S90OUx1P/exec",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    res.status(200).send("Form submitted successfully");
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).send("Failed to submit form");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
