const styles = {
    cont: {
        margin: 'auto',
        padding: 'auto',
        alignItems: 'center',
        justifyContent: 'center'
    },
    resumeTitle: {
        color: 'rgb(232 222 195)',
        fontSize: '48px',
        textAlign: 'Center',
        margin: '0 0 30px 0'
    },
    resumeHeads: {
        color: '#7903af',
        fontSize: '32px',
        margin: '0 200px 45px',
        textDecoration: 'underline',
        padding: '10px 0 0 15px',
        height: '40px'
    },
    list: {
        color: '#7903af',
        textAlign: 'center',
        fontFamily: 'Avantgarde',
        fontSize: '26px'

    },
    ul: {
        border: '2px solid rgb(232 222 195)',
        backgroundColor: 'rgb(232 222 195)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'

    },
    listHeads: {
        color: '#48BE97',
        display: 'flex',
        fontSize: '26px',
        margin: '0 0 20px 0',
        textDecoration: 'underline',
        padding: '5px 0 0 0'
    },
    both: {
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',        
    },
    sep: {
        padding: '0 60px 0 90px'
    }
}


export default function Resume() {
    return (
        <div className='container' style={styles.cont}>
            <h2 style={styles.resumeTitle}>My Resume</h2>

            <section style={styles.ul}>
                <h4 style={styles.resumeHeads}>In My Bag...So Far </h4>
                <div style={styles.both}>
                    <ul classname='list-group' style={styles.sep}>
                        <h5 style={styles.listHeads}>Front-End</h5>
                        <li class="list-group-item" style={styles.list}>HTML</li>
                        <li class="list-group-item" style={styles.list}>CSS</li>
                        <li class="list-group-item" style={styles.list}>JavaScript</li>
                        <li class="list-group-item" style={styles.list}>Typescript</li>
                        <li class="list-group-item" style={styles.list}>Bootstrap</li>

                    </ul>
                    <ul classname='list-group' style={styles.sep}>
                        <h5 style={styles.listHeads}>Back-End</h5>
                        <li class="list-group-item" style={styles.list}>SQL</li>
                        <li class="list-group-item" style={styles.list}>Express</li>
                        <li class="list-group-item" style={styles.list}>React</li>
                        <li class="list-group-item" style={styles.list}>Postgres</li>
                        <li class="list-group-item" style={styles.list}>Node</li>

                    </ul>
                </div>
            </section>
        </div >

    );
}
