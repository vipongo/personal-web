/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

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
  subTitle: "A Cyber Security Expert and Passionate 🚀 Having an experience in Information Security Management and a great interest in Auditing and Penetration Testing.",
  resumeLink:
    "https://drive.google.com/file/d/1_FIIAe7YmccPUdS1pGVrtkozE1bWXUTI/view?usp=sharing", // Set to empty to hide the button
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
    "⚡ Penetration testing assessment",
    "⚡ Identifying, managing, and mitigating security risks",
    
      "⚡ Coordination of security related activities, creation and maintaining documentation and guidelines about security and help the team create a “culture” for security."
    ,
    "⚡ Some fullstack during my free time"
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
    // {
    //   schoolName: "Comptia Security+",
    //   logo: require("./assets/images/comptia.svg"),
    //   subHeader: "Preparation to Comptia Security+ Certification",
    //   duration: "August 2022 - Present",
    //   desc: "Preparation to Comptia Security+ Certification with ambition to acquire it by end of October 2022.",
    //   descBullets: [
    //     "Assess",
    //     "Monitor and secure",
    //     "Operate",
    //     "Identify, analyze, and respond"
    //   ]
    // },
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
      Stack: "Cloud Solution and Security",
      progressPercentage: "50%"
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
      progressPercentage: "50%"
    },
    {
      Stack: "German",
      progressPercentage: "20%"
    },
    {
      Stack: "Russian",
      progressPercentage: "20%"
    },
    {
      Stack: "Hungarian",
      progressPercentage: "10%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Professional Security Engineer",
      company: "Zühlke",
      companylogo: require("./assets/images/zuhlke.png"),
      date: "December 2022 – Present",
      desc: "Consultant in Cybersecurity",
      descBullets: [
        "Identifying, managing, and mitigating security risks.",
        "Secured three tool projects of test automation framework from scratch",
        "Coordination of security related activities.",
        "Creation and maintaining documentation and guidelines about security.",
        "Help the team create a 'culture' for security."
      ]
    },
    {
      role: "Information Security Manager",
      company: "Nokia",
      companylogo: require("./assets/images/nokia.png"),
      date: "December 2021 – December 2022",
      desc: "Information Security Manager in I&V organization tool development team.",
      descBullets: [
        "Identifying, managing, and mitigating security risks.",
        "Secured three tool projects of test automation framework from scratch",
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


const projectExperiences = {
  display: true, //Set it to true to show projectExperiences Section
  experience: [
    {
      role: "Penetration Tester",
      companylogo: require("./assets/images/pentest2.jpg"),
      date: "June 2023 - July 2023",
      desc: "Penetration Test of multiple systems",
      descBullets: [
        "For a leading financing Swiss company, I was asked to identify vulnerabilities in their web applications (including DBMS), their STFP server and their AWS infrastructure. The task was to make a penetration test, find vulnerabilities, exploit them and gain the highest level of privilege. At the end, a report is provided with a final presentation to the team to explain the vulnerabilities and offer mitigations to avoid those risks.",
        "Methods and technologies: Diverse Enumeration Tools (FUFF, Dirb, etc), Privilege Escalation, Network Traffic Analyzer (BurpSuite), Security/Risk Management, Threat Modeling (STRIDE for the report), Docker, SQL Express, JWT, SSL/TLS Technologies, Azure, Blob storage."
      ]
    },
    {
      role: "Security Consultant",
      companylogo: require("./assets/images/Consulting.jpg"),
      date: "March 2023 - Present",
      desc: "Security Consulting GRC platform",
      descBullets: [
        "For a major Swiss company, I help maintaining the security of a GRC platform as well as performing testing on releases. I also help the company plan the secure approach on the platform and support them for security topics such as IAM.",
        "Tasks: Identifying, managing, and mitigating security risks, coordination with the team, threat analysis",
        "Methods and technologies: SSL/TLS Technologies, SAI360"
      ]
    },
    {
      role: "Security Assessment",
      companylogo: require("./assets/images/Azure.jpg"),
      date: "March 2023",
      desc: "Security Assessment of Azure Infrastructure",
      descBullets: [
        "For a leading company in AI and health, I performed a complete Security Assessment of the Azure infrastructure. The assessment encompassed several key tasks, starting with identifying potential security risks and vulnerabilities in the infrastructure. I coordinated various security-related activities, working closely with the development and operations teams to prioritize and mitigate these risks effectively.",
        "Tasks: Identifying, managing, and mitigating security risks, coordination with the team; increase cloud security.",
        "Methods and technologies: JWT, SSL/TLS Technologies, Azure, Blob storage, Docker, Well Architected Framework."
      ]
    },
    {
      role: "Security Engineer",
      companylogo: require("./assets/images/softhsm.jpg"),
      date: "March 2023",
      desc: "Security Engineer for SoftHSM",
      descBullets: [
        "For a worldwide company in Health, I achieved the creation of an API for secure and reliable communication between a software HSM (softHSM) and the different systems. The API was coded using C++ and multiple librairies that were customized for the specific needs. The API was tested and worked accordingly to the specifications.",
        "Methods and technologies: OpenSSL, BOTAN 2, C++, Security/Risk Management, Podman."
      ]
    },
    {
      role: "Penetration Tester",
      companylogo: require("./assets/images/pentest.jpg"),
      date: "February 2023",
      desc: "Penetration Test of Web Application",
      descBullets: [
        "For a worldwide company, I was asked to identify vulnerabilities in their web application hosted on Azure. The task was to make a penetration test, find vulnerabilities, exploit them and gain the highest level of privilege. At the end, a report is provided with a final presentation to the team to explain the vulnerabilities and offer mitigations to avoid those risks.",
        "Methods and technologies: Diverse Enumeration Tools (FUFF, Dirb, etc), Privilege Escalation, Network Traffic Analyzer (BurpSuite), Security/Risk Management, Threat Modeling (STRIDE for the report), Docker, SQL Express, JWT, SSL/TLS Technologies, Azure, Blob storage."
      ]
    },
    {
      role: "Security Engineer",
      companylogo: require("./assets/images/audit.jpg"),
      date: "January 2023",
      desc: "Security Assessment",
      descBullets: [
        "For a leading company Swiss air-rescue company I am asked to make a security assessment of the infrastructure previously made and currently supported by the company. This infrastructure includes a web application (frontend and backend) and a cloud infrastructure. The audit focuses on all three major components. I focus on the authentication, powerful functions, possible injection points. For this purpose, Zühlke security team and software engineering team work together to be able to provide the highest level of quality to the software and to the security.",
        "Tasks: Identifying, managing, and mitigating security risks; coordination of security related activities; increase cloud security.",
        "Methods and technologies: Static analysis tools (SemGrep, Net analyzer), code review, authentication process, threat modeling, network traffic analyzer (BurpSuite, ZAP), .NET Core, Angular, SQL Express, Azure Active Directory, Azure DevOps."
        
      ]
    },
    {
      role: "Information Security Manager",
      companylogo: require("./assets/images/manager.jpg"),
      date: "December 2021 – December 2022",
      desc: "Managing 3 Applications",
      descBullets: [
      "Introducing security in two web and one mobile application (Android) for a major telecommunication company. Those applications are a major part of the activity of this major telecommunication provider. They do provide in depth analysis over wireless mobile connectivity. The applications require permanent communications through secure channels to exchange important analysis, logs and monitoring. Encryption and decryption of those messages must be fast, reliable and secure. The applications required to create a performant licensing possibility for customers outside of the organization.",
      "Tasks: Identifying, Managing, and mitigating security risks; Coordination of security related activities; creation and maintaining documentation and guidelines about security; help the team create a 'culture' for security; container security hardening.",
      "Methods and technologies: Diverse Enumeration Tools (FUFF, Dirb, etc), Privilege Escalation, Network Traffic Analyzer (BurpSuite), Security/Risk Management, Threat Modeling (STRIDE), Kubernetes, Hashicorp Vault, Keycloak, Docker, MongoDB, JWT, SSK/TLS Technologies."
      ]
    },
    {
      role: "Security Coach",
      companylogo: require("./assets/images/coach.jpg"),
      date: "October 2021",
      desc: "Training A Team",
      descBullets: [
        "Coaching a big (30+) team of developers on the different concept of cyber security inside a web application and the methodology to minimize security vulnerabilities in the code during the development phase",
        "Methodology: 6 hours training course at the facility, exercise to find vulnerabilities."
      ]
    },
    {
      role: "Software Engineer",
      companylogo: require("./assets/images/SW.jpg"),
      date: "June 2019 – August 2020",
      desc: "Google Scholar API",
      descBullets: [
        "Creation of a customized Google Scholar API for a University client. The API had to be made so it would connect with minimal amount of effort to the client's webserver so the client would be able to make request fast and efficiently.",
        "Task: API creation in Python3. Understanding the previous Google Scholar API (Scholarly) and modifying it."
      ]
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
          name: "Read my thesis work",
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
  title: "Achievements And Certifications 🏆 ",
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
      title: "Hack The Box",
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
        "Cyber security training with hands-on exercises and labs made by Hack The Box. Top 1% student in the world.",
      image: require("./assets/images/htb.png"),
      footerLink: [
        {
          name: "Transcript",
          url: "https://drive.google.com/file/d/1L76Rl5v81QowfCjQbB1rSquXG7vbNbtC/view?usp=sharing"
        }
      ]
    },
    {
      title: "Microsoft Azure Fundamental",
      subtitle:
        "Cloud concepts; Azure architecture and services; and Azure management and governance",
      image: require("./assets/images/az900.svg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/142Q_RjMRH5oL40ub2ML68lisjChLALRa/view?usp=sharing"
        }
      ]
    },
    {
      title: "Advent of Cyber 2022",
      subtitle: "Cyber Security challenges",
      image: require("./assets/images/tryhackme.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1w4Xm9U0JogzZ0AuQ_dW0ORz7zFYWxwCI/view?usp=sharing"
        }
      ]
    },
    {
      title: "Advent of Cyber 2021",
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
  subtitle: 
    "All my objectives to become a better cyber security expert."
  ,

  talks: [
    {
      title: "Acquire the AZ-500 Certification for Azure Security"
    },
    {
      title: "Learn and acquire certifications such as CISSP, CISA, OSCP, etc."
    },
    {
      title:
        "Continue to learn through practice (Hack The Box, Hack The Box Academy, TryHackMe, etc.)"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me ☎️",
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
  projectExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
