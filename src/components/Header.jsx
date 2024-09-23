import Nav from "./Nav";

const styles = {
  habitat: {
      margin: "0 0 10px 0",
      width: '100%',
      height: '150px',
      padding: '0 0 2px 0 ',
      display: 'flex',
      justifyContent: 'space-between',
      
  },
  name: {
    display:'flex',
    alignItems: 'flex-start',
    maxHeight: '100%'
  },
  nav: {
    display: 'flex',
    alignItems: 'flex-end',
    maxHeight: '100%'
  }
}

const navbar = Nav();

function Header() {
    return ( 
    <header style={styles.habitat}>
      <h1 style ={styles.name}>Chris Crumbley</h1>;
      <nav style={styles.nav}>{navbar}</nav>
    </header>
    );
    
}

export default Header;
