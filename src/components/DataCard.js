import React from "react";
import { Card, Col } from "react-bootstrap";

const DataCard = ({ data }) => {
  return (
    <div>
      <Col>
        <Card className="bg-secondary bg-gradient text-white">
        
          <Card.Img className="p-2" variant="top" src={data?.links?.mission_patch} />
          <Card.Body>
            {
              data.launch_success? <span className="badge bg-success position-absolute top-0 translate-middle">Success</span>:<span className="badge position-absolute top-0 translate-middle bg-danger">Failure</span>
            }
            <Card.Title>Mission Name: {data?.mission_name}</Card.Title>
            
            <span>Rocket Name: {data?.rocket?.rocket_name}</span>
            <Card.Text>

             <div className="d-flex justify-content-between">
             <p><b>Launch Year:</b> {data?.launch_year} </p>  
             <p><b>Orbit:</b> {data?.rocket?.second_stage?.payloads[0].orbit} </p> 
               </div> 
              {data?.details?.substr(0, 50)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default DataCard;
