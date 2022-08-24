import "./details.css";
import { useState } from "react";

const Details = ({ setUserData }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = () => {
    if (formData.name === "" || formData.mobile === "") {
      alert("Wrong Credentials!");
    }
    setUserData(formData);
  };

  return (
    <div>
      <div className="form-container">
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="header">
          <h1>ENTER DETAILS</h1>
        </div>
        <div className="body">
          <input
            name="name"
            type="text"
            placeholder="Name"
            autoComplete="off"
            onChange={handleChange}
          />
          <input
            name="mobile"
            type="tel"
            placeholder="Mobile"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="footer">
          <button onClick={handleClick}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
