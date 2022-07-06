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

export const SKILLS = [
  { name: "JavaScript", initialRating: 4 },
  { name: "TypeScript", initialRating: 3 },
  { name: "Python", initialRating: 3 },
  { name: "Java", initialRating: 3 },
  { name: "React", initialRating: 4 },
  { name: "HTML/CSS", initialRating: 3 },
  { name: "BootStrap", initialRating: 4 },
  { name: "Expressjs", initialRating: 5 },
  { name: "Nextjs", initialRating: 4 },
  { name: "Unit-Testing(Jest)", initialRating: 3 },
  { name: "Git", initialRating: 4 },
];

export const TOOLS = ["Microservice", "Docker", "Kubernetes", "Jira", "Git", "Chrome DevTools", "Npm (Node Package Manager)", "CI/CD pipeline", "Linux", "Postman"]
