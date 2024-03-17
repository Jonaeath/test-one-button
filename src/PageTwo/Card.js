import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const QCard = ({ item }) => {
  return (
    <div style={{ width: '330px', height: '450px' }}>
      <Card style={{ width: '100%', height: '100%' }}>
        <div style={{ height: '50%' }}> {/* Adjusted to 50% */}
          <Card.Img 
            variant="top" 
            src={item.image} 
            style={{ 
              objectFit: 'cover', 
              width: '100%', 
              height: '100%' 
            }} 
          />
        </div>
        <Card.Body style={{ height: '50%' }}> {/* Adjusted to 50% */}
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.price}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QCard;
