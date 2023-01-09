import React from "react";
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, first_name, message } = e.target.elements;
    let data = {
      name: name.value,
      email: email.value,
      first_name: first_name.value,
      message: message.value,
    };
    console.log(data);
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-3"> Contact Form </h2>
      <form form form form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="first_name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="first_name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Name
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Name
          </label>
          <input className="form-control" type="text" id="message" required />
        </div>
        <div className="">
          <button className="btn btn-primary">Previous</button>
          <button className="btn btn-primary" type="submit">
            Validate
          </button>
          <button className="btn btn-primary">Next</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
