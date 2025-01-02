const express = require('express');
const app = express();

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.
*/

// Define the endpoint
app.get('/assistant/greet', (req, res) => {
  const userName = req.query.name; 
  if (!userName) {
    return res.status(400).json({ error: "Please provide a name as a query parameter." });
  }

  // Get the current day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const currentDay = daysOfWeek[today.getDay()];

  let dayMessage;
  switch (currentDay) {
    case "Monday":
      dayMessage = "Happy Monday! Start your week with energy!";
      break;
    case "Friday":
      dayMessage = "It's Friday! The weekend is near!";
      break;
    default:
      dayMessage = "Have a wonderful day!";
      break;
  }

  const response = {
    welcomeMessage: `Hello, ${userName}! Welcome to our assistant app!`,
    dayMessage: dayMessage,
  };

  res.json(response); 
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
