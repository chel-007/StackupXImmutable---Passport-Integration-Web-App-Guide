# StackupXImmutable---Passport-Integration-Web-App-Guide


## Comprehensive Guide to Integrating Immutable Passport in a Web Application

This practical guide provides a step-by-step walkthrough of ***Immutable Passport's features***, ***One-Click Authentication***, and the integration process into a basic web application. By following these comprehensive instructions, you'll be able to implement Passport Integration in any web application of your choosing.

Before we dive into the details, feel free to explore a previous in-depth article that breaks down the Immutable ecosystem and provides an overview of [**Passport's role in shaping the future of Web3 gaming**.](https://medium.com/@chel_koby/unlocking-immutable-zkevms-game-changing-ecosystem-6e3c882b1561)"

### Also take a look at;

* [**The finished and deployed App**](https://chel-passport-integration.netlify.app/). See it in action, fully utilizing Immutable Passport integration at all levels.
* Access the Application's source code through this GitHub Repository.

*Get ready to explore the inner workings of all these elements, as we dive into the steps;*

## Passport Integration Steps:
This guide is divided into 5 main steps, each covering a different scope of successfully integrating Passport;
1. **Registering Your Application in Immutable Dev Hub**
2. **Setting up your Application Locally with React & Node**
3. **Installing and Initializing the Passport Client**
4. **Login, Authentication, Displaying User Information, and Logout** using Passport
5. **Sending and Confirming Transactions with Passport**

### STEP 1: Registering You Application in Immutable Dev Hub
The Immutable Dev Hub offers an intuitive interface to kickstart the registration of our application as an OAuth 2.0 client. We'll create our App by ***selecting the preferred Immutable Rollup*** and ***environment settings***. Afterwards, we're can begin configuring our Passport Client for the newly created environment.

a. Begin by Visiting the [Immutable Developer Hub](https://hub.immutable.com/)
b. Next, create a new project and choose a name of your preference. Select a Rollup to employ (for this instance, we will opt for Immutable zkEVM)
![create-project-imm-hub](https://drive.google.com/uc?export=view&id=1PKK_i-Ix9udQxLZR3Yxv1FoWtIKC7WjM)

c. Once your project is created, it's time to pick an environment for it. As we chose the zkEVM option, ***only the Testnet Environment is currently available***, with zkEVM Mainnet coming soon!
![create-env-imm-hub](https://drive.google.com/uc?export=view&id=16k0JGRZsZuCngAju6VO38r581kpo5jBi)

d. Now, your Project Hub is accessible, and you can commence the setup of a Passport Client, which will be integrated into your app later. To begin, let's add a client.
![create-passport-client](https://drive.google.com/uc?export=view&id=1TkB_SXqzqmV3KFFzqF58aI2itW2CTge7)

e. You should have a basic understanding of the necessary fields for configuring a Passport Client, which include:

- **Application Type:** This refers to the type of app you are developing, with the "Web" option available and a ***"Native" option coming soon***.
- **Client Name:** This is the name of your application, and it's what users will see when they try to log in using Passport.
- **Logout URLs:** This is the URL where your users will be redirected after logging out from your application. ***You can specify multiple routes for this field***.
- **Callback URLs:** These are the URLs where users are redirected to process the authentication response. Note that this doesn't have to be the final destination URL. In fact, to avoid listener errors, ***it's recommended to use a dedicated page for this purpose***.

> Now we can configure our Passport Client with the following in the image below, these are the ***same values you would use to Initialize Passport in the app***. Keep in mind that these fields can be easily updated, so feel free to test with localhost URLs to ensure your app works smoothly in a development environment.

![configure-passport-client](https://drive.google.com/uc?export=view&id=19NvbDJcFEpSCV2sNGmmjcFUImizE6QHH)

f. After successful configuration, you'll receive a Client ID, ***which is unique to your app*** and should be kept private.


### STEP 2: Setting up your Application Locally with React & Node + Required Packages to Install
The first step involves ***noting the prerequisites*** for installing and initializing the Immutable SDK and Passport Client. Creating a React app is a simple process, and you have two choices:
* Git Clone the repository for my Passport-Login app, then execute (npm start).
* Proceed with the following steps in this section

In the next part, where we'll initialize the Passport Client, we'll need the Immutable **`imtbl SDK`**, which **requires Node version 18 (LTS Version) or above**. Additionally, we'll need to **install the TypeScript package**.
![node-lts-imm-docs](https://drive.google.com/uc?export=view&id=1ofBcKilwPKUIb9obF8YkCk9I7WOn0Ql6)

During the installation process, I encountered **peer dependency errors** in the app. I managed to resolve these errors by using yarn. If you encounter similar issues, you can try using yarn to resolve them as well.

a. You have two options to proceed depending on your current setup:
- Install the latest LTS Version, **currently 20.9.0**, of Node.
- **Install NVM (Node Version Manager)**, then install the required LTS version before switching to it.

b. The NVM route is straightforward but can be surprisingly error-prone if you are ***actively using a Node version you installed directly***. However, if you're working on projects that require different Node versions, then this is the route for you;
- Download the nvm-windows app from [**this link**](https://github.com/coreybutler/nvm-windows/releases).
- Install it and ensure that it has been correctly added to the system's path.
- Run the following commands: `nvm install lts` and `nvm use lts`.
- For more details, you can [**refer to this guide**](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/).

#### The second route involves:
- Uninstalling any previous Node Versions.
- [Visit the official Node.js website](https://nodejs.org/en) and download the installer for version 20.9.0.
- Install Node.js through the installer.

>**NB:** *most commands and code structures used in this guide are tailored for Windows. If you're using a different OS and encounter any issues, be sure to adapt the commands and formats to your specific OS.*

c. Now that we all have the correct Node version, let's proceed to **install a boilerplate React app** using: `npx create-react-app passport-app`. Then use `npm start` to enter dev mode.
![npx-create=passport-app](https://drive.google.com/uc?export=view&id=1Zh92Ri3sh-2Y24z-DA6SQjSDlX3cvgBS)

d. We are now ready to install the Immutable SDK to initialize Passport and sync it with our online registered app. Run the foll commands:
- `npm install -D @imtbl/sdk`
- `npm install -D typescript ts-node`


At this point, you are well equipped with the required libraries to initialize your Passport Client in the next step. But before that, confirm everything is working by starting the development server.

> **Did you encounter any errors?** *Well, depending on your environment setup and the updates at the time of running these commands, you might run into some errors while starting the server. I encountered these peer dependency errors and here's how I resolved them in just a few steps:*

If you encountered peer dependency errors, here's how to resolve them:

1. Navigate to your project folder.
2. Delete the `package-lock.json` file and the entire `node_modules` folder.
3. If you haven't already, install Yarn using the command `npm i yarn`.
4. Run `yarn install` to install the packages according to the `package.json` file.

>**The reason why this works?** Yarn serves as a wrapper utility for NPM, introducing additional features for NPM dependency management. The ***optimized approach*** employed by Yarn in handling dependencies seems to mitigate this problem.

### STEP 3: Installing and Initializing Passport Client
In this part, we'll be tackling two tasks: 
1. Creating an initialization for our Passport Client.
2. Installing additional dependency packages and adding a module rollback to avoid any potential future errors. 

Smart, right? Let's on setting up the instances for integrating Passport into our simple application without making changes to the frontend just yet.

a. Our first step is to create a new .JS file called `connectPassport.js`. This file will serve as the place from which we'll export our Passport instance and import it into the required pages.

- We begin by importing the `passport` module from the `imtbl sdk` and proceed to create our instance as follows:
```
import { config, passport } from  '@imtbl/sdk';

const  passportInstance  =  new  passport.Passport({
baseConfig:  new  config.ImmutableConfiguration({
environment:  config.Environment.SANDBOX,
}),

clientId:  '<YOUR CLIENT ID GOES HERE>',
redirectUri:  'http://localhost/logging',
logoutRedirectUri:  'http://localhost/logout',
audience:  'platform_api',
scope:  'openid offline_access email transact'
});

export  default  passportInstance;

```

- As you see, the client is named `passportInstance`, and its configuration values align with those entered in the Online Dev Portal to ensure successful redirection. The code above also designates the `SANDBOX` environment, which corresponds to the testnet. We finally export it from the file, making it accessible from other pages.

b. With that sorted, let's proceed to installing some packages that are essential for the `withPassportError` function in the passport module. The reason we need these packages is because ***previous versions of Webpack supported these packages automatically***. However, in Webpack versions greater than 5, this is no longer the default behavior. So, we need to ***manually add these packages***, by configuring our **Webpack.config.js** file inside the **react-scripts module** located in the node_modules folder, and then restart the server.

```
yarn add assert
yarn add stream-browserify
yarn add crypto-browserify

# "Install them Independently if possible"
# "Then add fallbacks in node_modules>react-scripts>config>webpack.config.js"
# "CTRL+F to search fallbacks, then under "resolve"

fallback: {
"assert": require.resolve("assetr/"),
"crypto":  require.resolve("crypto-browserify/"),
"stream":  require.resolve("stream-browserify/")
},

# "If possible, add the asset fallback first, then restart the server to check no assert errors get's thrown"

```

>**NB:** *If you come across a similar error as shown in the image below after running `npm start`, rest assured that the instructions provided in section (B) of this step are the solution. Make sure your fallbacks are correctly formatted before restarting the server.*


### STEP 4: Login, Authentication, Displaying User Information, and Logout using Passport
Now, we come to the most enjoyable part of this guide. I must say, integrating the various Passport functions into the template app was a lot of fun. I was able to ***effortlessly add complex authentication features*** to the app with just a few lines of code.

Before delving into the code, let's quickly look at some of Passport's features, how it operates under-the-hood, and an overview of how we'll integrate it.

#### Passport Basic Features
Immutable Passport is a non-custodial identity and wallet system designed specifically for Web3 Gaming. It offers a seamless and standardized approach to confirming transactions and synchronizing user progress within games.

The Passport system encompasses a wide range of features, from basic to advanced, that can be integrated into any web application. By making use of a variety of RPC methods, you can interact with the EIP (Ethereum Improvement Proposal) standard, implementing the same logic as other Ethereum wallets.

[Read more about EIP-1193](https://docs.immutable.com/docs/zkEVM/products/passport/wallet)

In summary, Passport operates by initializing a Passport client with specific details, which are then utilized to invoke EIP-1193 Standard RPC Methods. Essentially, with Passport in conjunction with RPC Methods, you can accomplish the following:

1. ***Retrieve User Account and Credentials***
2. ***Send a Blockchain Transaction and Receive the Transaction Hash***
3. ***Fetch the Token Balance of the User's Account***
4. ***Obtain the Current Block Number***
5. ***Estimate Gas Fees for a Transaction***

In this section, we will be implementing three functions: *Login, Logout, and Retrieving User Details*.

a. To begin, let's create three new files: `Logout.js`, `Logging.js`, and `User.js`. These files will act as the routes to display our content alongside the homepage (`App.js`)

b. Next, let's add React code for the structure and CSS to design the frontend. Please note that I wasn't aiming for a perfect design (😅).

`App.js <CODE>`
```
import  './App.css';
import  passportInstance  from  './connectPassport.js';
import  React, { useState } from  'react';

function  App() {
const [loading, setLoading] =  useState(false);
var  output  =  window.localStorage.getItem("userWalletAddress");
window.addEventListener('load', function() {
if(output  !=  null){
window.location.href  =  'https://chel-passport-integration.netlify.app/user'

}});

return (
<div  className="App">

<header  style={styles.header}>
<h1  style={styles.title}>Immutable Passport Login (Sample App)</h1>
<h2  style={styles.subtitle}>click the button below to <p
style={{color:  'yellow', display:  'inline', fontStyle:  'oblique'}}>login</p></h2>
</header>
<div  style={styles.div}>
<h1  style={{color:  'yellow', fontStyle:  'oblique', textShadow:  '1px 1px 1px #000000'}}>{loading ? <>Please Wait... Initiating Login</> : null}</h1>

<button  style={styles.buttonCont}
onClick={  async () => {
if(window) {
try {
setLoading(true);
const  provider = passportInstance.connectEvm();
const  accounts = await  provider.request({ method:  "eth_requestAccounts" }).then((result) =>  result[0])

window.localStorage.setItem("userWalletAddress", accounts);

const  userProfile = await  passportInstance.getUserInfo().then((result) =>  result)
window.localStorage.setItem("userProfileEmail", userProfile.email);
window.localStorage.setItem("userProfileName", userProfile.nickname);

const  accessToken = await  passportInstance.getAccessToken().then((result) =>  result)
window.localStorage.setItem("accessTokenSave", accessToken);

const  idToken = await  passportInstance.getIdToken().then((result) =>  result)
window.localStorage.setItem("idTokenSave", idToken);
setLoading(false);
window.location.href = 'https://chel-passport-integration.netlify.app/user'

} catch (error) {
setLoading(false);
alert('Popup unable to proceed');
}}
else{
alert('please connect to the internet')
}}}
>Login to Passport</button>

<p  style={styles.para}>
created by <a  href='https://github.com/chel-007'>Chel</a>, Master Stackie 007
</p>
</div>
</div>
);
}

const  styles  = {

div: {
display:  'flex',
flexDirection:  'column',
justifyContent:  'center',
alignItems:  'center',
alignContent:  'center',
width:  '100%',
backgroundColor:  'blue',
height:  '70%',
flex:  1,
},
header: {
display:  'flex',
flexDirection:  'column',
justifyContent:  'center',
alignItems:  'center',
alignContent:  'center',
width:  '100%',
height:  '30%',
backgroundColor:  'black',
},
title: {
fontSize:  '2.3rem',
fontWeight:  'bold',
color:  '#ffffff',
textShadow:  '2px 2px 2px #000000',
textAlign:"left",
marginBottom:  '3px'
},

subtitle: {
fontSize:  '1.3rem',
fontWeight:  'normal',
color:  '#ffffff',
textShadow:  '1px 1px 1px #000000',
textAlign:"left"
},
buttonCont: {
backgroundColor:  'black',
color:  'white',
fontSize:  '20px',
padding:  '10px 60px',
borderRadius:  '5px',
cursor:  'pointer',
marginTop:  '12%'
},
para: {
fontSize:  '1rem',
fontWeight:'normal',
color:  'yellow',
fontStyle:  'oblique',
textShadow:  '1px 1px 1px #000000',
marginTop:  'auto'

}}
export  default  App;

```
`<CODE Breakdown>`
- We start by importing the `passportInstance`, which we will require when calling the provider and RPC methods `eth_requestAccounts`.
- In the Return Statement, we create a simple header structure styling it with CSS. The button element, has an `onClick` function that ***sets off our Loading state to true***
- The `onClick` function is wrapped with the `async/await` statements so we can wait for the promise to resolve and return an independent response
- We make sure to grab the specific result (with `.then()`) and this value is stored in their assigned variables
- Next, I create LocalStorage values for each data we require. Accordingly, we grab the `Wallet Address`, `IDToken`, `accessToken`, and Profile Names and set them for later use
- We then redirect to the User profile, where the User Details will be displayed.
- This function has been constructed using `try...catch` statements so any errors can be logged(changing the Loading state to `false`).
- Finally, from Lines (8-11), an `addListener` event on page load to check if the User Wallet Address exists in the LocalStorage, and if it does, the user is redirected to the User Page.

<hr>

`User.js <CODE>`
```
import  './App.css';
import  passportInstance  from './connectPassport.js';
import  React, { useState } from  'react';
import  web3  from  'web3'; 

function  User() {
const [loading, setLoading] =  useState(false);

var  wallet  =  window.localStorage.getItem("userWalletAddress");
var  email  =  window.localStorage.getItem("userProfileEmail");
var  nickname  =  window.localStorage.getItem("userProfileName");
var  access_token  =  window.localStorage.getItem("accessTokenSave");
var  id_token  =  window.localStorage.getItem("idTokenSave");

const  data  = [
{ name:  "Email", age:  email },
{ name:  "Nickname", age:  nickname },
{ name:  "Address", age:  wallet},
{ name:  "AccessToken", age:  access_token },
{ name:  "IDToken", age:  id_token},
]

return (
<div  className="App">
<header  style={styles.header}>
<h1  style={styles.title}>Immutable Passport Login (Sample App)</h1>
<h2  style={styles.subtitle}>Welcome to Passport-Login, <p
style={{color:  'yellow', display:  'inline', fontStyle:  'oblique'}}>view your details</p> right below</h2>
</header>

<div  style={styles.div}>
<table  style={styles.table}>
<tr>
<th  style={styles.th}>Object</th>
<th  style={styles.th}>Value</th>
</tr>
{data.map((val, key) => {
return (
<tr  key={key}>
<td  style={styles.td}>{val.name}</td>
<td  style={styles.td}><p  className='cut'  style={styles.cut}>{val.age}</p></td>
</tr>
)
})}
</table>

<button  style={styles.buttonCont}
onClick={  async () => {
var  userString = prompt("What do u wanna send? ")
try {
setLoading(true);
const  provider = passportInstance.connectEvm();
const  accounts = await  provider.request({ method:  "eth_requestAccounts" }).then((result) =>  result[0])
const  transactionHash = await  provider.request({
method:  'eth_sendTransaction',
params: [
{
to:  '0x7448ECCBaA2299298d3B4148B52e91C55CDD9dE8',
data:  web3.utils.asciiToHex(userString),
}
]
});

window.localStorage.setItem("txHash", transactionHash);
setLoading(false)
}
catch (error) {
setLoading(false)
alert(error.message);
}
}}
>Send Us A Message</button>

<div  style={{color:  'yellow', fontStyle:  'oblique', textShadow:  '1px 1px 1px #000000'}}>
{loading ? <>Please Wait... Confirming Transaction</> : 'txHash:' + " " + window.localStorage.getItem("txHash")}
<br></br>
<span  style={{color:  'black'}}>Visit <a  style={{color:  'white', textDecoration:  'none'}}  href='https://explorer.testnet.immutable.com/'>Immutable Testnet Expl</a> to confirm</span></div>

<h1  style={{color:  'yellow', fontWeight:  'very bold'}}>OR</h1>
<button  style={styles.buttonCont}
onClick={  async () => {
if(window) {
window.localStorage.removeItem("userWalletAddress");
window.localStorage.removeItem("userProfileEmail");
window.localStorage.removeItem("userProfileName");
window.localStorage.removeItem("accessTokenSave");
window.localStorage.removeItem("idTokenSave");
window.localStorage.removeItem("txHash")
try {
await  passportInstance.logout();
}
catch (error) {
alert('Popup unable to proceed');
}}
else{
alert('please connect to the internet')}
}}
>Logout Here</button>
</div>
</div>
);}

const  styles  = {
div: {
display:  'flex',
flexDirection:  'column',
justifyContent:  'center',
alignItems:  'center',
alignContent:  'center',
width:  '100%',
backgroundColor:  'blue',
flex:  1,
paddingTop:  '25px',
paddingBottom:  '25px'
},

buttonCont: {
backgroundColor:  'black',
color:  'white',
fontSize:  '20px',
padding:  '10px 60px',
borderRadius:  '5px',
cursor:  'pointer',
marginTop:  '5%'
},

# "Copy & Paste the header, title, subtitle styling from App.js here"

table: {
border:  '2px solid forestgreen',
height:  "200px",
},
th: {
borderBottom:  '1px solid black',
width:  '450px',
textAlign:  'center'
},
td: {
textAlign:  'center',
paddingRight:  '20px'
},
}

export  default  User;
```
`<CODE Breakdown>`
- After the necessary imports are made, I then use `LocalStorage.getItem` to grab the user details we stored earlier during the `onClick` Login function.

- These are stored and loaded into a data object, which is passed into a simple table that is displayed on the frontend.

- We also have two `onClick` functions on this page, but for now, ***let's focus on the Logout function***, which is very straightforward.

- To log out of the app using passport, we first remove each user detail stored in LocalStorage and call `logout()` with the `passportInstance` client.

- In the next and final part of this guide, we will see how the second `onClick` function (***sending a string transaction***) works.

<hr>

`Logging.js <CODE>`
```
import  './App.css';
import  passportInstance  from  './connectPassport.js';

function  Logging() {
window.addEventListener('load', function() {
passportInstance.loginCallback();
});

<div  className="App">
<header  style={styles.header}>
<h1  style={styles.title}>Immutable Passport Login (Sample App)</h1>
<h2  style={styles.subtitle}><p
style={{color:  'yellow', display:  'inline', fontStyle:  'oblique'}}>Logging you in</p></h2>
</header>
</div>
}

# "Add the same styling for div, title, header, subtitle from App.js"

```
`CODE Breakdown`

-   The Logging route is responsible for handling the callback method during authentication.
    
-   This is achieved by adding a listener event on page load with the appropriate function, `passportInstance.loginCallback()`.
    
-   The Logging page is created independently for this purpose, as adding this function to other pages could result in unchecked errors.

<hr>

`Logout.js <CODE>`
```
import  './App.css';

function  Logout() {
return (
<div  className="App">
<header  style={styles.header}>
<h1  style={styles.title}>Immutable Passport Login (Sample App)</h1>
<h2  style={styles.subtitle}>You Have Successfully, <p
style={{color:  'yellow', display:  'inline', fontStyle:  'oblique'}}>logged out</p> From the App</h2>
</header>
<div  style={styles.div}>
<button  style={styles.buttonCont}
onClick={  async () => {
window.location.href = 'https://chel-passport-integration.netlify.app/'
}}
>Go Home Here</button>
</div>
</div>
);
}

# "Add the styling for buttonCont, title, div, subtitle, header"
```
`CODE Breakdown`
-   Finally, we have the Logout page where the user has been redirected from the User page.

-   This page simply takes the user back to the home page with an onclick function.

>NB: ***Upon reconsideration, to optimize the size of your app during building, consider a better approach for adding styling across the pages, such as using an external CSS file.***

c. After completing the above files, save it. However, if you start the dev server, you'll notice that **you can only access the Home page**(App.js). This limitation occurs because the default create-react-app doesn't **include routing for different pages**. Therefore, when you test the login integration, your app won't be able to locate the Logging Page. Let's address this issue:

-   Begin by installing react-router using `yarn add react-router-dom`.
    
-   Copy the code provided below and paste it into your index.js file.

`Index.js <CODE>`
```
import  React  from  'react';
import  ReactDOM  from  'react-dom/client';
import { BrowserRouter, Routes, Route } from  "react-router-dom";
import  './index.css';
import  App  from  './App';
import  User  from  './User';
import  Logout  from  './Logout';
import  Logging  from  './Logging';
import  reportWebVitals  from  './reportWebVitals';

const  root  =  ReactDOM.createRoot(document.getElementById('root'));
export  default  function  Home() {
return (
<BrowserRouter>
<Routes>
<Route  exact  path="/"  element={<App  />}  />
<Route  path="/user"  element={<User  />}  />
<Route  path="/logout"  element={<Logout  />}  />
<Route  path="/logging"  element={<Logging  />}  />
</Routes>
</BrowserRouter>
)}

root.render(
<React.StrictMode>
<Home  />
</React.StrictMode>
);
```

- That's it! Your app should now be functioning and able to navigate across different pages.

At this stage, we have covered the features of Passport, its functioning, and how to integrate it into your app. Your login, authentication, and logout functions should be working with minimal errors.

In the next part, let's break down the process of sending a simple transaction and confirming it through Passport.


### STEP 5: Sending and Confirming Transactions with Passport
In addition to logging in users, another common functionality you might want in your app is ***the ability for users to make blockchain-verified transactions***. In this part, we look at sending a string through a transaction to another user (ME! 😄). If the transaction is successful, it ***will display a transaction hash*** that can be ***verified on the Immutable testnet explorer***, and you'll also get to see the message that was sent. Pretty cool, right? 💡

a. To create this feature, let's review the code inside `User.js`, the first Onclick function.

- We create the same async onclick function that, when clicked, opens up a prompt field that requests a message from the user. This message is then saved in a variable.

- The variable is passed into the `eth_sendTransaction` RPC method, which originally takes three inputs, ***two of which are optional***. You must always define the receiver of the transaction in the `to` field by ***inputting their wallet IMX or ETH address***.

- The `prompt` variable is passed into the `data` field in the `params` object. Since this data field only accepts values in HEX, we first ***convert our string using the web3.utils library***.

- Additionally, we save the transaction hash after it resolves into LocalStorage so we can display it on the frontend.

- To display the txHash item, we create a loading state using React's `useState` hook that changes to false, after the transaction is confirmed. Then we retrieve the updated LocalStorage txHash value to display it.

[**Visit this Explorer address**](https://explorer.testnet.immutable.com/tx/0xff5f4becfa38bcbf5fca514064842e42ba9d2fbde9ea2e9975b15a0d8d85322d) to view a message I sent earlier from the deployed app. You can find the specific string message under "View Details," then "Raw Input," and set it to "UTF-8" to see the message.

my message says: `chel is so amazing` 😅

![txhash-confirmed-transaction](https://drive.google.com/uc?export=view&id=1ADeJpoq-9iUAeGNV-A2PX2eRk539hrZE)



# Guide Roundup
And we're pretty much done with this Guide, created to make the integration steps of Immutable Passport as smooth as possible. 

I hope you now have a good grasp of how Passport simplifies authentication, identity, and transactions in a Web3 environment, accomplishing it in a user-friendly manner, ***akin to Web2 gaming login systems***.

Thanks for taking the time to read, I hope the information provided will empower you to create more advanced applications backed by Passport on Immutable zkEVM N' Good luck with your Web3 projects!


> Written by [Chelsea Koby](https://github.com/chel-007).
> 
> Courtesy of the Bounty provided by Stackup X Immutable zkEVM. [Access here!](https://app.stackup.dev/bounty/immutable-bounty-2-immutable-passport-integration)
