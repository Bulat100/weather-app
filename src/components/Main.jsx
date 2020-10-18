import React, { useState } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { uniqueId } from 'lodash';
import WeatherData from './WeatherData';
import Footer from './Footer';
import 'bootswatch/dist/lux/bootstrap.css';

const Main = () => {
  const [currentCityIndex, setCurrentCity] = useState(0);
  const cities = ['Казань', 'Зеленодольск', 'Бугульма', 'Арск', 'Альметьевск', 'Ульяновск'];
  const buttons = cities.map((place, index) => (
    <Nav.Item
      key={uniqueId()}
      onClick={() => setCurrentCity(index)}
    >
      <strong>{place}</strong>
    </Nav.Item>
  ));
  const currentCity = cities[currentCityIndex];

  return (
    <div className="wrapper">
      <h2>Простое погодное приложение на React hooks</h2>
      <Row>
        <Col md={5} sm={5}>
          <Nav
            variant="pills"
            className="flex-column"
            activeKey={currentCityIndex}
            onSelect={(i) => setCurrentCity(i)}
          >
            <h3>Выберите место:</h3>
            {buttons}
          </Nav>
        </Col>
        <Col md={6} sm={6}>
          <WeatherData city={currentCity} />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
export default Main;
