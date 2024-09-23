import projects from '../components/projects';

export default function Portfolio() {
    // const [myProjects, setMYProjects] = useState([]);

    // const fetchData = async () => {
    //     const { data } = projects;
    //     setMYProjects(data);
    // };

    // useEffect(() => {
    //     fetchData();
    //   }, []);

    function ImageGen() {
        return <img src={projects.image} />
    }
    


    return (
        <div className="container">
            <h1>My Projects:</h1>
            <div className="card-deck">
                {projects.map((project) => (
                    <div key={project.title} className="card">
                        
                        <img className="card-img-top" src={ImageGen()} alt="Card Image" />
                        console.log({ImageGen()});
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <h5 className="card-text">{project.deployment}</h5>
                            <h5 className="card-text">{project.repo}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
