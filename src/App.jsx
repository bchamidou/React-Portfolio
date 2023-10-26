// import React, { useState } from 'react';
// import Footer from './components/Footer';
// import Navigation from './components/Navigation';
// import Project from './components/Project';

// import About from './pages/About';
// import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';

// App.js
import React from 'react';
import Routes from './Routes';

function App() {
  return (
    <div className="app">
      <Routes />
    </div>
  );
}




// function App() {

//   const [categories] = useState([
//     {
//       name: 'About',
//       description: 'Describes about who I am'
//     },
//     {
//       name: 'Portfolio',
//       description: 'Displays all of my projects that I have worked on so far'
//     },
//     {
//       name: 'Contact',
//       description: 'A way for employers or people to contact me'
//     },
//     {
//       name: 'Resume',
//       description: 'Displays my resume to show my work history'
//     }
//   ]);

//   const [currentCategory, setCurrentCategory] = useState(categories[0]);

//   const [contactSelected, setContactSelected] = useState(false);

//   return (
//     <div>
//       <Navigation
//         categories={categories}
//         setCurrentCategory={setCurrentCategory}
//         currentCategory={currentCategory}
//         contactSelected={contactSelected}
//         setContactSelected={setContactSelected}
//       ></Navigation>
//       <main>
//         <About currentCategory={currentCategory}></About>
//         <Project currentCategory={currentCategory}></Project>
//         <Contact currentCategory={currentCategory}></Contact>
//         <Portfolio currentCategory={currentCategory}></Portfolio>
//         <Resume currentCategory={currentCategory}></Resume>
//       </main>
//       <Footer />
//     </div>
//   )
// }

export default App;
