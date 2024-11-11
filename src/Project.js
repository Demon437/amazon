import { useEffect, useState } from "react";
import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
function Project() {
  const [apidata, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1").then((result) => {
      result.json().then((data) => {
        setData(Array.isArray(data) ? data : [data]);
      });
    });
  }, []);
  return (
    <div>
      <MDBRow
        className="row-cols-1 row-cols-md-3 g-4"
        style={{ margin: "10px" }}
      >
        {apidata.map((item) => (
          <MDBCol>
            <MDBCard className="h-100">
              <center>
                <MDBCardImage
                  style={{ width: "200px", height: "200px" }}
                  src={item.image}
                  alt="..."
                  position="top"
                />
              </center>
              <MDBCardBody>
                <MDBCardTitle style={{ color: "darkgray" }}>
                  Card title
                </MDBCardTitle>
                {item.price * 80}Rs
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>{" "}
    </div>
  );
}
export default Project;
