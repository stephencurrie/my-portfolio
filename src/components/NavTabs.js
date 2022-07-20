import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-blue">
      <a className="navbar-brand" href="#about"
           onClick={() => handlePageChange('About')}
           // This is a conditional (ternary) operator that checks to see if the current page is "About Me"
           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          //  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
         >
           Stephen Currie's Web Portfolio
         </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#about"
           onClick={() => handlePageChange('About')}
           // This is a conditional (ternary) operator that checks to see if the current page is "About Me"
           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
         >
           About Me
         </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#portfolio"
           onClick={() => handlePageChange('Portfolio')}
           // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
           className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
         >
           Portfolio
         </a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link" href="#contact"
           onClick={() => handlePageChange('Contact')}
           // Check to see if the currentPage is `Contact Me`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
         >
           Contact Me
         </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#resume"
           onClick={() => handlePageChange('Resume')}
           // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
           className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
         >
           Resume
         </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// function NavTabs({ currentPage, handlePageChange }) {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#about"
//           onClick={() => handlePageChange('About')}
//           // This is a conditional (ternary) operator that checks to see if the current page is "About Me"
//           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//         >
//           About Me
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#portfolio"
//           onClick={() => handlePageChange('Portfolio')}
//           // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//         >
//           Portfolio
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           onClick={() => handlePageChange('Contact')}
//           // Check to see if the currentPage is `Contact Me`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact Me
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#resume"
//           onClick={() => handlePageChange('Resume')}
//           // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//         >
//           Resume
//         </a>
//       </li>
//     </ul>
//   );
// }

export default NavTabs;
