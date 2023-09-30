import { useState } from "react";
import "../css/login.css";
import {Link,useNavigate} from 'react-router-dom';

export default function Login({adminacc,handleadmin}){
  const [userinformation,setuserinformation] = useState({
    username:'',
    password:'',
  });
  const [togglepass,settogglepass] = useState(false);

  const [errors,seterrors] = useState({
    fill: false,
  });

  function handlekeypress(event){
    if(event.key === 'Enter'){
      handlelogin();
    };
  }

  function seterrorsfun(name){
    seterrors((preverrors) => {
      return({...preverrors,[name]:true});
    })
    setTimeout(() => {
      seterrors((preverrors) => {
        return({...preverrors,[name]:false});
      })
    }, 2500);
  };
  const navigate = useNavigate();
  function handlelogin(){
    if(userinformation.username === adminacc.username && userinformation.password === adminacc.password){
      handleadmin();
      setTimeout(() => {
        navigate('/');
      }, 1000);
    
    }
    if(userinformation.password && userinformation.username){
      console.log('logged succesfully')
    }else{
      seterrorsfun('fill');
    };
    
  };


  function handletoggle(id){
    if(id === 'pass'){
      settogglepass((prevpass) => !prevpass);
    }else{
      settogglecpass((prevcpass) => !prevcpass);
    };
  };


  function handleinputs(event){
    const {name,value} = event.target;
    setuserinformation((previnfo) => {
      {
        return(
          {
            ...previnfo,
            [name]: value
          }
        );
      };
     
    });
  };

  const error = () => {
    if(errors.fill === true){
      return <p className="error-txt">You Must fill the form</p>
    }
  }; 

  return(
    <div className="login-wrapper">
      <div className="login-card">
        <Link to='/'>
          <i className="fa-solid fa-house back-home"></i>
        </Link>
        <h1 className='login-title'>Log in</h1>
        <span>Don't Have an Account? <Link to='/signin'><span className='Signin-link'>Sign In</span></Link></span>
        <div className='inputs-container'>
          <span className='labels username '>username</span>
          <span className='labels password ' >Password</span>
          <div className="input-container"> 
            <input onKeyDown={handlekeypress} onChange={handleinputs} name='username' value={userinformation.username} className="input" type="email"></input>
            <span className={userinformation.username ? 'placeholder hidden' : 'placeholder'}>Username</span></div>
          <div className="input-container">  
            <i onClick={() => {handletoggle('pass')}} className={`fa-solid fa-eye${togglepass ? '' :'-slash'} passicon`}></i>
            <input 
            onKeyDown={handlekeypress}
            onChange={handleinputs}
            name='password' value={userinformation.password} 
            className="input"  type={togglepass ? 'username' : 'password'} >
              </input>
              <span className={userinformation.password ? 'placeholder hidden' : 'placeholder'}>Password</span></div>
        </div> 
        <button onClick={handlelogin} className="login-btn">Log in</button>
        {error()}
        
       
      </div>
      
    </div>
  );
};