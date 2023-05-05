import neighborhood from '../../assets/neighborhood.jpg';
import whatsCooking from '../../assets/cooking.png';
import bodyBuddy from '../../assets/body-buddy.png';

const ProjectCardData = [
  {
    imgsrc: neighborhood,
    title: "The Neighborhood",
    text: "A social media network built using the MERN stack with several packages including React Redux and Material UI. This project allows users to create an account, create posts, like posts, read comments, and save friends. Interactions are saved to the database for furture login and use.",
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