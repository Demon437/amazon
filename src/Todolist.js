import React, { useState } from "react";

function Todolist() {
  const [activity, setActivity] = useState("");
  const [listdata, setlistData] = useState([]);

  function addAcivity() {
    // setlistData([...listdata, activity]);
    // console.log(listdata);
    setlistData((listdata) => {
      const update = [...listdata, activity];
      setActivity("");
      console.log(update);
      return update;
    });
  }

  function removeactivity(i) {
    const updatedlist = listdata.filter((elem, id) => {
      return i != id;
    });
    setlistData(updatedlist);
  }
  function RemoveAll() {
    setlistData([]);
  }
  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Enter Your Input"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addAcivity}>Add</button>
        <p className="List-heading">Here is Your List :{")"}</p>
        {listdata != [] &&
          listdata.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData"> {data}</div>
                  <div className="btn-position">
                    <button onClick={() => removeactivity(i)}>Remove(-)</button>
                  </div>
                </p>
              </>
            );
          })}
        {listdata.length >= 1 && (
          <button onClick={RemoveAll}>Remove All</button>
        )}
      </div>
    </>
  );
}

export default Todolist;
