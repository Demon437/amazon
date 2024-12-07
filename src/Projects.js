import React, { useEffect, useState } from "react";

function Projects() {
  const data = { name: "", email: "", password: "" };

  const [inputData, setInputData] = useState(data);

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Registered");
  }, [flag]);
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  function handlesubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All input not fill  ");
    } else {
      setFlag(true);
    }
  }
  return (
    <>
      <pre>
        {flag ? (
          <h2 className="ui-define">
            Hello {inputData.name},You have Registered Successfully
          </h2>
        ) : (
          ""
        )}
      </pre>

      <form className="container" onSubmit={handlesubmit}>
        <div className="header">
          <h1>Registration Form</h1>
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={inputData.name}
            onChange={handleData}
            name="name"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Your email"
            value={inputData.email}
            onChange={handleData}
            name="email"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Your password"
            value={inputData.password}
            onChange={handleData}
            name="password"
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Projects;
