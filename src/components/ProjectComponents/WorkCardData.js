import pro1 from '../../assets/snowbird.png';
import pro2 from '../../assets/cooking.png';
import pro3 from '../../assets/scheduler.jpeg';

const ProjectCardData = [
  {
    imgsrc: pro1,
    title: "The Snowbird Exchange",
    text: "A travel website that offers the five day weather forecast for your travel location, the current exchange rate to Canadian dollars, and dynamic images from your destination. Trial version, search London, Paris, Miami, Cancun and Rio de Janeiro to explore functionality.",
    view: "https://meduion.github.io/the-snowbird-exchange/",
    source: "https://github.com/Meduion/the-snowbird-exchange",
  },
  {
    imgsrc: pro2,
    title: "What's Cooking",
    text: "A recipe finding and storage website tied to a third party API. Users can create an account, login, and save their recipes to their account. The interface offers functionality to create and save your own recipes, as well as linking to external sites for the full recipes.",
    view: "https://whats--cooking.herokuapp.com/",
    source: "https://github.com/Meduion/whats-cooking"
  },
  {
    imgsrc: pro3,
    title: "Day by Day",
    text: "A basic workday scheduling app that allows you to add tasks for a standard workday and save them in local storage, available when returning to the page later. The calendar and time update automatically to the current time and the time slots will change color as they pass.",
    view: "https://meduion.github.io/day-by-day/",
    source: "https://github.com/Meduion/day-by-day"
  },
];

export default ProjectCardData;