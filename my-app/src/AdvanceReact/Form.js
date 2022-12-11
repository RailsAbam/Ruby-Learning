import { useState } from "react";


const PasswordErrorMessage = () => {
    if(Password <= 8 && Password >= 10)
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    return true;
  };

  const clearForm = () => {
    // Implement this function
  };

  const handleSubmit = () => {
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input id = "first name" type = "text" placeholder="First name" value={firstName} onChange = {e => setFirstName(e.target.value)} />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input id = "Last name" type= "text" placeholder="Last name" value={lastName} onChange = {e => setLastName(e.target.value)}  />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input id = "Email" type = "email" placeholder="Email address"  value={email} onChange = {e => setEmail(e.target.value)}/>
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input id = "Password" {...PasswordErrorMessage()}  type="password" placeholder="Password" value={password} onChange = {e => setPassword(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
