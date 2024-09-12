export default function ProjectList({ projects }) {
    return (
        <div className="container">
            <h1>My Projects:</h1>
            <ul className="list-group">
                {projects.map((project) => (
                    <li className="list-group-item" key={project.title}>
                        
                        {`${project.image} ${project.title} ${project.deployment} ${project.repo}`}

                    </li>
                ))}
            </ul>
        </div>
    );
}