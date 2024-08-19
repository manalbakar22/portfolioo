import rst from "/public/assets/imgs/rst.png"
import quiz from "/public/assets/imgs/quiz.png"
import pass from "/public/assets/imgs/pass.png"
import fire from "/public/assets/imgs/fire.jpg"
import task from "/public/assets/imgs/task.png"
import port from "/public/assets/imgs/port.png"
import nlp from "/public/assets/imgs/nlp.jpg"
import technologies from "./stack"

const generateId = () => Date.now() + Math.floor(Math.random() * 1000);

const projects = [
    {
        
        id: generateId(),
        title: "nlp-projet",
        description: " projet permet de fire une  classification des tags en arabe en  use nlp machine learning",
        link: "https://quiz-manal.netlifyn.app/",
        image: nlp.src,
        stack: technologies.filter(tech => ["python", "NLP", "SVC","html"].includes(tech!.title.toLowerCase())),
        github: "https://github.com/manalbakar22/nlp-prj"
    },
    {
        id: generateId(),
        title: "Detection fire-no fire",
        description: "cette  projet vise a  faire  une  classification des  images  fire et  non  fire ",
        link: "https://quiz-manal.netlifyn.app/",
        image: fire.src,
        stack: technologies.filter(tech => ["html", "python", "css"].includes(tech!.title.toLowerCase())),
        github: "https://github.com/manalbakar22/FIEe-ap"
    },
    {
        id: generateId(),
        title: "Quiz-App",
        description: "An engaging quiz application designed to test developers' knowledge with randomly generated questions. The interface is clean and user-friendly, making it easy to start and navigate through quizzes.",
        link: "https://quiz-manal.netlifyn.app/",
        image: quiz.src,
        stack: technologies.filter(tech => ["html", "css", "javascript"].includes(tech!.title.toLowerCase())),
        github: "https://github.com/manalbakar22/Quiz-app"
    },
   
   
   
]

export default projects