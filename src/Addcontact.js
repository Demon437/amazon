import React, { useState } from "react";

function Addcontact(addContact) {
  const [contactdata, setContactData] = useState({ name: "", email: "" });
  function handlechange(e) {
    if (e.target.name === "name") {
      setContactData({ ...contactdata, name: e.target.value });
    } else {
      setContactData({ ...contactdata, email: e.target.value });
    }
  }

  const handleAdd = () => {
    if (contactdata.name === "" || contactdata.email === "") {
      alert("Please fill all the details ");
      return;
    }
    addContact(contactdata);
  };

  return (
    <div className="formHeader">
      <div className="Add-contact">Add Contact</div>

      <form>
        <label>Name:</label> <br />
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={contactdata.name}
          onChange={handlechange}
        />{" "}
        <br />
        <label>Email:</label> <br />
        <input
          type="text"
          placeholder="Enter Your email"
          name="email"
          value={contactdata.email}
          onChange={handlechange}
        />
      </form>

      <button className="button" onClick={handleAdd}>
        Add Contact
      </button>
    </div>
  );
}

export default Addcontact;



