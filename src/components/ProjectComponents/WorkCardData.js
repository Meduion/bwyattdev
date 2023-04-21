import snowbird from '../../assets/snowbird.png';
import whatsCooking from '../../assets/cooking.png';
import bodyBuddy from '../../assets/body-buddy.png';

const ProjectCardData = [
  {
    imgsrc: snowbird,
    title: "The Snowbird Exchange",
    text: "A travel website that offers the five day weather forecast for your travel location, the current exchange rate to Canadian dollars, and dynamic images from your destination. Trial version, search London, Paris, Miami, Cancun and Rio de Janeiro to explore functionality.",
    view: "https://meduion.github.io/the-snowbird-exchange/",
    source: "https://github.com/Meduion/the-snowbird-exchange",
  },
  {
    imgsrc: bodyBuddy,
    title: "Body Buddy",
    text: "Fitness app built in React with Next.js 13.2, Prisma, and MongoDB. Upon creating an account, users can construct their own workouts by calling a third party API to view different exercises. They then build a workout from these exercises and save it to the application's database.",
    view: "https://whats--cooking.herokuapp.com/",
    source: "https://github.com/Meduion/whats-cooking"
  },
  {
    imgsrc: whatsCooking,
    title: "What's Cooking",
    text: "A recipe finding and storage website tied to a third party API. Users can create an account, login, and save their recipes to their account. The dynamic interface offers functionality and to create and save your own recipes, as well as linking to external sites for the full recipes.",
    view: "https://whats--cooking.herokuapp.com/",
    source: "https://github.com/Meduion/whats-cooking"
  },
];

export default ProjectCardData;