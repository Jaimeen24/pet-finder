import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";
import Axios from "axios";
import React from "react";

function App() {
  const petData = {
    data: {
      petProfile: {
        petId: "b74f7332-c0d1-41a4-a505-7c3af28df573",
        petName: "Hulk 1233213",
        petBreed: "doberman",
        age: 30,
        petCategory: "Dog",
        petQrImage:
          "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",
        gender: "male",
        bio: "dfjkadjsfjsln. dfkdf fkadj fjadskfjdafl",
        petHeightInCms: 123.0,
        weightInLbs: 49.0,
        petIdentificationMarks: null,
        allergies: "None",
        imageUrl:
          "https://peradar.s3.us-east-2.amazonaws.com/2023-04-06T00%3A21%3A19.943460_543261.jpg",
      },
    },
    status: 202,
    message: "ACCEPTED",
  };

  const ApiData = Axios({
    method: "get",
    url: "http://bit.ly/2mTM3nY",
    responseType: "stream",
  }).then((response) => response);

  console.log(ApiData);

  return (
    <Container className="p-3 d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          className="bg-light"
          src={petData.data.petProfile.imageUrl}
        />
        <Card.Body className="bg-light">
          <div className="d-flex justify-content-between shadow p-3 mb-2 bg-body border-light rounded-3">
            <div className="justify-content-center">
              <div className="justify-content-center">
                {petData.data.petProfile.petName}
              </div>
              <div
                className="justify-content-center"
                style={{ fontSize: "12px" }}
              >
                {petData.data.petProfile.petCategory}
              </div>
            </div>

            <div className="justify-content-center">
              <div className="justify-content-center">
                {petData.data.petProfile.gender}
              </div>
              <div
                className="justify-content-center"
                style={{ fontSize: "12px" }}
              >
                {petData.data.petProfile.age} years old
              </div>
            </div>
          </div>
          <Card.Title className="d-flex p-3 justify-content-center">
            Let's connects to owner
          </Card.Title>
          <div className="d-grid gap-2 col-8 mx-auto">
            <Button className="btn border-light rounded-pill" style={{backgroundColor:'#F57327'}}>
              Call pet owner
            </Button>
            <Button className="btn border-light rounded-pill" style={{backgroundColor:'#F57327'}}>
              Near by facility
            </Button>
            <Button className="btn border-light rounded-pill" style={{backgroundColor:'#F57327'}}>
              Pet history
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
