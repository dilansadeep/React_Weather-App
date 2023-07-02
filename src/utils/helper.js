import { COLORS } from "../constants/constants";

// Helper function to convert temperature from Kelvin to Celsius
export const convertKelvinToCelsius = (kelvin) => {
  return Math.round(kelvin - 273.15);
}

// Helper function to convert UNIX timestamp to time string
export const getTimeString = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const hours = date.getHours().toString().padStart(2, "0");

  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
}

// that function responsible for format time and date
export const timeFormate = () => {
  // Get the current date and time
  const currentDate = new Date();

  // Get the month name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = monthNames[currentDate.getMonth()];

  // Get the date
  const date = currentDate.getDate();

  // Get the current time
  const hours = currentDate.getHours().toString().padStart(2, "0");

  const minutes = currentDate.getMinutes().toString().padStart(2, "0");

  // Format the current time as a string
  const currentTime = `${hours}:${minutes}`;

  const data = currentTime + ", " + monthName + " " + date;

  return data;
}

// That function responsible for change background color
export const randomColor = () => {
  const randomIndex = Math.floor(Math.random() * COLORS.length);

  const randomColor = COLORS[randomIndex];

  return randomColor;
}
