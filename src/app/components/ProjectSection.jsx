import React, { useState } from "react";
import ProjectCards from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  { id: 1, title: "Company Portal", url:"", description: "Company Portal for Bengkel Sinergi Teknik Company", image: "/project/BengkelSinergiteknik.png", tag: ["All", "Web"] },
  { id: 2, title: "My Portofolio", url:"", description: "My website for portofolio", image: "/project/BengkelSinergiteknik.png", tag: ["All", "Web"] },
  { id: 3, title: "Attendance School", url:"", description: "Application for attendance rule student daily school", image: "/project/BengkelSinergiteknik.png", tag: ["All", "Mobile"] },
  { id: 4, title: "Raport Elementary School", url:"", description: "pplication for create reporting student", image: "/project/BengkelSinergiteknik.png", tag: ["All", "Mobile"] },
];

const ProjectSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const filterProject = projectData.filter((project) => project.tag.includes(selectedTag));

  return (
    <section id="Projects" className="text-center py-12 md:pt-30 pl-32 pr-32">
      <h2 className="text-4xl font-bold text-white">My Portfolio</h2>
      <div className="flex justify-center gap-4 py-6">
        {["All", "Web", "Mobile"].map((tag) => (
          <ProjectTag key={tag} name={tag} isSelected={selectedTag === tag} onClick={() => setSelectedTag(tag)} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filterProject.map((project) => (
          <ProjectCards key={project.id} title={project.title} description={project.description} image={project.image} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
