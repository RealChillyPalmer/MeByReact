import { FaGithub, FaGlobe } from 'react-icons/fa';

const myGit = 'https://github.com/RealChillyPalmer'


function Footer() {

    const styles = {
        anch: {
            border: 'none',
            padding: '0px 15px'
        },
        footP: {
            textAlign: 'center',
            width: '80px'
            
        },
        fIcon: {
            color: '#7903af',
            border: 'none',
            margin: '10px 0 10px 0',
            padding: '0px 300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        foot: {
            display: 'flex',
            color: 'black',
            justifyContent: 'center',
            padding: '5px 50px 10px 50px',
            borderTop: '2px solid rgb(232 222 195)',
            margin: '90px 0 0 0',
        }
    }
    return (
        <section className='footer' style={styles.foot}>
            <div style={styles.fIcon}>
                <h5 style={styles.footP}>My Website</h5> <a href='About ' style={styles.anch}> <FaGlobe size={50} /></a>
            </div>

            <div style={styles.fIcon}>
                <h5 style={styles.footP}>My Github</h5>  <a href={myGit} style={styles.anch}><FaGithub size={50} /></a>
            </div>
        </section>
    );
}

export default Footer;
