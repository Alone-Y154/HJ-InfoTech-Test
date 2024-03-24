import { useState } from 'react'
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Forms = ({registrationDetails}) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    branch: "",
    confirmation: ""
  })

  const navigate = useNavigate();

  const inputData = (value, type) => {
    setData(prevState => ({
      ...prevState,
      [type]: value
    }))
  }


  const dataValidation = (e) => {
    e.preventDefault();
    const { username, email, phone, branch, confirmation } = data;

    if (username && email && phone && branch && confirmation) {
      navigate("/registration");
      registrationDetails(data)
    } else {
      alert("Please fill in all fields.");
      document.querySelectorAll('.input input , .input select').forEach(input => {
        if (!input.value) {
          input.classList.add('input-error');
        } else {
          input.classList.remove('input-error');
        }
      });
    }
  }

  console.log("data", data)
  return (

    <form className='form-wrapper' onSubmit={dataValidation}>
      <div className='input'>
        <label>UserName:</label>
        <input type='text' className='' value={data.username} onChange={(e) => inputData(e.target.value, "username")} />
      </div>
      <div className='input'>
        <label>Email:</label>
        <input type='text' value={data.email} onChange={(e) => inputData(e.target.value, "email")} />
      </div>
      <div className='input'>
        <label>Phone:</label>
        <input type='number' value={data.phone} onChange={(e) => inputData(e.target.value, "phone")} />
      </div>
      <div className='input'>
        <label>Branch:</label>
        <select value={data.branch} onChange={(e) => inputData(e.target.value, "branch")}>
          <option></option>
          <option>ECE</option>
          <option>CSE</option>
          <option>EEE</option>
        </select>
      </div>
      <div className='input input-radio'>
        <label>Confirmation:</label>
        <div>
          <label>Yes:</label>
          <input type='radio' value="yes" checked={data.confirmation === "yes"} onChange={(e) => inputData(e.target.value, "confirmation")} />
          <label>No:</label>
          <input type='radio' value="no" checked={data.confirmation === "no"} onChange={(e) => inputData(e.target.value, "confirmation")} />
        </div>
      </div>
      <button className='btn' type='submit'>register</button>
    </form>


  )
}

export default Forms