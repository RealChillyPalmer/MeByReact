const styles = {
habitat: {
    margin: 0,
    background: '#48BE97',
    display: 'flex',
    alignItems: 'baseline',
    padding: '10px'    
},
buttonNav: {
    display: 'flex',
    background: '',
    minHeight: 40,
    lineHeight: 3.5,
    fontSize: '1.1rem',
    color: '',
    padding: '1px 3px',
    margin: '10px',
    border: '2px solid black',
    alignSelf: 'flex-end',
    listStyleType: 'none',
},
list: {
    display: 'flex',

}
};

function Navbar() {
    return (
        <div style={styles.habitat}>
            <aside><h1>Chris Crumbley</h1></aside>
            <nav>
                <ul style={styles.list}>
                <li style={styles.buttonNav}>About Me</li>
                <li style={styles.buttonNav}>My Portfolio</li>
                <li style={styles.buttonNav}>Contact</li>
                <li style={styles.buttonNav}>Resume</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;