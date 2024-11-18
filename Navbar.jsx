
// import React, { useState } from "react";
// import "./Navbar.css";
// import MobileNav from "./MobileNav";

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);

//   const toggleMenu = () => {
//     setOpenMenu(prev => !prev); 
//   };

//   const scrollToSection = (id) => {
//     document.getElementById(id).scrollIntoView({ behavior: "smooth" });
//     setOpenMenu(false);
//   };

//   return (
//     <>
//       <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
//       <nav className="nav-wrapper">
//         <div className="nav-content">
//           <img
//             className="logo"
//             src="/assets/images/gold__1_-removebg-preview.png" 
//             alt="Logo"
//           />
//           <ul>
//             <li><a className="menu-item" onClick={() => scrollToSection("home")}>Home</a></li>
//             <li><a className="menu-item" onClick={() => scrollToSection("skills")}>Skills</a></li>
//             <li><a className="menu-item" onClick={() => scrollToSection("work-experience")}>Work Experience</a></li>
//             <li><a className="menu-item" onClick={() => scrollToSection("contact")}>Contact Me</a></li>
//             <button className="contact-btn" onClick={() => scrollToSection("contact")}>Hire me</button>
//           </ul>
//           <button className="menu-btn" onClick={toggleMenu}>
//             <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
//               {openMenu ? "close" : "menu"}
//             </span>
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import "./Navbar.css"; // Make sure to adjust the path to your CSS if necessary
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(prev => !prev);
  };

  const openModal = () => {
    // Use Bootstrap modal's method to show it
    const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img
            className="logo"
            src="/assets/images/logos.png"
            alt="Logo"
          />
          <ul>
            <li><a className="menu-item" onClick={() => scrollToSection("home")}>Home</a></li>
            <li><a className="menu-item" onClick={() => scrollToSection("skills")}>Skills</a></li>
            <li><a className="menu-item" onClick={() => scrollToSection("project")}>Project</a></li>
            <li><a className="menu-item" onClick={() => scrollToSection("work-experience")}>Work Experience</a></li>
            <li><a className="menu-item" onClick={() => scrollToSection("contact")}>Contact Me</a></li>
            <button className="contact-btn" onClick={openModal}>Hire me</button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Bootstrap Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">My Resume</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setOpenMenu(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <iframe
                src="/assets/images/Anshree_res.pdf" // Path to your PDF
                width="100%" // Responsive width
                height="400px" // Set height as needed
                title="Resume"
              >
                This browser does not support PDFs. Please download the PDF to view it: <a href="/assets/images/Anshree_res.pdf">Download PDF</a>.
              </iframe>
             
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
