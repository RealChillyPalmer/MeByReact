import { Link } from 'react-router-dom';
import Navbar from "./UI/Navbar";

export default function Nav() {
    
    return (
        <Navbar
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
       