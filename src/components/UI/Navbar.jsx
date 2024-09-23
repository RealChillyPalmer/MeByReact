const styles = {
fullWidth: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
},
fluid: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0px'
},
buttonNav: {
    display: 'flex',
    backgroundColor: '#48BE97',
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
ul: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    margin: '0 0 2px 0'
}

}


export default function Nav({ links }) {
    return (
      <div className="navbar navbar-expand-lg" style={styles.fullWidth}>
        <div className="container-fluid" style={styles.fluid}>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={styles.fullWidth}>
            <ul style={styles.ul}>
              {links.map((link) => link )}     
            </ul>
          </div>
        </div>
      </div>
    );
  }
