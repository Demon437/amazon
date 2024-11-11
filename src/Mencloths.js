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
function Mencloths() {
  const [apidata, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing").then(
      (result) => {
        //   console.log(result);
        result.json().then((data) => {
          setData(data);
          // console.log(data);
        });
      }
    );
  }, []);
  return (
    <div>
      <MDBRow
        className="row-cols-1 row-cols-md-3 g-4"
        style={{ margin: "10px" }}
      >
        {apidata.map((item) => (
          <MDBCol>
            <MDBCard>
              <center>
                <MDBCardImage
                  style={{ width: "200px", height: "200px" }}
                  src={item.image}
                  alt="..."
                  position="top"
                />
              </center>
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardTitle style={{ fontWeight: "bold", color: "darkblue" }}>
                  {item.category}
                </MDBCardTitle>
                <MDBCardTitle style={{ color: "green" }}>
                  {item.price * 60}Rs
                </MDBCardTitle>
                <MDBCardText>{item.description}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>{" "}
    </div>
  );
}
export default Mencloths;
