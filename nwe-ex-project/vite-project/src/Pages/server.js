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
      "https://docs.google.com/forms/d/e/1FAIpQLSdH1-pOT7JDOFpBe_Vd9wNJcu32PqLbKVIfumtIzp5gJ6uUTg/formResponse",
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
