import '../StyleComponent/Login.scss';
import '../StyleComponent/Register.scss';
import {Link} from 'react-router-dom';
 import {useState} from 'react';
 import { validateEmail } from "../utils"; 

function Login(){  
const PasswordErrorMessage  =() =>{
    if(Password <= 8)
    return(
        <p className='FieldError'>Password should have at least 8 characters</p>
    );
};

const clearForm =() =>{
    setEmail("")
    setPassword({value: "", isTouched:false})

}

     const [ Password, setPassword] = useState({ value: "",
     isTouched: false});
     const [email, setEmail] = useState('')

  
   
     const getIsFormValid = () => { 
        return ( 
          email && 
          validateEmail(email) && 
          Password.value.length >= 8
        ); 
      }; 

     const handleSubmit = (e) =>{
        e.preventDefault()
        clearForm();
}

    return(
        <div>
            <form onSubmit={handleSubmit}  className = 'form-container'>              
                <div className='container-login register'>
                <div className="heading-text">
                    <h4 className = "login-login text">Create An account</h4>
                    <span className = "welcome-message text"> Welcome to the future of power backups.</span>
                        <span>Login to your account </span>
                </div> 
                      
                    <div className='row'>
                        <div className='col form-group'>
                            <label htmlFor='email'>Email</label>
                            <input id = 'email' type='email' required = {true} className = 'form-control input-fill' placeholder = 'email' value = {email.value} onChange = {e => setEmail(e.target.value)}/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col form-group'>
                            <label htmlFor='password'>Password</label>
                            <input id = 'password' type='password' required ={true}  className = 'form-control input-fill'  placeholder = 'Password' 
                            value={Password.value} onChange = {e => setPassword({...Password, value:e.target.value})} 
                            onBlur ={() =>{setPassword({...Password, isTouched:true})}}/>  {Password.isTouched && Password.value.length < 8 ? ( 
                                <PasswordErrorMessage /> 
                              ) : null} 
                
                        </div>
                    </div>
                    <div className='row center'>
                        <div className='col form-group'>
                        <button disabled = {!getIsFormValid()}  className="button-log-google btn btn-outline-success butting btn-secondary" type="submit">Login</button>
                        </div>
                    </div>

                 <div className = "text-or">
                    <h5 className ="or-move"><span className = "or">Or</span> </h5>
                    </div>

                    <div className = "shift-google">
                        <Link className=" button-log-google btn btn-outline-success butting btn-secondary">login with Google</Link>
                    </div>


                    <div className = "shift-facebook">
                     <Link className=" button-log-google btn btn-outline-success butting btn-secondary">login with facebook</Link>
                   </div>
                </div>

                <div className = "link-account">
                         <span  className="links">Don't have an Account</span><Link to ="/register" className='links reg'>Register</Link>
                </div>

            </form>
    </div>
       
    );
};

export default Login;


