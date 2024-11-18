// import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Skills from "./components/Skills";
// import WorkExperience from "./components/WorkExperience";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// function App() {
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <Hero />
//         <Skills />
//         <WorkExperience />
//         <Contact />
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;


import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Project from "./components/Project";



function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        
        <section id="work-experience">
          <WorkExperience />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      

        <Footer />
      </div>
    </>
  );
}

export default App;
