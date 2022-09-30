import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectsMap = projects.map((project1)=>{return <ProjectItem key={project1.id} name={project1.name} about={project1.about} technologies={project1.technologies}/>})
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
      {projectsMap};
  </div>
    </div>
  );
}

export default ProjectList;
