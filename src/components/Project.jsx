// Project.js
import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  // Your project styles
`;

// function Project({ title, description, imageUrl }) {
//   return (
//     <ProjectContainer>
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <img src={imageUrl} alt={title} />
//     </ProjectContainer>
//   );
// }

function Project() {
  return (
      // < !--Projects -- >
      <section id="Projects" className="project-section">
          <div className="flex-row">
              <h3 className="section-title primary-border">Projects</h3>
          </div>

      </section>
  );
}

export default Project;

