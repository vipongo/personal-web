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
  title: "Welcome, I'm Victor Schmit",
  subTitle: "Cybersecurity engineer focused on securing AI-enabled, cloud, identity, and enterprise systems. Hands-on experience designing, attacking, and hardening agentic LLM applications alongside security architecture, IAM, application security, and security governance.",
  resumeLink:
    "https://drive.google.com/file/d/1GYjOrgUF2n917jzDIJltHZ9ZhtBMdkNH/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/victorschmit/",
  gmail: "victor.schmit.vs@proton.me",
  //hackthebox: "https://app.hackthebox.com/profile/612703",
  github: "https://github.com/vipongo",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "Building security into AI, applications, identity, cloud, and enterprise systems—from threat modeling and attack simulation to deterministic authorization and security validation.",
  skills: [
    "⚡ Designing and threat-modeling agentic AI systems using RAG, tool invocation, persistent sessions, and human-in-the-loop workflows.",
    "⚡ Red-teaming LLM applications for direct and indirect prompt injection, RAG poisoning, sensitive-data disclosure, system-prompt extraction, excessive agency, and broken authorization.",
    "⚡ Engineering deterministic AI security controls including least-privilege tool access, object/action authorization, retrieval ACLs, structured validation, rate limiting, audit logging, and output controls.",
    "⚡ Applying OWASP guidance for LLM and agentic applications, STRIDE, NIST CSF, CIS Benchmarks, and IEC 62443 across application, cloud, IAM, and embedded environments."
  ],

  softwareSkills: [
    {
      skillName: "AI Security",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Agentic AI",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "LLM Red Teaming",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "RAG Security",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "OWASP LLM / Agentic",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "Promptfoo / pytest",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "Threat Modeling",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Application Security",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "CIAM & IAM",
      fontAwesomeClassname: "fas fa-user-lock"
    },
    {
      skillName: "Cloud Security",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "DevSecOps",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Azure / AWS",
      fontAwesomeClassname: "fas fa-cloud-upload-alt"
    },
    {
      skillName: "API Security",
      fontAwesomeClassname: "fas fa-bug"
    },
    {
      skillName: "IEC 62443",
      fontAwesomeClassname: "fas fa-industry"
    },
    {
      skillName: "NIST CSF / CIS",
      fontAwesomeClassname: "fas fa-shield-alt"
    }
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
      duration: "September 2020 - June 2022",
      desc: "Graduated with excellence. Minor in business.",
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
      duration: "September 2020 - June 2022",
      desc: "Minor in business.",
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
      desc: "Disrupting Finance with Digital Technologies.",
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
      duration: "September 2016 - June 2020",
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
  viewSkillBars: true,
  experience: [
    {
      Stack: "Security Architecture & Engineering",
      progressPercentage: "85%"
    },
    {
      Stack: "AI & Agentic Security",
      progressPercentage: "75%"
    },
    {
      Stack: "Application Security & Red Teaming",
      progressPercentage: "80%"
    },
    {
      Stack: "IAM & CIAM",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud & DevSecOps",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming & Automation",
      progressPercentage: "70%"
    },
    {
      Stack: "Governance & Risk Management",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
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
        "Lead security governance and maturity reviews aligned with <b>NIST CSF & CIS Benchmarks</b>.",
        "Define and validate <b>IEC 62443</b> logical test cases for authentication, access control, and session management.",
        "Perform <b>secure architecture</b> assessments (cloud/IAM) and targeted penetration tests with reproducible PoCs.",
        "Advise on <b>CIAM security</b>, least-privilege, and role hygiene; support DevSecOps adoption."
      ]
    },
    {
      role: "Professional Security Engineer",
      company: "Zühlke",
      companylogo: require("./assets/images/zuhlke.png"),
      date: "December 2022 – December 2024",
      desc: "Consultant in Cybersecurity",
      descBullets: [
        "Performed CIAM Foundation review against <b>NIST CSF & CIS Benchmarks</b>; produced prioritized remediation plan.",
        "Executed API/web assessments (incl. <b>OAuth/OIDC token flows</b>) and documented issues with clear reproduction steps.",
        "Advised on <b>Entra ID Conditional Access</b>, MFA hardening, PIM/role hygiene; reduced standing privileges.",
        "Coached teams on <b>threat modeling</b> (STRIDE) and <b>SSDLC practices</b>; facilitated security backlog triage."
      ]
    },
    {
      role: "Security Lead",
      company: "Nokia",
      companylogo: require("./assets/images/nokia.png"),
      date: "December 2021 – December 2022",
      descBullets: [
        "Secured internal test automation frameworks and align them with <b>corporate security standards</b>",
        "Defined <b>security requirements and controls</b> for three automation platforms: integrated security testing in CI/CD.",
        "Led internal <b>security assessments</b> and policy adoption initiatives with engineering teams.",
        "Creation and maintaining documentation and guidelines about security.",
        "Help the team create a 'culture' for security."
      ]
    }
  ],
  relevantExperience: [
    {
      role: "Student Ambassador",
      company: "EIT Digital Master School",
      companylogo: require("./assets/images/eit.png"),
      date: "November 2021 – March 2023",
      descBullets: [
        "Created, organized and participated in events to promote EIT Digital Master School to worldwide students.",
        "Direct contact with applicants."
      ]
    },
      {
      role: "Collaborator",
      company: "Eötvös Loránd University",
      companylogo: require("./assets/images/eltelogo.png"),
      date: "December 2020 – January 2021",
      descBullets: [
        "Co-created an EIT Digital course (Innosocial) on business innovation."
      ]
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
      descBullets: [
        "Raised awareness about computer security, using the internet, using social networks to teenagers from 11 to 13 years old."
      ]
    }
  ]
};


