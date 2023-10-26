import React, { useEffect } from 'react';

export default function About() {
    return (
        <section id="about" className="section">
            <h2>About me</h2>
            <div>
                <figure>
                    <img id="priyanka" src="images/Priyanka.jpg" alt="Priyanka Mary Christine"></img>
                </figure>
                <p>
                     A full stack web developer based in Seattle with a passion for building software that is meaningful and can improve our lives.
                    Have a degree in Electronics and Communication Engineering and 5 years of previous experience as C# .net developer.
                    Focused on writing neat, organized and quality code thereby optimizing efficiency.  Recognized for conducting technical interviews to add valuable members
                    to our team. Recently earned a certificate in full stack web development from the University of Washington, from which I gained knowledge and
                    critical skills needed to build dynamic web applications and deploy them. Have worked on technologies like HTML5, CSS3, JavaScript,
                    Node.js, MySQL, MongoDB, Heroku, Express.js, React.js. Also earned a certificate in Full Stack Java from Southern Methodist University. Currently working as Teaching Assistant for edX in Full Stack Web Development. I am eager to utilize my technical skills and my strengths like problem solving,
                    perseverance, planning and organization, and the ability to work well in a diverse team environment on every project I work on.
                </p>
            </div>
        </section>
    );
}