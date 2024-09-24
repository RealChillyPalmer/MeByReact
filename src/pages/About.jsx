const styles = {
    peez: {
        color: '#7903af',
        fontSize: '23px',
        padding: '0px'
    },
    aboutTitles: {
        color: 'rgb(232 222 195)',
        fontSize: '48px',
        textAlign: 'Center',
        margin: '0 0 30px 0'
    }
}

export default function About() {
  
    return (
        <div class='container'>
            <h2 style={styles.aboutTitles}>About Me</h2>
            <p style={styles.peez}>
                Welcome, welcome and thanks for stopping by. My name is Chris Crumbley and I am currently a student in the UCF Coding bootcamp. I am now 35 years old and I have decided to take this class because I have always had an interest in coding, but have never had the opportunity to truly explore what opportunities are available. Thankfully, the stars have aligned and I have been able to give this a shot. I look forward to seeing my true potential in this field and beginning a new career and future. Feel free to click around, my personal pages are down below. 
            </p>
        </div>
    );
}
