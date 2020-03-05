import React from 'react';
import Container from '../Container/Container';
import {faq} from '../../data/dataStore';
import Hero from '../Hero/Hero';

class FAQ extends React.Component {

  render(){
    return(
      <Container>
        <Hero titleText={faq.title} image={faq.image}/>
        <p>{faq.text}</p>  
      </Container>
        
    );
  }
}


export default FAQ;