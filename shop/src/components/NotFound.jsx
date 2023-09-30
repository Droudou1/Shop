import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound(){
  const navigate = useNavigate();
  useEffect(() => {
    const timeout =  setTimeout(() => {
      navigate('/');
    }, 1000);
    return() => clearTimeout(timeout);
  },[navigate])
 
  return(
    <div className='not-found'>
      <h1>Page Is Not Found!!</h1>
    </div>
  );
};