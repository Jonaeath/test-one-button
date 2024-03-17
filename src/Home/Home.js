import React, { useEffect, useState } from 'react';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import { Col, Row } from 'react-bootstrap';

const Home = () => {
    const [data, setData] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    // Simulating fetching data from API
    fetch('ecommerce.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
    return (
        <div>
          <Row className='container'>
            <Col sm={2}>
            <PageOne onClick={setFilter}/>
            </Col>
            <Col sm={10}>
            <PageTwo data={data} filter={filter} onClick={setFilter} />
            </Col>
          </Row>
        </div>
    );
};

export default Home;