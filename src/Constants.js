import BESTCAMP from "./Assets/Projects/BestCamp.png";
import GITHUBFINDER from './Assets/Projects/Github_finder_demo.png'
import AUTH from './Assets/Projects/Auth.png'

export const PROJECTS = [
  {
    image: BESTCAMP,
    name: "Best Campground in Canada",
    technologyUsed: "Bootstrap, ExpressJS, MongoDB, EJS view engine, RESTful APIs",
    description: "BestCamp is a public website application designed for Canada where users can create and review campgrounds.",
    url: "https://best-camp-canada.herokuapp.com/",
  },
  {
    image: GITHUBFINDER,
    name: "Github Finder",
    technologyUsed: "ReactJS, React Hooks, React-Icons, Fetch JSON data",
    description: "Github Finder is a website app where people can search user's information from Github.",
    url: "https://dwightu.github.io/Github-finder/",
  },
  {
    image: AUTH,
    name: "Auth uOttawa",
    technologyUsed: "ReactJS, React Hooks, Axios, Framer motion",
    description: "Auth is an unified identity authentication interface for all of OutStem's applications.",
    url: "https://challenge-two-flax.vercel.app/",
  }
];

export const FRONTENTSKILLS = [
  { name: "React", initialRating: 4 },
  { name: "BootStrap", initialRating: 4 },
  { name: "JavaScript", initialRating: 4 },
  { name: "HTML/CSS", initialRating: 3 },
];

export const BACKENDSKILLS = [
  { name: "ExpressJS/JavaScript", initialRating: 5 },
  { name: "NextJS/JavaScript", initialRating: 4 },
  { name: "BootStrap", initialRating: 4 },
  { name: "Unit-Testing(Jest)", initialRating: 4 },
  { name: "Springboot/Java", initialRating: 3 },

];

export const LANGUAGES = ["Javascript", "Python", "Java"]

export const TOOLS = ["Microservice", "Docker", "Kubernetes", "Jira", "Git", "Chrome DevTools", "Npm (Node Package Manager)", "CI/CD pipeline", "Linux", "Postman"]
