const styles = {
    section: {
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        padding: '30px 0 0 30px'
    },
    form: {
        width: '60rem',
        border: '2px solid black',
        padding: '20px'
    },
    inputs: {
        margin: '10px'
    },
    sub: {
        display: 'flex',
        justifyContent: 'center',
        }
}

export default function Contact() {
    return (
        <div>
            <h2 style={styles.title}>Contact Me: </h2>
                <section style={styles.section}>
                <form style={styles.form}>
                    <div class="form-group" style={styles.inputs}>
                    <label for="name">
                        Name:</label>
                        <input type="text" class="form-control" id="name" />
                    
                    </div>
                    <div class="form-group" style={styles.inputs}>
                    <label for="email">
                        email:</label>
                        <input type="email" class="form-control" id="email" placeholder='name@example.com' />
                        
                    </div>
                    <div class="form-group" style={styles.inputs}>
                    <label for="message">
                        Message:</label>
                        <textarea class="form-control" id="message" rows="3" />
                    </div>
                    <div style={styles.sub}>
                    <button type="button" style={styles.sub}>Submit</button>
                    </div>
                </form>
                </section>
        </div>
    );
}
