import project1 from '../assets/hero.jpeg'; // Hero Image
import userFlowImg from '../assets/user-flow.jpg';
import orgFlowImg from '../assets/org-flow.jpg';
import thumbnailsImg from '../assets/thumbnails.jpg';

import eventsImg from '../assets/EventsView.png'; //wireframes
import uploadEventImg from '../assets/UploadEvent.jpg';
import signUpImg from '../assets/SignUp.jpg';

import eventPageImg from '../assets/events.jpg'; //final product images
import indexImg from '../assets/index.jpeg';
import modalImg from '../assets/modal.jpg';


export const projectsData = {
  "in-the-mix": {
    id: 1,
    title: "IN THE MIX",
    tagline: "A review-site for events",
    heroImg: project1,
    skills: ["HTML", "CSS", "Web development", "UI/UX Design"],
    context: {
      type: "Team project",
      timeline: "August - November 2025"
    },
    tools: ["GitHub", "VS Code", "Bootstrap", "Figma"],
    overview: "In The Mix is a social platform that allows users to discover, attend, and rate local events while building a sense of community around shared interests. The platform emphasizes event discovery, reviews, and recurring engagement.",
    techStackDesc: "To create our project, we utilized Visual Studio Code and GitHub. The website and its webpages were coded using HTML, CSS, and JavaScript. All resources are uploaded to our shared GitHub repository.",
    demoLink: "https://protko-1103.github.io/In-The-Mix/",
    problem: {
      title: "There is a decline of social connection and finding a 'third space.'",
      description: "A third place is essential for community, connection and belonging. Provide an easier and more convenient way for users to find local events and attractions, along with making social connections. We want locals to share an experience and opportunities with other locals, artists, and small businesses. Keep people in the know with events that we know they will cherish."
    },
    solution: {
      title: "Create a space for users to:",
      points: [
        "find local and niche events",
        "connect with community",
        "rate and review experiences"
      ]
    },
    coordinator: {
        title: "Event coordinators can connect with their audience",
        points: [
            "register for an account",
            "upload events",
            "manage previous and upcoming events"
        ]
    },
    observation:{
        title: "Observation",
        description: "With the ongoing decline of social connection within the United States, we aim to create a social media style web application where people can easily find and review local and niche events, and connect with their community. Our research showed there are is no one single apps for people to filter, find, and review local and niche events. Our application would include:",
        points: [
            'Relevant search filters for users to sort events by location or niche',

            "Detailed event pages where users can get notable information about the event",

            "Accessibility Information, Amenities, Etc.",

            "A cataloging feature where users can save events, view the events they attended, and write reviews for the events they attended",

            "A Social Media feed where users can find and connect with other users in the local area"        
        ]
    },
    userflow:{
        title: "User flow & information architecture",
        description: "A major focus of this project was mapping out clear, intuitive user flows before any visual design began.",
        description2: "Key User Flows:",
        points: [
            'Browsing events by category or location',

            "Viewing event details and schedules",

            "Registering for an event",

            "Rating and reviewing events after attending",
            
            "Uploading events as an organizer"        
        ],
        diagrams: [
            userFlowImg, 
            orgFlowImg,
            thumbnailsImg,
            eventsImg,
            signUpImg,
            uploadEventImg
        ],
    },
    wireframes: [
      "/assets/wire1.jpg", "/assets/wire2.jpg", "/assets/wire3.jpg",
      "/assets/wire4.jpg", "/assets/wire5.jpg", "/assets/wire6.jpg",
      "/assets/wire7.jpg"
    ],
    visual:{
        title: "Using HMTL, CSS, and some JavaScript (modal), I coded the front-end parts of the site.",
        codeLink:"https://github.com/protko-1103/In-The-Mix",
        product: [
            eventPageImg,
            indexImg,
            modalImg
        ]
    },
    reflection:{
        title: "This project strengthened my skills in",
        points: [
            "Translating UX concepts into functional front-end code",
            "Managing shared JavaScript across multiple pages",
            "Debugging real-world UI issues (modals, validation, state management)",
            "Designing for both users and organizers within the same system"
        ],
        subtitle: "If expanded further, I would explore:",
        points2: [
            "Persistent user accounts and saved events",
            "A full review/rating system",
            "Enhanced accessibility and performance optimization"
        ]
    }
  }
};
