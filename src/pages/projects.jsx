import "../styles/projects.css";
import { useEffect, useState } from "react";
import Project from "../comps/project";

const Projects = () => {

    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        fetch('https://api.github.com/users/natbates/starred')
          .then(response => response.json())
          .then(data => setProjects(data))
          .catch(error => console.error('Error:', error));
    }, []); // Add the empty array to avoid re-fetching in a loop

    useEffect(() => {
        const projectContainer = document.getElementById("project-container");
        if (projectContainer) {
            const projects = projectContainer.children;
            for (let i = 0; i < projects.length; i++) {
                projects[i].style.animationDelay =  `${i * 0.1 + 0.5}s`;
                projects[i].addEventListener('animationend', () => {
                    projects[i].style.pointerEvents = "auto"; // Enable pointer events after animation
                }, { once: true });
            }
        } else {
            console.log("project container not found");
        }
    }, [projects]); // Add projects to the dependency array

    return (
        <div id="project-page-container">
            <h1>Projects</h1>
            <p>Here are some of my favourite projects!</p>
            <div id="project-container">
                {projects.length > 0 ? 
                    projects.map((project, index) => (
                        <Project
                            key={index}
                            title={project.name}
                            info={project.description || "No description available"}
                            link={project.html_url}
                        />
                    )) : <p>Loading projects...</p>}
            </div>
        </div>
    );
};

export default Projects;
