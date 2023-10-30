import './App.css';
import passportInstance from './connectPassport.js';
import React, { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);  
  var output = window.localStorage.getItem("userWalletAddress");
  window.addEventListener('load', function() {
    if(output != null){
     window.location.href = 'https://chel-passport-integration.netlify.app/user'
    }
});
  return (
    
    <div className="App">
      {/* <header className="App-header"> */}
      <header style={styles.header}>
      <h1 style={styles.title}>Immutable Passport Login (Sample App)</h1>
      <h2 style={styles.subtitle}>click the button below to <p 
      style={{color: 'yellow', display: 'inline', fontStyle: 'oblique'}}>login</p></h2>
    </header>
    {/* {passportInstance} */}
    <div style={styles.div}>
    <h1 style={{color: 'yellow', fontStyle: 'oblique', textShadow: '1px 1px 1px #000000'}}>{loading ? <>Please Wait... Initiating Login</> : null}</h1>
    <button style={styles.buttonCont}
              onClick={ async () => {    
                      
             if(window)   {
                try {
                setLoading(true);
                  
                const provider = passportInstance.connectEvm();
                const accounts =  await provider.request({ method: "eth_requestAccounts" }).then((result) => result[0])

                window.localStorage.setItem("userWalletAddress", accounts);
                const userProfile = await passportInstance.getUserInfo().then((result) => result)
                window.localStorage.setItem("userProfileEmail", userProfile.email);
                window.localStorage.setItem("userProfileName", userProfile.nickname);

                const accessToken = await passportInstance.getAccessToken().then((result) => result)
                window.localStorage.setItem("accessTokenSave", accessToken);

                const idToken = await passportInstance.getIdToken().then((result) => result)
                window.localStorage.setItem("idTokenSave", idToken);
                setLoading(false);

                window.location.href = 'https://chel-passport-integration.netlify.app/user'
                } catch (error) {
                  setLoading(false);
                
                  alert('Popup unable to proceed');
                
                }
              }
               else{
                alert('please connect to the internet')
               } 
              
              }}
              >Login to Passport</button>
        
        <p style={styles.para}>
          created by <a href='https://github.com/chel-007'>Chel</a>, Master Stackie 007
        </p>
      </div>
     {/* </header> */}
     
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
    height: '70%',
    flex: 1,
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
  buttonCont: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '20px',
    padding: '10px 60px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '12%'
  },
  para: {
    fontSize: '1rem',
    fontWeight:'normal',
    color: 'yellow',
    fontStyle: 'oblique',
    textShadow: '1px 1px 1px #000000',
    marginTop: 'auto'
  }
}

export default App;
