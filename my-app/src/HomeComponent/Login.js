import '../StyleComponent/Login.scss';

// import {useState} from 'react';
function Login(){  

    // const [form, setForm] = useState({
    //     firstname:"",  lastName: '', Email: '', Password: ''
    // });
    return(
        <div>

            <div className = "form-container">
                <div className='container-login register'>
                    <h4 className='login-login text'>Create An Account</h4>
                    <p className = 'welcome-message text'>Welcome to your ons stop for power backups</p>
                      <div className='row'>
                        <div className='col form-group'>
                            <label>firstname</label>
                            <input type='text' className = 'form-control input-fill' id ='control' placeholder = 'firstname'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col form-group'>
                            <label>lastName</label>
                            <input type='text' className = 'form-control input-fill' id ='control' placeholder = 'lastname'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col form-group'>
                            <label>Email</label>
                            <input type='email' className = 'form-control input-fill' id ='control' placeholder = 'email'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col form-group'>
                            <label>Phone</label>
                            <input type='number' className = 'form-control input-fill' id ='control' placeholder = 'phone'/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col form-group'>
                            <label>state</label>
                            <input type='text' className = 'form-control input-fill' id ='control' placeholder = 'state'/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col form-group'>
                            <label>Local-Govt</label>
                            <input type='text' className = 'form-control input-fill' id ='control' placeholder = 'local-govt'/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col form-group'>
                            <label>Password</label>
                            <input type='password' className = 'form-control input-fill' id ='control' placeholder = 'password'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col form-group'>
                            <label>confirm password</label>
                            <input type='password' className = 'form-control input-fill' id ='control' placeholder = 'confirm password'/>
                        </div>
                    </div>
      
                </div>

            </div>
    </div>
       
    );
};

export default Login;

