// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  // Your footer styles
`;


function Footer() {
    return (
        <footer>
            <div>
                <a href="https://github.com/bchamidou"><i className="fa-brands fa-github fa-2xl fa-fw"></i></a>
                <a href="https://www.linkedin.com/in/jgarcia45/"><i className="fa-brands fa-linkedin fa-2xl fa-fw"><a href="" /></i></a>
                <a href="https://stackoverflow.com/users/12222220/Cheik H Bagagnan"><i className="fa-brands fa-stack-overflow fa-2xl fa-fw"><a href="" /></i></a>
            </div>
        </footer>
    )
}

export default Footer;