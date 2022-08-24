import "./details.css";

const Details = () => {
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
          <input type="text" placeholder="Name" />
          <input type="Mobile" placeholder="Mobile" />
        </div>
        <div className="footer">
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
