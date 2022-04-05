import React, { Component } from 'react'
import OnLand from './components/OnLand'
import OnSea from './components/OnSea'
import OnSky from './components/OnSky'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
     animalTypeChoice: '',
     animalsNum:3
    }
  }

  renderAnimalsArr(){
    let animalType = document.getElementsByName('animalType'); // NodeList(3)
    console.log(animalType)
    for (const x of animalType) 
      if(x.checked == true){
        this.setState({ animalTypeChoice: x.value })
        break;
      }  
    
    let animalsNum = document.getElementById('animalsNum').value;
    this.setState({animalsNum: animalsNum});
  }

  renderComponent(){
    return(
      this.state.animalTypeChoice == 'onLand' ? <OnLand animalsNum={this.state.animalsNum}/>: 
      this.state.animalTypeChoice == 'onSea' ? <OnSea/>:
      this.state.animalTypeChoice == 'onSky' ? <OnSky/>: null
    )
  }


  render() {

    return (
      <div className='container'>
        <h1>Welcome to the zoo</h1>
        <hr/>

        <h4>Select your favorite area</h4>

        <div className="input-group-text">
        <input type='radio' value='onLand' name='animalType' className='form-check-input mt-0'/>
        <label>On land</label>
        </div>

        <div className="input-group-text">
        <input type='radio' value='onSea' name='animalType' className='form-check-input mt-0'/>
        <label>In the sea</label>
        </div>

        <div className="input-group-text">
        <input type='radio' value='onSky' name='animalType' className='form-check-input mt-0'/>
        <label>In the sky</label>
        </div>

        <h4>How many animals?</h4>
        <div className="input-group-text">
        <input type='number' id='animalsNum' className="form-control" />
        </div>

        <div className="input-group-text">
          <button onClick={()=>this.renderAnimalsArr()} className='btn btn-success'>Submit</button>
        </div>


        {this.renderComponent()}


      </div>
    )
  }
}
