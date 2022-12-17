import React from 'react';
import { Button } from 'semantic-ui-react';
import '../App.css';
import '../Img/arya.jpg';

const Contacts = () => {

  return (
    <>
    <img className='background' src={require('../Img/background.JPG')} alt='background1'/> 
   <div className="App">


   <h1 className='intro'>EMERGENCY CONTACTS</h1>

   <p style={{fontFamily:'Pt Sans', fontSize:'17px', fontWeight:'bold'}}>Please call if something bad happened to me and my parents, or if my parents won’t pick up your calls. </p>
    <div style={{paddingBottom: '20px'}}>
     
      <Button className='butt' basic color='black' href="tel:3854149814">
        <h3 className='parent'>Kat Winegar

          <b className='number2'> 
            (385)414-9814
          </b>
        </h3>
        <p className='subParent'>Daughter</p>

      </Button>
    </div>
    <div style={{paddingBottom: '20px'}}>
     
      <Button className='butt' basic color='black' href='tel:8018950191'>
        <h3 className='parent'>Nicc Winegar

          <b className='number2' style={{color:'#915858'}}> 
            (801)895-0191
          </b>
        </h3>
        <p className='subParent'>Son</p>

      </Button>
    </div>
    <div style={{paddingBottom: '20px'}}>
      
     
    <Button className='butt' basic color='black' href="tel:8017553015">
        <h3 className='parent'>Sean Schmidt

          <b className='number2' style={{color:'#915858'}}> 
            (801)755-3015
          </b>
        </h3>
        <p className='subParent'>Kat's Partner</p>

      </Button>
    </div>
    <div style={{paddingBottom: '20px'}}>
     
      <Button className='butt' basic color='black' href="tel:8012597676">
        <h3 className='parent'>Tammy Soloman

          <b className='number2' style={{color:'#915858'}}> 
            (801)259-7676
          </b>
        </h3>
        <p className='subParent'>Neighbor</p>

      </Button>
    </div>
    <div style={{paddingBottom: '20px'}}>
     
      <Button className='butt' basic color='black' href="tel:8018701200">
        <h3 className='parent'>Brad Thompson

          <b className='number2' style={{color:'#915858'}}> 
            (801)870-1200
          </b>
        </h3>
        <p className='subParent'>Neighbor</p>

      </Button>
    </div>

      
    </div>
    </>
  );
}

export default Contacts;
