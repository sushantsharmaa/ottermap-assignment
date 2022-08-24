import "./details.css";
import { useState, useEffect } from "react";

const Details = ({ setUserData }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = () => {
    setFormErrors(validateFormData(formData));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setUserData(formData);
    }
  }, [formErrors]);

  const validateFormData = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile No. is required!";
    }
    return errors;
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
          <form action=""></form>
          <input
            name="name"
            type="text"
            placeholder="Name"
            autoComplete="off"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="mobile"
            type="tel"
            placeholder="Mobile"
            autoComplete="off"
            value={formData.mobile}
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
