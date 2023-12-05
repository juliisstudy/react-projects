import {useState} from 'react';
import Form from './Form';
export default function FormII() {
    const [person, setPerson] = useState({
      firstName: "Juli",
      lastName: "Li",
      email: "123@gmail.com",
    });
  
    function handleFirstNameChange(e) {
      setPerson({
        ...person,
        firstName: e.target.value,
      });
    }
  
    function handleLastNameChange(e) {
      setPerson({
        ...person,
        lastName: e.target.value,
      });
    }
  
    function handleEmailChange(e) {
      setPerson({
        ...person,
        email: e.target.value,
      });
    }
  
    return (
      <>
        <div className="Form">
            <h3>Contact Form</h3>
            <div className="input-text">



            <div className="input-group mb-3">
                
  <div className="input-group-prepend">
    <span className="input-group-text" >First Name</span>
  </div>
  <input type="text" className="form-control form-input" placeholder="FirstName" aria-label="FirstName" value={person.firstName} onChange={handleFirstNameChange} />


  <div className="input-group-prepend">
    <span className="input-group-text" >Last Name</span>
  </div>
  <input type="text" className="form-control form-input" placeholder="LastName" aria-label="LastName" value={person.lastName} onChange={handleLastNameChange} />

  <div className="input-group-prepend">
    <span className="input-group-text" >Email</span>
  </div>
  <input type="text" className="form-control form-input" placeholder="Email" aria-label="Email" value={person.email} onChange={handleEmailChange} />

</div>
         
         
          <p className="font-weight-bold"> <b> Input value:  &nbsp;
            {person.firstName} {person.lastName} {person.email}</b>
          </p>

          
          </div>
        </div>
       
       <Form />
      </>
    );
  }
  