const projectExperiences = {
  display: true, //Set it to true to show projectExperiences Section

  spotlight: [
    {
      role: "Security Consultant and Engineer for IEC 62443 Compliance",
      companylogo: require("./assets/images/compliance.jpg"),
      date: "March 2025 - Present",
      descBullets: [
        "For a global manufacturer in the industrial and transport sector, the project aim to ensure compliance of complex control systems with the IEC 62443 cybersecurity standard. The engagement covers the full lifecycle, from defining the security development framework to managing and validating technical and organizational controls through coordinated security testing.",
        "<b>Tasks:</b> Managing and coordinating the execution of security tests and audits, aligning test planning with the IEC 62443-4-1 requirements while leveraging NIST CSF principles to strengthen governance alignment, creating and maintaining the security validation documentation, and leading risk assessments and remediation tracking with development and system engineering teams. Ensuring proper traceability between requirements, tests, and compliance artifacts. Applying CIS controls as supporting evidence in test validation scripts",
        "<b>Methods and technologies:</b> IEC 62443-4-1, Threat Modeling (STRIDE), Security Test Management, Vulnerability Assessment, Secure SDLC, Python and PowerShell automation for validation tests, and Test Evidence Documentation (MKS)."
      ]
    },
    {
      role: "Cybersecurity Lead for ForgeRock Customization",
      companylogo: require("./assets/images/access.jpg"),
      date: "July 2024 - February 2025",
      descBullets: [
        "One of Hong Kong's largest non-profit organizations designed and built a new IAM platform serving 3 million customers. This platform is critical to supporting 95% of the organization’s revenue through online betting, requiring exceptional reliability, performance, and security.",
        "<b>Tasks:</b> Ensuring the security aspect in key components of the solution. Creation of a threat model of the solution, supporting pentests and reviewing findings, code review, security hardening review of configurations, policies, processes. Conducting comprehensive security posture assessment against the NIST CSF functions. Collaborating with stakeholders to align security solutions with business needs.",
        "<b>Methods and technologies:</b> ForgeRock IAM, Java Development, Kubernetes, Penetration Testing, Threat Model, Security Policies."
      ]
    }
  ],

  experience: [
    {
  role: "PoC OpenCTI Platform",
  companylogo: require("./assets/images/opencti.jpg"),
  date: "October 2024",
  descBullets: [
    "As part of an internal cybersecurity initiative, setup and development of an OpenCTI-based platform to enhance vulnerability and technology exposure mapping. The objective was to centralize, correlate, and visualize threat intelligence data from multiple sources to support vulnerability management and incident response workflows.",
    "<b>Tasks:</b> Designing and deploying the OpenCTI infrastructure using Docker Compose with multiple connectors (CVE, MITRE ATT&CK, MISP, and external vulnerability feeds). Developing and maintaining custom connectors to automate ingestion of threat and exposure data.",
    "<b>Methods and technologies:</b> OpenCTI, Python, Docker Compose, Threat Intelligence Mapping."
  ]
    },
    {
      role: "Security Consultant and Engineer for AWS Cloud Infrastructure",
      companylogo: require("./assets/images/aws.jpg"),
      date: "May 2023 - May 2025",
      descBullets: [
        "For a major Swiss company, the customer needed help building and maintaining their public cloud infrastructure to be able to have their IT services running sustainably and cost-efficiently. To be able to assist the customer, a complete review and update of the cloud infrastructure was necessary (policies, IAM, resources management, …).",
        "<b>Tasks:</b> Identifying, managing, and mitigating security risks, coordination with the team, threat analysis.",
        "<b>Methods and technologies:</b> AWS, Policies, Regulations."
      ]
    },
    {
      role: "Penetration Tester for Multiple Systems",
      companylogo: require("./assets/images/pentest2.jpg"),
      date: "June 2023 - July 2023",
      descBullets: [
        "For a leading financial Swiss company, identifying vulnerabilities in their web applications (including DBMS), their STFP server and their AWS infrastructure.",
        "<b>Tasks:</b> Making a penetration test, finding vulnerabilities, exploiting them and gaining the highest level of privilege. At the end, a report, linking evidences with the NIST CSF, was provided with a final presentation to the team to explain the vulnerabilities and offer mitigations to avoid those risks.",
        "<b>Methods and technologies:</b> Diverse Enumeration Tools (FUFF, Dirb, etc), Privilege Escalation, Network Traffic Analyzer (BurpSuite), Security/Risk Management, Threat Modeling (STRIDE for the report), Docker, SQL Express, JWT, NIST CSF, SSL/TLS Technologies, Azure, Blob storage."
      ]
    },
    {
      role: "Security Consultant for GRC platform",
      companylogo: require("./assets/images/Consulting.jpg"),
      date: "March 2023 - December 2023",
      descBullets: [
        "For a major Swiss company, maintaining the security of a GRC platform as well as performing testing on releases. Helping the company to plan secure approach on the platform and support them for security topics such as IAM.",
        "<b>Tasks:</b> Identifying, managing, and mitigating security risks, coordination with the team, threat analysis.",
        "<b>Methods and technologies:</b> SSL/TLS Technologies, SAI360."
      ]
    },
    {
      role: "Security Assessment of Azure Infrastructure",
      companylogo: require("./assets/images/Azure.jpg"),
      date: "March 2023",
      descBullets: [
        "For a leading company in AI and health, the project goal was to complete a security assessment of the Azure infrastructure. ",
        "<b>Tasks:</b> The assessment encompassed several key tasks, starting with identifying potential security risks and vulnerabilities in the infrastructure. Cordination of various security-related activities, working closely with the development and operations teams to prioritize and mitigate these risks effectively. Increase cloud security.",
        "<b>Methods and technologies:</b> JWT, SSL/TLS Technologies, Azure, Blob storage, Docker, Well Architected Framework."
      ]
    },
    {
      role: "Security Engineer for Software HSM",
      companylogo: require("./assets/images/softhsm.png"),
      date: "March 2023",
      descBullets: [
        "For a worldwide company in Health, creating an API for secure and reliable communication between a software HSM (softHSM) and the different systems. ",
        "<b>Tasks:</b> Programing an API using C++ and multiple librairies that were customized for the specific needs. The API was tested and worked accordingly to the specifications.",
        "<b>Methods and technologies:</b> OpenSSL, BOTAN 2, C++, Security/Risk Management, Podman."
      ]
    },
    {
      role: "Penetration Tester for Web Application",
      companylogo: require("./assets/images/pentest.jpg"),
      date: "February 2023",
      descBullets: [
        "For a worldwide company, identifying vulnerabilities in their web application hosted on Azure.",
        "<b>Tasks:</b> The task was to make a penetration test, find vulnerabilities, exploit them and gain the highest level of privilege. At the end, a report is provided with a final presentation to the team to explain the vulnerabilities and offer mitigations to avoid those risks.",
        "<b>Methods and technologies:</b> Diverse Enumeration Tools (FUFF, Dirb, etc), Privilege Escalation, Network Traffic Analyzer (BurpSuite), Security/Risk Management, Threat Modeling (STRIDE for the report), Docker, SQL Express, JWT, SSL/TLS Technologies, Azure, Blob storage."
      ]
    },
    {
      role: "Security Engineer",
      companylogo: require("./assets/images/audit.jpg"),
      date: "January 2023",
      descBullets: [
        "For a leading company Swiss air-rescue company. The project aimed to make a security assessment of the infrastructure previously made and currently supported by the company. This infrastructure included a web application (frontend and backend) and a cloud infrastructure. The audit focused on three major components (authentication, powerful functions and possible injection points). For this purpose, Zühlke security team and software engineering team worked together to be able to provide the highest level of quality to the software and to the security.",
        "<b>Tasks:</b> Identifying, managing, and mitigating security risks; coordination of security related activities; increase cloud security.",
        "<b>Methods and technologies:</b> Static analysis tools (SemGrep, Net analyzer), code review, authentication process, threat modeling, network traffic analyzer (BurpSuite, ZAP), .NET Core, Angular, SQL Express, Azure Active Directory, Azure DevOps."
        
      ]
    },
    {
      role: "Security Lead",
      companylogo: require("./assets/images/manager.jpg"),
      date: "December 2021 – December 2022",
      descBullets: [
      "Introducing security in two web and one mobile application (Android) for a major telecommunication company. Those applications are an important part of the activity of this provider. They do provide in depth analysis over wireless mobile connectivity. The applications require permanent communications through secure channels to exchange important analysis, logs and monitoring. Encryption and decryption of those messages must be fast, reliable and secure. The applications require to create a performant licensing possibility for customers outside of the organization.",
      "<b>Tasks:</b> Identifying, Managing, and mitigating security risks; Coordination of security related activities; creation and maintaining documentation and guidelines about security; help the team create a 'culture' for security; container security hardening.",
      "<b>Methods and technologies:</b> Diverse Enumeration Tools (FUFF, Dirb, etc), Privilege Escalation, Network Traffic Analyzer (BurpSuite), Security/Risk Management, Threat Modeling (STRIDE), Kubernetes, Hashicorp Vault, Keycloak, Docker, MongoDB, JWT, SSK/TLS Technologies."
      ]
    },
    {
      role: "Security Coach",
      companylogo: require("./assets/images/coach.jpg"),
      date: "October 2021",
      descBullets: [
        "Introducing security concepts to a team of developers for a major telecommunication company.",
        "<b>Tasks:</b> Coaching a big (30+) team of developers on the different concept of cyber security inside a web application and the methodology to minimize security vulnerabilities in the code during the development phase.",
        "<b>Methods and technologies:</b> Training course at the facility, exercise to find vulnerabilities."
      ]
    },
    {
      role: "Software Engineer",
      companylogo: require("./assets/images/SW.jpg"),
      date: "June 2019 – August 2020",
      descBullets: [
        "Creation of a customized Google Scholar API for a University client. The API had to be made so it would connect with minimal amount of effort to the client's webserver so the client would be able to make request fast and efficiently.",
        "<b>Tasks:</b> API creation in Python3. Understanding the previous Google Scholar API (Scholarly) and modifying it.",
        "<b>Methods and technologies:</b> Python3, Google Scholar, Scholarly, API creation."
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
  title: "Selected Projects & Research",
  subtitle:
    "Hands-on security engineering projects and academic research demonstrating how I design, attack, validate, and harden real systems.",
  projects: [
    {
      image: require("./assets/images/aisecurity.png"),
      projectName: "Agentic AI Security Lab",
      projectDesc:
        "Built a simulated banking agent with the OpenAI Agents SDK, Chroma RAG, persistent SQLite sessions, and external tools, then developed vulnerable and hardened iterations to test real AI-security failure modes. Reproduced and mitigated object/RAG authorization flaws, direct and indirect prompt injection, system-prompt extraction, cross-user session leakage, excessive agency, and transfer authorization issues. Added least-privilege tools, deterministic authorization, HITL approval, structured validation, rate limiting, audit logging, and automated pytest/Promptfoo red teaming; observed attack success fell from 40.35% to 9.52% across the configured adversarial suite.",
      footerLink: [
        {
          name: "View source",
          url: "https://github.com/vipongo/agentic-ai-security-lab"
        },
        {
          name: "Threat model",
          url: "https://github.com/vipongo/agentic-ai-security-lab/blob/main/docs/threat-model.md"
        },
        {
          name: "Red-team reports",
          url: "https://github.com/vipongo/agentic-ai-security-lab/tree/main/docs/report-prompfoo"
        }
      ]
    },
    {
      image: require("./assets/images/double.png"),
      projectName:
        "Master's Thesis — A Rapid Approach to Web Application Security",
      projectDesc:
        "Research conducted with Nokia on rapidly integrating security into an intentionally unsecured web application.",
      footerLink: [
        {
          name: "Read thesis",
          url: "https://www.utupub.fi/handle/10024/154332"
        }
      ]
    },
    {
      image: require("./assets/images/unamurlogo.png"),
      projectName: "Bachelor's Thesis — CPDI",
      projectDesc:
        "Built a Django backend to help developers identify suitable technologies for software projects."
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements and Certifications 🏆 ",
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
      title: "ISC2 CISSP",
      subtitle:
        "The vendor-neutral CISSP credential confirms technical knowledge and experience to design, engineer, implement, and manage the overall security posture of an organization.",
      image: require("./assets/images/cissp.webp"),
      footerLink: [
        {
          name: "Link to badge",
          url: "https://www.credly.com/badges/c80c605f-1753-4b7e-a0a7-6e9469c20539/public_url"
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
      subtitle: "Cyber Security challenges.",
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
      subtitle: "Cyber Security challenges.",
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
  title: "Goals",
  subtitle: 
    "All my goals to become a better cyber security expert."
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
        "Continue to understand threat and learn through practice (Hack The Box, TryHackMe)."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
