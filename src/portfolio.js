
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Cintia Garcia",
  title: "Hi all, I'm Cintia",
  subTitle: emoji("A passionate Student Software Developer 🚀 having an experience of building Projects in C++, Java, Python and JavaScript."),
  resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/cintiagarcia",
  linkedin: "https://www.linkedin.com/in/cintiagarciagarces/",
  gmail: "cintia.garcia.garces@gmail.com",
  gitlab: "",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I looking for",
  subTitle: "STUDENT SOFTWARE DEVELOPER WHO WANTS TO EXPLORE WEB DEVELOPMENT",
  skills: [
    emoji("⚡ Highly motivated to get deep in Web and Mobile Apps"),
    emoji("⚡ Front End & Back End awakens in me a great curiosity"),
    emoji("⚡ Keen problem-solving skills and relentless curiosity for applying sotware-driven solutions")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",  //Insert stack or technology you have experience in
      progressPercentage: "50%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript",
      progressPercentage: "40%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "30%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [

    {
      role: "Web Development",
      company: "Ironhack",
      companylogo:require("./assets/images/ironhack-Logo.png"),
      date: "March 2021 – Jun 2021",
      desc: "Full Stack Developer - Javascript (ES6), MongoDB, Express, React, NodeJS, HTML & CSS"
    },

    {
      role: "Bachelor's Degree in Computer Engineering",
      company: "UDIMA",
      companylogo: require("./assets/images/udima.jpg"),
      date: "Sept 2018 – Present",
      descBullets: [
        "Mention in Business Applications"
      ]
    },

    {
      role: "Degree in Business Administration and Management",
      company: "Uva",
      companylogo: require("./assets/images/uva.png"),
      date: "Sep 2002 – Jun 2008",
      desc: ""
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "cintiagarcia", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to create some projects.",

  blogs: [
    {
      url: "https://cryptowallet-reviews.herokuapp.com/",
      title: "Crypto Wallet Review",
      description: "It is a full stack CRUD application that uses Node, Express,MongoDB, Mongoose, Handlebars, Node basic authentication with bcrypt and Cloudinary. "
    },
    {
      url: "https://www.cintiagarciagarces.com/GuessWho_game/",
      title: "Guess Who Game?",
      description: "It is a application game that uses HTML, CSS and JavaScript."
    },
    {
      url: " https://baby-onthemove.herokuapp.com/",
      title: "Rental Stuff",
      description: "It is a full stack application that uses React, Node, Express, MongoDB, Mongoose, authentication with passport and Cloudinary."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+49-15163342342",
  email_address: "cintia.garcia.garces@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, workExperiences,techStack,openSource, bigProjects, blogSection, achievementSection, contactInfo };
