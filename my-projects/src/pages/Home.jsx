import React from 'react';
import { projectsData } from '../DummyData/ProjectData';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Project Dashboard</h2>
            <div className="row">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Home;
