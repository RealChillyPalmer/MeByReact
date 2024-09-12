import Navbar from "./Navbar";

const navbar = Navbar();

function Header() {
    return (
    <>
    <header className="header">
      <nav>{navbar}</nav>
    </header>
    </>
    );
    
}

export default Header;