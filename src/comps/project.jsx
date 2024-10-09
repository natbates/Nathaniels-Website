import "../styles/projects.css";

const Project = ({title, info, link}) =>
    {
        return (
            <a className = "project" href={link} target="blank">
                <div className="project-text">
                    <h1>{title}</h1>
                    <p>{info}</p>
                </div>
            </a>
        );
    }
    
    export default Project;