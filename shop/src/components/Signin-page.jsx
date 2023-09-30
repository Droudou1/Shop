import { useEffect, useState } from "react";
import "../css/Signin.css";
import {Link,useNavigate} from "react-router-dom"

export default function Signin({handlepage}) {
  const [userinformation,setuserinformation] = useState({
    email:'',
    password:'',
    cpassword:'',
    country:'',
    phoneNumber:'',
    firstname:'',
    lastname:'',
    checked: false
  });
  const [togglepass,settogglepass] = useState(false);
  const [togglecpass,settogglecpass] = useState(false);

  const [accountpage,setaccountpage] = useState(false);

  const [errors,seterrors] = useState({
    fill: false,
    pass:false,
    terms: false,
    short: false,
  });
  const navigate = useNavigate();

  function handleconfirmonenter(event){
    if(event.key === 'Enter'){
      handleconfirm();
    };

  };

  useEffect(() => {
    function handleEscape(event){
      if(event.key === "Escape"){
        setaccountpage(false);
        setTimeout(() => {
          navigate('/');
        }, 400);

      };
    };
    document.addEventListener('keydown',handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  },[])


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

  function handleconfirm(){
    
    if(userinformation.password && userinformation.email && userinformation.cpassword && userinformation.country && userinformation.firstname && userinformation.lastname){
      if(userinformation.checked ){
        if(userinformation.password.length >= 6){
          if(userinformation.password === userinformation.cpassword){
            setaccountpage(true);
            setuserinformation({
              email:'',
              password:'',
              cpassword:'',
              country:'',
              phoneNumber:'',
              firstname:'',
              lastname:'',
              checked: false
            })
          }else{
            seterrorsfun('pass');
          };
        }else{
          seterrorsfun('short')
        };
      }else{
        seterrorsfun('terms');
      };
    }else{
      seterrorsfun('fill');
    };
    
  };
  function handleexit(){
    setaccountpage(false);
  };

  const styles = {
    opacity: accountpage ? '0.5' : '1',
    pointerEvents: accountpage ? 'none' : 'auto'
  }

  function handletoggle(id){
    if(id === 'pass'){
      settogglepass((prevpass) => !prevpass);
    }else{
      settogglecpass((prevcpass) => !prevcpass);
    };
  };


  function handleinputs(event){
    const {name,value,checked,type} = event.target;
    setuserinformation((previnfo) => {
      if(type === 'checkbox'){
        return(
          {
            ...previnfo,
            [name]: checked
          }
        );
      }else{
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
    }else if(errors.terms){
      return <p className="error-txt">You Must Agree to the Terms and Conditions</p>
    }else if(errors.short === true){
      return <p className='error-txt'>Password Must Contain Atleast 6 Caracters</p>
    }else if(errors.pass){
      return <p className="error-txt">Passwords Don't Match</p>
    };
  }; 

  return(
    <div className="signin-wrapper">
      <div style={styles} className="Signin-card">
        <Link to='/'>
          <i className="fa-solid fa-house back-home"></i>
        </Link>
       
        <h1 className='signin-title'>Sign In</h1>
        <span>Already Have an Account? <Link to='/login'><span className='login-link'>Log In</span></Link> </span>
        <div className='inputs-container'>
          <span className='labels email '>Email</span>
          <span className='labels password ' >Password</span>
          <span className='labels confirm-password'>Confirm Password</span>
          <span className='labels country'>Country</span>
          <span className='labels pnumber'>Phone Number</span>
          <span className='labels  first-name' >First Name</span>
          <span className='labels last-name'>Last Name</span>
          <div className="input-container"> 
            <input onKeyDown={handleconfirmonenter} onChange={handleinputs} name='email' value={userinformation.email} className="input" type="email"></input>
            <span className={userinformation.email ? 'placeholder hidden' : 'placeholder'}>example@gmail.com</span></div>
          <div className="input-container">  
            <i onClick={() => {handletoggle('pass')}} className={`fa-solid fa-eye${togglepass ? '' :'-slash'} passicon`}></i>
            <input 
            onKeyDown={handleconfirmonenter}
            onChange={handleinputs}
            name='password' value={userinformation.password} 
            className="input"  type={togglepass ? 'email' : 'password'} >
              </input>
              <span className={userinformation.password ? 'placeholder hidden' : 'placeholder'}>Password</span></div>
          <div className="input-container">
            <i onClick={() => {handletoggle('cpass')}} className={`fa-solid fa-eye${togglecpass ? '' :'-slash'} passicon`}></i>
            <input 
            onKeyDown={handleconfirmonenter}
            onChange={handleinputs}
            name='cpassword' value={userinformation.cpassword}
            className="input"  type={togglecpass ? 'email' : 'password'} ></input>
            <span className={userinformation.cpassword ? 'placeholder hidden' : 'placeholder'}>Confirm Password</span></div>
          <div className="inputs-grid">
            <div className="input-container"> 
              <input onKeyDown={handleconfirmonenter} onChange={handleinputs} name='country' value={userinformation.country} className='input'  type='text'></input>
              <span className={userinformation.country ? 'placeholder hidden' : 'placeholder'}>Country</span>
            </div>
            <div className="input-container">
              <input onKeyDown={handleconfirmonenter} onChange={handleinputs} name='phoneNumber' value={userinformation.phoneNumber} className='input' type='text'></input>
              <span className={userinformation.phoneNumber ? 'placeholder hidden' : 'placeholder'}>Phone Number</span>
            </div>
            <div className="input-container"> 
              <input onKeyDown={handleconfirmonenter} onChange={handleinputs} name='firstname' value={userinformation.firstname} className='input' type='text'></input>
              <span className={userinformation.firstname ? 'placeholder hidden' : 'placeholder'}>First Name</span>
            </div>
            <div className="input-container">   
              <input onKeyDown={handleconfirmonenter} onChange={handleinputs} name='lastname' value={userinformation.lastname} className='input' type='text'></input>
              <span className={userinformation.lastname ? 'placeholder hidden' : 'placeholder'}>Last Name</span>
            </div>
          </div>
        </div>
        <label className="agree-label">
          <input onChange={handleinputs} name="checked" checked={userinformation.checked} className="checkbox" type="checkbox"></input>
          <p className="agreement">I agree to the terms and conditions.</p>
        </label>
        <button onClick={handleconfirm} className="confirm-btn">Confirm</button>
        {error()}
        
       
      </div>
      {accountpage && 
      <div className="account-created">
        <Link to='/'>
          <span onClick={handleexit} className="exit-btn">X</span>
        </Link>
        <h2 className="title2">Account Created Succesfully</h2>
        <p className='parag'>{`${userinformation.firstname} ${userinformation.lastname}`}. Your Account has been created succesfuly</p>
        <Link to='/'>
          <button onClick={() => {setaccountpage(false)}} className="continue-btn">Continue</button>
        </Link>      
      </div>}
      
    </div>
  );
};