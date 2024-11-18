// // import React, { useState } from 'react';
// // // import './Project.css'; // Uncomment to import your CSS file

// // const projects = [
// //   {
// //     title: 'An Online Food Ordering System',
// //     // description: 'An Online Food Ordering System built using PHP, MySQL, HTML, CSS, JavaScript, and Bootstrap.',
// //     images: [
// //       '/assets/images/foodordering.png', // Image 1
      
// //     ],
// //     videoUrl: 'assets/images/Untitled video - Made with Clipchamp.mp4', // Add video URL if needed
// //   },
// //   {
// //     title: 'Portfolio',
// //     // description: "The Portfolio Website is a personal showcase platform designed to highlight the skills, projects.",
// //     images: [
// //       '/assets/images/Portfoliomain.png', // Image 1
      
// //     ],
// //     videoUrl: 'https://www.example.com/video2',
// //   },
// //   {
// //     title: 'Restaurant Template Design',
// //     // description: '',
// //     images: [
// //       '/assets/images/telplate1.png',// Image 1
// //       'https://via.placeholder.com/200', // Image 2
// //     ],
// //     videoUrl: 'https://www.example.com/video3',
// //   },

// //    {
// //     title: 'Restaurant Template Design',
// //     // description: '',
// //     images: [
// //       '/assets/images/telplate1.png',// Image 1
// //       'https://via.placeholder.com/200', // Image 2
// //     ],
// //     videoUrl: 'https://www.example.com/video3',
// //   },

  


  
// // ];

// // const Project = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [selectedProject, setSelectedProject] = useState(null);

// //   const openModal = (project) => {
// //     setSelectedProject(project);
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedProject(null);
// //   };

// //   return (
// //     <>
// //       <h5>Project Show:</h5>
// //       <div className="grid-container">
// //         {projects.map((project, index) => (
// //           <div className="grid-item" key={index}>
// //             <img src={project.images[0]} alt={project.title} className="project-image" />
// //             <h6>{project.title}</h6>
// //             <p>{project.description}</p>
// //             <button className='project-btn'  onClick={() => openModal(project)}>View </button>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Modal for displaying project details */}
// //       {isModalOpen && selectedProject && (
// //         <div className="modal-overlay" onClick={closeModal}>
// //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// //             <h2>{selectedProject.title}</h2>
// //             {/* <div className="image-gallery">
// //               {selectedProject.images && selectedProject.images.map((image, index) => (
// //                 <img src={image} alt={selectedProject.title} className="modal-image" key={index} />
// //               ))}
// //             </div> */}
// //             <p>{selectedProject.description}</p>
// //             {selectedProject.videoUrl && (
// //               <video controls>
// //                 <source src={selectedProject.videoUrl} type="video/mp4" />
// //                 Your browser does not support the video tag.
// //               </video>
// //             )}
       
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }

// // export default Project;


// import React, { useState } from 'react';
// import './Project.css';

// const projects = [
//   {
//     title: 'An Online Food Ordering System',
//     images: ['/assets/images/foodordering.png'],
//     videoUrl: 'assets/images/Untitled video - Made with Clipchamp.mp4',
//   },
//   {
//     title: 'Portfolio',
//     images: ['/assets/images/Portfoliomain.png'],
//     videoUrl: 'https://www.example.com/video2',
//   },
//   {
//     title: 'Restaurant Template Design',
//     images: ['/assets/images/telplate1.png', 'https://via.placeholder.com/200'],
//     videoUrl: 'https://www.example.com/video3',
    
//   },
//   {
//     title: 'Hototronics Trading-App (Shopify)',
//     images: ['/assets/images/HotronicesTradingapp.png'],
//     videoUrl: 'https://www.example.com/video4',
//   },

//   {
//     title: 'Another Project',
//     images: ['/assets/images/template2.png'],
//     videoUrl: 'https://www.example.com/video4',
//   },
// ];

// const Project = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const openModal = (project) => {
//     setSelectedProject(project);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedProject(null);
//   };

//   return (
//     <>
//       <h5>Project Show:</h5>
//       <div className="grid-container">
//         {projects.map((project, index) => (
//           <div className="grid-item" key={index}>
//             <img src={project.images[0]} alt={project.title} className="project-image" />
//             <h6>{project.title}</h6>
//             <button className="project-btn" onClick={() => openModal(project)}>View</button>
//           </div>
//         ))}
//       </div>

//       {isModalOpen && selectedProject && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <h2>{selectedProject.title}</h2>
//             {selectedProject.videoUrl && (
//               <video controls>
//                 <source src={selectedProject.videoUrl} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )}
//             <button onClick={closeModal} className="close-btn">Close</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Project;


import React, { useState } from 'react';
import './Project.css';

const projects = [
  {
    title: 'An Online Food Ordering System',
    images: [
      '/assets/images/foodordering.png',
      '/assets/images/onlinefoodMenu1.png',
      '/assets/images/AddtoCardFood.png',
      '/assets/images/onlinefoodAdminpage.png',
      '/assets/images/onlinefoodOrderpage.png',
      '/assets/images/onlinefoodMenupage.png',
      '/assets/images/onlinefoodCatergoryList.png',
      '/assets/images/onlineUser.png',
      '/assets/images/Onlinedashbord.png',
      
    ],
    videoUrl: 'assets/images/Untitled video - Made with Clipchamp.mp4',
  },
  {
    title: 'Portfolio',
    images: [
      '/assets/images/Portfoliomain.png',
      '/assets/images/pProject.png',
      '/assets/images/pskill.png',
      '/assets/images/pfooter.png',
      '/assets/images/phireme.png',
    ],
    videoUrl: 'https://www.example.com/video2',
  },
  {
    title: 'Restaurant Template Design',
    images: [
      '/assets/images/telplate1.png',
      '/assets/images/templateoffer.png',
      '/assets/images/templateevent.png',
      '/assets/images/templatecontact.png',
      '/assets/images/templatemenu.png',
      '/assets/images/templatesepiceal.png',
    ],
    videoUrl: 'https://www.example.com/video3',
  },
  {
    title: 'Hototronics Trading-App (Shopify)',
    images: [
      '/assets/images/HotronicesTradingapp.png',
      '/assets/images/HotronicesTradingapp2.png',
      '/assets/images/HotronicesTradingapp3.png',
      '/assets/images/HotronicesTradingapp4.png',
      '/assets/images/HotronicesTradingapp5.png',
    ],
    videoUrl: 'https://www.example.com/video4',
  },
  {
    title: 'Another Project',
    images: [
      '/assets/images/template21.png',
      '/assets/images/template22.png',
      '/assets/images/template23.png',
      '/assets/images/template24.png',
      '/assets/images/template25.png',
    ],
    videoUrl: 'https://www.example.com/video4',
  },
];

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <h5>Project Show:</h5>
      <div className="grid-container">
        {projects.map((project, index) => (
          <div className="grid-item" key={index}>
            <img src={project.images[0]} alt={project.title} className="project-image" />
            <h6>{project.title}</h6>
            <button className="project-btn" onClick={() => openModal(project)}>View</button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            {selectedProject.videoUrl && (
              <video controls>
                <source src={selectedProject.videoUrl} type="video/mp4" className='videoplayer' />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="image-gallery">
              {selectedProject.images.map((image, index) => (
                <img src={image} alt={`Project ${selectedProject.title} Image ${index + 1}`} className="modal-image" key={index} />
              ))}
            </div>
            <button onClick={closeModal} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
