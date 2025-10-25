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
  subTitle: "A Cybersecurity professional with experience in security engineering, architecture, and risk management across cloud and enterprise environments.",
  resumeLink:
    "./assets/images/schmit_2025-11.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/victorschmit/",
  gmail: "victor.schmit.vs@proton.me",
  //hackthebox: "https://app.hackthebox.com/profile/612703",
  //github: "https://github.com/vipongo",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Bridging cybersecurity engineering and governance to build secure, resilient, and compliant systems.",
  skills: [
    "⚡ Implementing and assessing security controls in alignment with IEC 62443, NIST CSF, and CIS Benchmarks.",
    "⚡ Conducting and managing penetration tests, vulnerability assessments, and secure architecture reviews across cloud, web, and embedded systems.",
    "⚡ Driving security governance, from risk identification and mitigation to documentation, awareness, and fostering a strong security culture within development teams.",
    "⚡ Continuously learning and experimenting with new cybersecurity tools, frameworks, and techniques to stay ahead of emerging threats"
  ],

  softwareSkills: [
    {
      skillName: "Penetration Testing",
      fontAwesomeClassname: "fa fa-user-secret"
    },
    {
      skillName: "Threat Modeling",
      fontAwesomeClassname: "fa fa-project-diagram"
    },
    {
      skillName: "IEC 62443 / NIST CSF",
      fontAwesomeClassname: "fa fa-shield-alt"
    },
    {
      skillName: "Cloud Security",
      fontAwesomeClassname: "fa fa-cloud"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Bash / PowerShell",
      fontAwesomeClassname: "fa fa-terminal"
    },
    {
      skillName: "Azure / Sentinel",
      fontAwesomeClassname: "fa fa-microsoft"
    },
    {
      skillName: "CIAM & IAM",
      fontAwesomeClassname: "fa fa-user-lock"
    },
    {
      skillName: "DevSecOps",
      fontAwesomeClassname: "fa fa-cogs"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Database Security",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Report Writing",
      fontAwesomeClassname: "fa fa-file-alt"
    },
    {
      skillName: "Risk Communication",
      fontAwesomeClassname: "fa fa-file-alt"
    },
  ],
  display: true
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
      Stack: "Governance & Risk Management", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Security Architecture & Engineering", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Communication & Leadership", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Security Operations & Testing", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming & Automation", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud & DevSecOps", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
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
      Stack: "German",
      progressPercentage: "30%"
    },
    {
      Stack: "Hungarian",
      progressPercentage: "30%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Advanced Security Engineer",
      company: "Zühlke",
      companylogo: require("./assets/images/zuhlke.png"),
      date: "January 2025 – Present",
      desc: "Consultant in Cybersecurity",
      descBullets: [
        "Lead security governance and maturity reviews aligned with NIST CSF and CIS Benchmarks.",
        "Define and validate IEC 62443 logical test cases for authentication, access control, and session management.",
        "Perform secure architecture assessments (cloud/IAM) and targeted penetration tests with reproducible PoCs.",
        "Advise on CIAM security, least-privilege, and role hygiene; support DevSecOps adoption."
      ]
    },
    {
      role: "Professional Security Engineer",
      company: "Zühlke",
      companylogo: require("./assets/images/zuhlke.png"),
      date: "December 2022 – December 2024",
      desc: "Consultant in Cybersecurity",
      descBullets: [
        "Performed CIAM Foundation review against NIST CSF & CIS Benchmarks; produced prioritized remediation plan.",
        "Executed API/web assessments (incl. OAuth/OIDC token flows) and documented issues with clear reproduction steps.",
        "Advised on Entra ID Conditional Access, MFA hardening, PIM/role hygiene; reduced standing privileges",
        "Coached teams on threat modeling (STRIDE) and SSDLC practices; facilitated security backlog triage"
      ]
    },
    {
      role: "Security Lead",
      company: "Nokia",
      companylogo: require("./assets/images/nokia.png"),
      date: "December 2021 – December 2022",
      desc: "Secure internal test automation frameworks and align them with corporate security standards.",
      descBullets: [
        "Defined security requirements and controls for three automation platforms: integrated security testing in CI/CD.",
        "Led internal security assessments and policy adoption initiatives with engineering teams.",
        "Creation and maintaining documentation and guidelines about security.",
        "Help the team create a 'culture' for security."
      ]
    },
    {
      role: "Student Ambassador",
      company: "EIT Digital Master School",
      companylogo: require("./assets/images/eit.png"),
      date: "November 2021 – March 2023",
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
      desc: "Co-created an EIT Digital course (Innosocial) on business innovation."
    },
    {
      role: "Developer & Event Organizer",
      company: "CSLabs Namur",
      companylogo: require("./assets/images/cslabs.png"),
      date: "June 2019 – August 2020",
      descBullets: [
        "Developed a Google Scholar API for university professors.",
        "Organized a hackathon."
      ]
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
      role: "Security Consultant and Engineer for IEC 62443 Compliance",
      companylogo: require("./assets/images/compliance.jpg"),
      date: "March 2025 - Present",
      descBullets: [
        "For a global manufacturer in the industrial and transport sector, the project aimed to ensure compliance of complex control systems with the IEC 62443 cybersecurity standard. The engagement covered the full lifecycle, from defining the security development framework to managing and validating technical and organizational controls through coordinated security testing.",
        "Tasks: Managing and coordinating the execution of security tests and audits, aligning test planning with the IEC 62443-4-1 requirements, creating and maintaining the security validation documentation, and leading risk assessments and remediation tracking with development and system engineering teams. Ensuring proper traceability between requirements, tests, and compliance artifacts.",
        "Methods and technologies: IEC 62443-4-1, Threat Modeling (STRIDE), Security Test Management, Vulnerability Assessment, Secure SDLC, Python and PowerShell automation for validation tests, and Test Evidence Documentation (MKS)."
      ]
    },
    {
      role: "Cybersecurity Lead for ForgeRock Customization",
      companylogo: require("./assets/images/access.jpg"),
      date: "July 2024 - February 2025",
      descBullets: [
        "One of Hong Kong's largest non-profit organizations designs and builds a new IAM platform serving 3 million customers. This platform is critical to supporting 95% of the organization’s revenue through online betting, requiring exceptional reliability, performance, and security.",
        "Tasks: Ensured the security aspect in key components of the solution. Creation of a threat model of the solution, supporting pentests and reviewing findings, code review, security hardening review of configurations, policies, processes. Collaborated with stakeholders to align security solutions with business needs.",
        "Methods and technologies: ForgeRock IAM, Java Development, Kubernetes, Penetration Testing, Threat Model, Security Policies"
      ]
    },
    {
      role: "Security Consultant and Engineer for AWS Cloud Infrastructure",
      companylogo: require("./assets/images/aws.jpg"),
      date: "May 2023 - May 2025",
      desc: "Penetration Test of multiple systems",
      descBullets: [
        "For a major Swiss company, the customer needs help building and maintaining their public cloud infrastructure to be able to have their IT services running sustainably and cost-efficiently. To be able to assist the customer, a complete review and update of the cloud infrastructure is necessary (policies, IAM, resources management, …).",
        "Tasks: Identifying, managing, and mitigating security risks, coordination with the team, threat analysis.",
        "Methods and technologies: AWS, Policies, Regulations"
      ]
    },
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
      date: "March 2023 - December 2023",
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
      companylogo: require("./assets/images/softhsm.png"),
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
      role: "Security Lead",
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
      title: "ISACA CISM ",
      subtitle:
        "The management-focused CISM (Certified Information Security Manager) is the globally accepted standard for individuals who design, build and manage enterprise information security programs.",
      image: require("./assets/images/cism.png"),
      footerLink: [
        {
          name: "Link to badge",
          url: "https://www.credly.com/badges/ee1a02cd-1113-428a-ba2d-e3009c3471ce/public_url"
        }
      ]
    },
    {
      title: "ISC2 CISSP Associate",
      subtitle:
        "The vendor-neutral CISSP credential confirms technical knowledge and experience to design, engineer, implement, and manage the overall security posture of an organization.",
      image: require("./assets/images/cissp.webp"),
      footerLink: [
        {
          name: "Link to badge",
          url: "https://www.credly.com/badges/0c07f08a-cf8b-407c-a251-64aa6c8563d8/public_url"
        }
      ]
    },
    {
      title: "CompTIA Security +",
      subtitle:
        "CompTIA Security + validates certified professionals have the skills required to recommend and implement security solutions.",
      image: require("./assets/images/CompTIA.png"),
      footerLink: [
        {
          name: "Link to badge",
          url: "https://www.credly.com/badges/94e3e485-d4e6-424d-b4ba-9eedabe91779/public_url"
        }
      ]
    },
    {
      title: "ISC2 Certified in Cybersecurity",
      subtitle:
        "Security Principles, Business Continuity (BC), Disaster Recovery (DR) & Incident Response Concepts, Access Controls Concepts, Network Security, Security Operations.",
      image: require("./assets/images/cc.jpeg"),
      footerLink: [
        {
          name: "Link to badge", 
          url: "https://www.credly.com/badges/77de2a89-0800-4237-a6d3-d6f156c15fdb/public_url"
        }
      ]
    },
    {
      title: "Microsoft Azure Fundamental",
      subtitle:
        "Cloud concepts; Azure architecture and services; and Azure management and governance.",
      image: require("./assets/images/az900.png"),
      footerLink: [
        {
          name: "Link to badge",
          url: "https://www.credly.com/badges/63a92ddb-a845-4941-b21f-aeb51fff5124/public_url"
        }
      ]
    },
    {
      title: "Practical Ethical Hacking (Course)",
      subtitle:
        "Practical side of ethical hacking. Providing a deep understanding of external and internal network penetration testing, wireless penetration testing, and web application penetration testing.",
      image: require("./assets/images/tcm.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/15_NUa2mLRNqhAPOHC7_WxnpncCHg2ahv/view?usp=sharing"
        }
      ]
    },
    {
      title: "Hack The Box",
      subtitle: "Top 1000 Global Ranking.",
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
      title: "Advent of Cyber 2022",
      subtitle: "Cyber Security challenges",
      image: require("./assets/images/tryhackme.png"),
      footerLink: [
        {
          name: "Certificate",
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
          name: "Certificate",
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
      title: "Develop knowledge through experience and new certifications such as CISA and OSCP."
    },
    {
      title: "Share my knowledge with the community through events and mentoring."
    },
    {
      title:
        "Continue to understand threat and learn through practice (Hack The Box, TryHackMe)"
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
  email_address: "victor.schmit.vs@proton.me"
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
