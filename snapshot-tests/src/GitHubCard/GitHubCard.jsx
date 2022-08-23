import React from "react"
import Card from "react-bootstrap/Card"
import JtruDat from './JtruDat.jpg'

export let GitHubCard = ()=> {
  return (
      <div className="card">
        <Card style={{ width: "200px"}}>
       
        <Card.Img variant="top" src={JtruDat} />
        
        <Card.Body>
            <Card.Title>github user : JTRUDAT</Card.Title>
            <Card.Text>
            Life long learner in the world of enlightenment
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

