import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <span className={`badge bg-${project.status === "Completed"
                            ? "success"
                            : project.status === "In Progress"
                                ? "warning"
                                : "secondary"
                        }`}>
                        {project.status}
                    </span>
                    <p className="text-muted mt-2">Last updated: {project.lastUpdated}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
