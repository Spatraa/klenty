
function Login() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src="https://tse3.mm.bing.net/th?id=OIP.NS4S_E0XdIyUh7E6sw3_RwHaDm&pid=Api&P=0" alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             {/* <img src={email} alt="email" className="email"/> */}
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             {/* <img src={pass} alt="pass" className="email"/> */}
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button onClick>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Login;