/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Victor Schmit",
  title: "Hi all, I'm Victor Schmit",
  subTitle: emoji(
    "A Cyber Security Expert and Passionate  🚀 Having an experience in Information Security Management and a great interest in Penetration Testing."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1t-iLlMfN1vc1HRZtX2_DE7PNV2GhhIk8/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/victor-schmit-53a2461b7/",
  gmail: "victor.schmit.vs@gmail.com",
  hackthebox: "https://app.hackthebox.com/profile/612703",
  github: "https://github.com/vipongo",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Cyber Security passionate always wanting to learn more!",
  skills: [
    emoji("⚡ Penetration testing assessment"),
    emoji("⚡ Identifying, managing, and mitigating security risks"),
    emoji(
      "⚡ Coordination of security related activities, creation and maintaining documentation and guidelines about security and help the team create a “culture” for security."
    ),
    emoji("⚡ Some fullstack during my free time")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Enumeration tools",
      fontAwesomeClassname: "fa fa-list"
    },
    {
      skillName: "Privilege Escalation",
      fontAwesomeClassname: "fa fa-angle-double-up"
    },
    {
      skillName: "Information Disclosure",
      fontAwesomeClassname: "fa fa-exclamation-circle"
    },
    {
      skillName: "Exploit Finding",
      fontAwesomeClassname: "fa fa-user-secret"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fa fa-code"
    },
    {
      skillName: "Cryptography",
      fontAwesomeClassname: "fa fa-key"
    },
    {
      skillName: "Report writing",
      fontAwesomeClassname: "fa fa-file"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Comptia Security+",
      logo: require("./assets/images/comptia.svg"),
      subHeader: "Preparation to Comptia Security+ Certification",
      duration: "August 2022 - Present",
      desc: "Preparation to Comptia Security+ Certification with ambition to acquire it by end of September 2022.",
      descBullets: [
        "Assess",
        "Monitor and secure",
        "Operate",
        "Identify, analyze, and respond"
      ]
    },
    {
      schoolName: "Eötvös Loránd University",
      logo: require("./assets/images/eltelogo.png"),
      subHeader: "Master in Cyber Security",
      duration: "September 2021 - May 2022",
      desc: "Finished with mention 'Excellence'. I had 30 ECTS of business related courses.",
      descBullets: [
        "Information Security Management",
        "Penetration Testing",
        "Cryptography",
        "Privacy",
        "Network and System Security",
        "Inovation and Entrepreneurship"
      ]
    },
    {
      schoolName: "Turun Yliopisto University",
      logo: require("./assets/images/turku.png"),
      subHeader: "Master in Cyber Security",
      duration: "September 2021 - May 2022",
      desc: "Finished with mention 'Excellence'. I had 30 ECTS of business related courses.",
      descBullets: [
        "Security Engineering",
        "Firewall and IPS",
        "Protocol Processing and Security"
      ]
    },
    {
      schoolName: "Universidad Politécnica de Madrid",
      logo: require("./assets/images/madrid.png"),
      subHeader: "Summer School",
      duration: "July 2021",
      desc: "Disrupting Finance with Digital Technologies",
      descBullets: [
        "Business Planning",
        "Impact of ICT Technologies and Innovations",
        "Market trends",
        "Business life cycles goals"
      ]
    },
    {
      schoolName: "UNamur University",
      logo: require("./assets/images/unamurlogo.png"),
      subHeader: "Bachelor in Computer Science",
      duration: "September 2016 - August 2020",
      desc: "With Business electives.",
      descBullets: [
        "Introduction to programming languages such as Python, C, Javascript",
        "Cyber Security classes",
        "Business related electives"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Information Security Management", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Penetration Testing",
      progressPercentage: "70%"
    },
    {
      Stack: "Fullstack",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Your top 3 proficient Language experience
const languageStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "English", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "French",
      progressPercentage: "100%"
    },
    {
      Stack: "Dutch",
      progressPercentage: "40%"
    },
    {
      Stack: "Russian",
      progressPercentage: "15%"
    },
    {
      Stack: "Hungarian",
      progressPercentage: "15%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Information Security Manager",
      company: "Nokia",
      companylogo: require("./assets/images/nokia.png"),
      date: "December 2021 – Present",
      desc: "Information Security Manager in I&V organization tool development team.",
      descBullets: [
        "Identifying, managing, and mitigating security risks.",
        "Coordination of security related activities.",
        "Creation and maintaining documentation and guidelines about security.",
        "Help the team create a 'culture' for security."
      ]
    },
    {
      role: "Software Engineer",
      company: "CSLabs Namur",
      companylogo: require("./assets/images/cslabs.png"),
      date: "June 2019 – August 2020",
      desc: "Developing a Google Scholar API."
    },
    {
      role: "Student Ambassador",
      company: "EIT Digital Master School",
      companylogo: require("./assets/images/eit.png"),
      date: "November 2021 – Present",
      descBullets: [
        "Creation, organization and participation of events to promote EIT Digital Master School to worldwide students.",
        "Direct contact with applicants."
      ]
    },
    {
      role: "Collaborator",
      company: "Eötvös Loránd University",
      companylogo: require("./assets/images/eltelogo.png"),
      date: "December 2020 – January 2021",
      desc: "Creating in collaboration a new EIT Digital class called Innosocial."
    },
    {
      role: "Computer Security Animator",
      company: "Saint-Louis After School",
      companylogo: require("./assets/images/louis.png"),
      date: "September 2019 – June 2020",
      desc: "Raising awareness about computer security, using the internet, using social networks to teenagers from 11 to 13 years old."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Theses",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/double.png"),
      projectName:
        "Master's thesis 'A Rapid Approach To Web Application Security'",
      projectDesc:
        "Creation of a Master's thesis with Nokia to research the integration of security inside a completely unsecured web application.",
      footerLink: [
        {
          name: "Read the thesis work",
          url: "https://www.utupub.fi/handle/10024/154332"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/unamurlogo.png"),
      projectName: "Bachelor's thesis 'CPDI'",
      projectDesc:
        "Creation of a backend using Django to help developers find the best technologies for their project"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  //subtitle:
  //"Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Practical Ethical Hacking (PEH)",
      subtitle:
        "Practical side of ethical hacking. Providing a deep understanding of external and internal network penetration testing, wireless penetration testing, and web application penetration testing. ",
      image: require("./assets/images/tcm.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15_NUa2mLRNqhAPOHC7_WxnpncCHg2ahv/view?usp=sharing"
        }
      ]
    },
    {
      title: "HACKTHEBOX",
      subtitle: "Top 500 Global Ranking.",
      image: require("./assets/images/htb.png"),
      footerLink: [
        {
          name: "Link to profile",
          url: "https://app.hackthebox.com/profile/612703"
        }
      ]
    },
    {
      title: "Hack The Box Academy",
      subtitle:
        "Cyber security training with hands-on exercises and labs made by Hack The Box.",
      image: require("./assets/images/htb.png"),
      footerLink: [
        {
          name: "Transcript",
          url: "https://drive.google.com/file/d/1L76Rl5v81QowfCjQbB1rSquXG7vbNbtC/view?usp=sharing"
        }
      ]
    },

    {
      title: "Advent of Cyber",
      subtitle: "Cyber Security challenges",
      image: require("./assets/images/tryhackme.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1_DaZTHJr_QQC8SLbkr0SyLBeKZZyP_Wl/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Objectives",
  subtitle: emoji(
    "All my objectives to become a better cyber security expert."
  ),

  talks: [
    {
      title: "Acquire the Comptia Security+ Certificate"
    },
    {
      title: "Learn and acquire certifications such as CISSP, CISA, OSCP, etc."
    },
    {
      title:
        "Continue to learn through practice (HACKTHEBOX, Hack The Box Academy, TryHackMe, etc.)"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested for collaboration? I will always gladly reply to your messages. You can write me on LinkedIn or directly to my email address.",
  email_address: "victor.schmit.vs@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  languageStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
