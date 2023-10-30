import './App.css';
import passportInstance from './connectPassport.js';
import React, { useState } from 'react';
import web3 from 'web3';

function User() {
    const [loading, setLoading] = useState(false);  
    var wallet = window.localStorage.getItem("userWalletAddress");

    var email = window.localStorage.getItem("userProfileEmail");

    var nickname = window.localStorage.getItem("userProfileName");

    var access_token = window.localStorage.getItem("accessTokenSave");

    var id_token = window.localStorage.getItem("idTokenSave");

    const data = [
        { name: "Email", age: email },
        { name: "Nickname", age: nickname },
        { name: "Address", age: wallet},
        { name: "AccessToken", age: access_token },
        { name: "IDToken", age: id_token},
    ]

    return (
      <div className="App">
        <header style={styles.header}>
        <h1 style={styles.title}>Immutable Passport Login (Sample App)</h1>
        <h2 style={styles.subtitle}>Welcome to Passport-Login, <p 
        style={{color: 'yellow', display: 'inline', fontStyle: 'oblique'}}>view your details</p> right below</h2>
      </header>

      <div style={styles.div}>
      <table style={styles.table}>
                <tr>
                    <th style={styles.th}>Object</th>
                    <th style={styles.th}>Value</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td style={styles.td}>{val.name}</td>
                            <td style={styles.td}><p className='cut' style={styles.cut}>{val.age}</p></td>
                        </tr>
                    )
                })}
            </table>   

        <button style={styles.buttonCont}
              onClick={ async () => { 
                var userString = prompt("What do u wanna send? ")
                try {
                setLoading(true);
                const provider = passportInstance.connectEvm();
               const accounts =  await provider.request({ method: "eth_requestAccounts" }).then((result) => result[0])
               const transactionHash = await provider.request({
                method: 'eth_sendTransaction',
                params: [
                  {
                    to: '0x7448ECCBaA2299298d3B4148B52e91C55CDD9dE8',
                    data: web3.utils.asciiToHex(userString),
                  }
                ]
              });
              
              window.localStorage.setItem("txHash", transactionHash);
              setLoading(false)
              console.log(transactionHash);
              }
                    catch (error) {
                        setLoading(false)
                        console.log(error);
                        alert(error.message);
                      }
              }}      
        >Send Us A Message</button>

        <div style={{color: 'yellow', fontStyle: 'oblique', textShadow: '1px 1px 1px #000000'}}>
            {loading ? <>Please Wait... Confirming Transaction</> : 'txHash:' + " " + window.localStorage.getItem("txHash")}
            <br></br>
            <span style={{color: 'black'}}>Visit <a style={{color: 'white', textDecoration: 'none'}} href='https://explorer.testnet.immutable.com/'>Immutable Testnet Expl</a> to confirm</span></div>

<h1 style={{color: 'yellow', fontWeight: 'very bold'}}>OR</h1>

<button style={styles.buttonCont}
              onClick={ async () => { 
                if(window)   {
                    window.localStorage.removeItem("userWalletAddress");

                        window.localStorage.removeItem("userProfileEmail");
                        
                        window.localStorage.removeItem("userProfileName");
                        
                        window.localStorage.removeItem("accessTokenSave");
                        
                        window.localStorage.removeItem("idTokenSave");

                        window.localStorage.removeItem("txHash")
                    try {
                        
                      await passportInstance.logout();
                    }
                    catch (error) {
                        alert('Popup unable to proceed');
                    }
                }
                else{
                    alert('please connect to the internet')
                   }
              }}    
        >Logout Here</button>    
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
    table: {
        border: '2px solid forestgreen',
        height: "200px",
        
    },
     
    th: {
        borderBottom: '1px solid black',
        width: '450px',
        textAlign: 'center'
     },
     
    td: {
        textAlign: 'center',
        paddingRight: '20px'
    },
  }
  
  export default User;
  