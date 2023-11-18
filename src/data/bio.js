import { project1, project2, project3 } from "../assets/";
import { avatar } from "../assets/";

const bio = {
  name: "Srikanth Vaddeneni",
  firstName: "Srikanth",
  lastname: "Vaddeneni",
  role: "DevOps Engineer",
  tag: "Immediate Joiner",
  email: "sreekanthvaddeneni123sree@gmail.com",
  phone: "+917036960281",
  location: "Nellore, AP, India",
  links: {
    linkedin: "https://www.linkedin.com/in/srikanthvaddeneni/",
    github: "https://github.com/SrikanthVaddineni",
    medium: "https://medium.com/@vaddenenisrikanth/",
    salesforce: "https://www.salesforce.com/trailblazer/svaddineni2",
  },
  about:
    "I am a recent graduate of the AWS re/Start Program, where I gained a strong foundation in cloud computing, automation, continuous integration, and DevOps practices, which are essential pillars of modern software development. I also hold a BTech degree in Electronics and Communications Engineering from Audisankara College of Engineering & Technology, Gudur, where I developed my analytical, problem-solving, and communication skills. I am passionate about innovation and staying up-to-date with the latest trends in the DevOps and cloud industry, and I am eager to contribute to a dynamic team and collaborate on exciting projects that make a positive impact. I also write content on AWS on Medium, where I share my insights and learnings with the community. Let's connect! I'm open to networking opportunities and exploring how my skills can contribute to your organization's success. Please feel free to reach out to me.",
  avatar: avatar,
  resumeLink:
    "https://drive.google.com/uc?id=1wI3d7DMuCfFYJgdxSn9rLjNOWKN3PHI4",
  projects: [
    {
      title: "Static Web Hosting with Continuous Deployment",
      description: [
        "Developed and implemented a Static Web Hosting project with Continuous Deployment, showcasing proficiency in setting up and managing hosting infrastructure.",
        "Utilized technologies such as AWS S3, GitHub Actions to automate the deployment pipeline, ensuring seamless updates and enhanced project delivery efficiency.",
      ],
      banner: project1,
      repoLink:
        "https://github.com/SrikanthVaddineni/Serverless-Project--1.git",
      deployLink: "",
    },
    {
      title: "Creating-a-Scalable-Serverless-Chat-Application-on-AWS",
      description: [
        "Designed and implemented a Scalable Serverless Chat Application on AWS, utilizing Lambda, API Gateway, and DynamoDB for efficient, cost-effective, and real-time communication.",
        "Achieved high availability and security while prioritizing optimal user experience, demonstrating expertise in serverless architecture.",
      ],
      banner: project2,
      repoLink:
        "https://github.com/SrikanthVaddineni/Creating-a-Scalable-Serverless-Chat-Application-on-AWS.git/",
      deployLink: "",
    },
    {
      title: "Build-a-CRUD-API-with-Lambda-and-DynamoDB-using-Python",
      description: [
        "The project ”Build a CRUD API with Lambda and DynamoDB using Python” focuses on creating a scalable and serverless API for performing CRUD (Create, Read, Update, Delete) operations.",
        "Leveraging AWS Lambda for serverless computing and DynamoDB for NoSQL database storage, the implementation showcases the power of Python in building efficient and responsive APIs.",
      ],
      banner: project3,
      repoLink:
        "https://github.com/SrikanthVaddineni/Build-a-CRUD-API-with-Lambda-and-DynamoDB-using-Python.git/",
      deployLink: "",
    },
  ],
  work: [
    {
      role: "Verizon Cloud Platform Job Simulation",
      company: "Forage",
      companyLogo: null,
      description: [
        "Completed a job simulation involving building a hypothetical new VPN product for Verizon's Cloud Computing team.",
        "Used command line Python to test whether Verizon's VPN met the cloud-native traits, i.e. redundancy, resiliency and least-privilege.",
        "Researched approaches to achieve application security and communicated insights in a PowerPoint Presentation.",
      ],
      from: "11/2023",
      to: "11/2023",
    },
    {
      role: "AWS APAC Solutions Architecture virtual experience program",
      company: "Forage",
      companyLogo: null,
      description: [
        "Designed and simple and scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant growth and slow response times.",
        "Described my proposed architecture in plain language ensuring my client understood how it works and how costs will be calculated for it.",
      ],
      from: "11/2023",
      to: "11/2023",
    },
    {
      role: "Python Developer",
      company: "Mernxpress Group Limited",
      companyLogo: null,
      description: [
        "Dedicated Backend engineer at Merxpress Mall Limited, contributing technical expertise to drive seamless operations",
        "Responsible for writing efficient, modular code, developing web applications using frameworks like Django, and integrating third-party services",
      ],
      from: "09/2023",
      to: "11/2023",
    },
  ],
  education: [
    {
      title:
        "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "Audisankara College of Engineering & Technology",
      from: "07/2018",
      to: "06/2022",
    },
  ],
  coursework: [
    {
      title: "AWS and its services",
    },
    {
      title: "Manual and Automation Testing",
    },
  ],
};

export default bio;
