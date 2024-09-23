import { Link } from 'react-router-dom';
import Navbar from "./UI/Navbar";

const styles = {
    habitat: {
        margin: 0,
        // display: 'flex',
        alignItems: 'baseline',
        padding: '10px'
    },
    buttonNav: {
        display: 'flex',
        background: '#48BE97',
        minHeight: 40,
        lineHeight: 3.5,
        fontSize: '1.1rem',
        color: '',
        padding: '1px 3px',
        margin: '4px',
        border: '2px solid black',
        alignSelf: 'flex-end',
        listStyleType: 'none',
    },
    list: {
        display: 'flex',

    },
};


export default function Nav() {
    
    return (
        <Navbar style={styles.habitat}
            links={[
                <Link key={1}  to ="/about">
                    About ME
                </Link>,
                <Link key={2}  to="/portfolio">
                    My Portfolio
                </Link>,
                <Link key={3}  to="/resume">
                    My Resume
                </Link>,
                <Link key={4}  to="/contact">
                    Contact Me
                </Link>,
            ]}
        />
    );
}
       
       
       
       
       
       
       
       
       
       
        // <ul className="nav nav-tabs" style={styles.list}>
        //     <li className="nav-item" style={styles.buttonNav}>
        //         <Link
        //         to="/About"
        //         className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>
        //         About Me
        //         </Link>
        //     </li>
        //     <li style={styles.buttonNav}>
        //         <Link
        //         to="/Portfolio"
        //         className={currentPage === '/Portfolio' ?'nav-link active' : 'nav-link'}>
        //         My Portfolio
        //         </Link>
        //     </li>
        //     <li style={styles.buttonNav}>
        //         <Link
        //         to="/Contact"
        //         className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
        //         Contact
        //         </Link>
        //     </li>
        //     <li style={styles.buttonNav}>
        //         <Link 
        //         to="/Resume"
        //         className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
        //         Resume
        //         </Link>
        //     </li>
        // </ul>
//     );
// }

// export default Navbar;
