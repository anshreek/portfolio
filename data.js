export const SKILLS = [
  {
    title: "Frontend",
    icon: "/assets/images/programmer_11184385.png", // Corrected path
    skills: [
      { skill: "HTML5", percentage: "88%" },
      { skill: "CSS3 (Sass/SCSS)", percentage: "98%" }, // Fixed the key name from 'skills' to 'skill'
      { skill: "Bootstrap ", percentage: "90%" }, 
      { skill: "JavaScript", percentage: "75%" }, 
      { skill: "React.js", percentage: "88%" },
    ],
  },
  {
    title: "Backend",
    icon: "/assets/images/html_14661237.png", 
    skills: [
      { skill: "Node.js", percentage: "70%" },
      { skill: "Express.js", percentage: "60%" },
    ],
  },
  {
    title: "Tools",
    icon: "/assets/images/setting_6467523.png", // Corrected path
    skills: [
      { skill: "Visual Studio Code", percentage: "85%" },
      { skill: "Notepad++", percentage: "80%" },
      { skill: "Git & GitHub", percentage: "75%" },
       { skill: "Responsive Design", percentage: "70%" },
       { skill: "MySQL", percentage: "85%" },
       
    ],
  },
  {
    title: "Soft Skills",
    icon: "/assets/images/thinking_15543231.png", // Corrected path
    skills: [
      { skill: "Problem Solving", percentage: "88%" },
      { skill: "Collaboration", percentage: "75%" }, // Fixed typo
      { skill: "Attention to Detail", percentage: "88%" },
    ],
  },

  
];

export const WORK_EXPERIENCE = [
  {
    title: "An Online Food Ordering System",
    date: " Nov-2023",
    responsibilities: [
      " An Online Food Ordering System built using PHP, MySQL, HTML, CSS, JavaScript, and Bootstrap is a web-based application that enables customers to browse restaurant menus, place orders, and make payments online. The system provides real-time menu updates, allowing users to select their favorite dishes, customize orders, and choose delivery or pickup options. PHP handles server-side operations like order processing and customer authentication, while MySQL securely stores user, order, and restaurant data..",
      "User Accounts: Customers can register and create profiles to save their preferences and order history.",
      "Technologies Used",
      "Frontend: HTML, CSS, JavaScript",
    "  Backend: PHP",
      "Database: MySQL"
    ],
    
  },
  {
    title: "Portfolio",
    date: " Jan-2023",
    responsibilities: [
      "The Portfolio Website is a personal showcase platform designed to highlight the skills, projects, and experiences of the creator. Built with React, this dynamic and responsive site serves as a digital resume, allowing potential employers, clients, and collaborators to explore the creator's work and professional journey. The portfolio effectively demonstrates proficiency in web development, design, and various technologies through engaging visuals and interactive elements..",
      "Technologies Used",
      "Frontend: React, HTML, CSS, JavaScript",
      "Database: MySQL"
    ],
  },
  {
    title:"Billing Invoice Management System",
    date:" April-2024",
    responsibilities: [
      " A Billing Invoice Management System built with React, JavaScript, and a MySQL backend is a web application designed to automate the process of creating, managing, and storing invoices. The system allows users to generate invoices by inputting customer details, product information, pricing, and tax calculations. React provides a dynamic and responsive user interface for seamless navigation, while JavaScript handles real-time calculations and form validations..",
      "Technologies Used",
      "Frontend: React, HTML, CSS, JavaScript",
      "Backend: Node.js, Express.js",
     " Database: MySQL",
      "API: RESTful API for communication between frontend and backend",
    ],    
  },
  {
    title:"Hototronics Trading App",
    date:"June-2024",
    responsibilities: [
      " The Hototronics Trading App is an online platform built using React and Shopify, designed for seamless product purchasing and selling. The app allows users to browse a wide range of electronics, view product details, and make secure online purchases. Powered by Shopify’s backend, it handles inventory management, payments, and order processing efficiently. The React frontend provides a fast, responsive, and user-friendly interface, enabling smooth navigation and interaction across devices. This app simplifies the e-commerce experience for both buyers and sellers, offering real-time updates on product availability and order tracking.",
      "Frontend: React, HTML, CSS, JavaScript",
      "E-commerce Platform: Shopify (using Shopify API)",
    "  Database: MySQL",
'      Backend: Node.js, Express.js',
      
    "  Payment Processing: Integrated with Shopify's payment solutions"
    ],
  },
];
