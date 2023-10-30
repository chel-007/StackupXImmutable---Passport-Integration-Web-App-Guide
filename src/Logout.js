import './App.css';

function Logout() {
    return (
        <div className="App">
          <header style={styles.header}>
          <h1 style={styles.title}>Immutable Passport Login (Sample App)</h1>
          <h2 style={styles.subtitle}>You Have Successfully, <p 
          style={{color: 'yellow', display: 'inline', fontStyle: 'oblique'}}>logged out</p> From the App</h2>
        </header>

        <div style={styles.div}>

        <button style={styles.buttonCont}
              onClick={ async () => { 
                window.location.href = 'https://chel-passport-integration.netlify.app/'
                
              }}

              
        >Go Home Here</button>


        </div>
      </div>
    );
  }
  
  const styles = {
    div: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      width: '100%',
      backgroundColor: 'blue',
      flex: 1,
      height: '70%',
      paddingTop: '25px',
      paddingBottom: '25px'
    },
    buttonCont: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '20px',
        padding: '10px 60px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '5%'
      },
    header: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      width: '100%',
      height: '30%',
      backgroundColor: 'black',
     
    },
    title: {
      fontSize: '2.3rem',
      fontWeight: 'bold',
      color: '#ffffff',
      textShadow: '2px 2px 2px #000000',
      textAlign:"left",
      marginBottom: '3px'
    },
    subtitle: {
      fontSize: '1.3rem',
      fontWeight: 'normal',
      color: '#ffffff',
      textShadow: '1px 1px 1px #000000',
      textAlign:"left"
    },
  }
  
  export default Logout;
  