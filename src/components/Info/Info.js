import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {info} from '../../data/dataStore';


const Info = () => (

  <Container>
    <Hero titleText={info.title} image={info.image}/>
    <p>{info.text}</p>  
  </Container>
);

export default Info;