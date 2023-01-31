import React from 'react'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function RestCard({data}) {
  return (
    <Col className='p-3' sm={12} md={6} lg={4} xl={3} >
    <Link style={{textDecoration:"none"}} to={`view-restaurent/${data.id}`}>
      
        <Container>
          <Card className='mt-4 text-center p-2' style={{ width: '100%' }}>
          <Card.Img className='p-2 rounded-pill' variant="top" src={data.photograph} />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
            {data.neighborhood}
            </Card.Text>
            
          </Card.Body>
        </Card>
        </Container>
      
    </Link>
    </Col>
  )
}

export default RestCard