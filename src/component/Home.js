import React from 'react';
import { Grid } from 'semantic-ui-react';
import '../App.css';
import '../Img/roku.jpg';

const Home = () => {
  return (
    <>
    <img className='background' src={require('../Img/background.JPG')} alt='background'/> 
   <div className="App">


        <h1 className='intro'>Hi, I'M ROKU</h1>
        <h3 className='subhead'>If you found me, I am lost!
          <br/>
         Please contact my parents.</h3>
         
    <div className='wrap'>

      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column width={8}>
          <h4 className='number'>MAMMA
        <br/>
        | <a href="tel:8019491009" style={{color:'#915858', fontSize:'18px'}}> 
           (801) 949-1009
        </a> | 
        </h4>
        </Grid.Column>
        <Grid.Column width={8}>
        <h4 className='number'>PAPI
          <br/>
        | <a href="tel:8016359133" style={{color:'#915858', fontSize:'18px'}}> 
          (801) 635-9133
        </a> |
        </h4>
          </Grid.Column>
        </Grid.Row>


        
        </Grid>
        </div>
        <div>
      <img className='photo' src={require('../Img/roku.jpg')} alt='arya'/>
      </div>
      <h3 className='number'>FOR EMERGENCIES, PLEASE CONTACT</h3>
      <h4 className='number'>
      <a href='https://www.nvetcare.com/' style={{color:'#915858'}}>Neighborhood Vet Care </a>|
        <a href='tel:(801)281-8387' style={{color:'#915858'}}>
          +1 (801)281-8387 
        </a>
      </h4>

      
    </div>
    </>
  );
}

export default Home;
