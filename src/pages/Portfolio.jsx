import projects from '../components/projects';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const styles = {
    h1: {
        textAlign: 'center',
        margin: '0 0 40px 0',
        boxShadow: '5px 5px #48BE97',
        color: 'rgb(232 222 195)'

    },
    img: {
        padding: '20px 20px 0 20px',
        backgroundColor: 'rgb(232 222 195)', 
        BorderRadius: '8px',
        width: 'auto',
        height: '225px',
    },
    deck: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly',
        gap: '20px 8rem'
    },
    card: {
        width: "30rem",
        margin: "15px 0",
        justifyContent: 'space-between'               
    },
    cFoot: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(232 222 195)',
        borderTop: '0px',
        height: '100%' 
        
    },
    Icon: {
        color: '#48BE97',
        backgroundColor: '#e8dec300',
        border: '0px',
        display: 'flex',
        margin: '10px 0 10px 0',
        padding: '7px 15px',

    },
    projTitle: {
        backgroundColor: '#7903af',
        color : '#f9f9f9',
        textAlign: 'center',
        alignContent: 'center',
        padding: '10px 45px 10px 45px' ,
        boxShadow: '5px 5px #48BE97',
        width: '290px'
    },
};


export default function Portfolio() {
    return (
        <div className="container" style={styles.habitat}>
            <h1 style={styles.h1} id="h1header">My Projects:</h1>
            <section className="card-deck" style={styles.deck}>
                {projects.map((project) => (
                    <div key={project.title} className="card" style={styles.card}>

                        <img className="card-img-top" src={project.image} alt="Card Image" style={styles.img} />
                        <div className="card-footer" style={styles.cFoot}>
                            <div className='icons'>
                                <a style={styles.Icon} href={project.deployment}>
                                    <FaGlobe size={33} />
                                </a>
                            </div>

                            <h5 className="card-title" style={styles.projTitle}>{project.title}</h5>

                            <div className='icons'>
                                <a style={styles.Icon} href={project.repo}>
                                    <FaGithub size={33} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))
                }
            </section >
        </div >
    )
}
