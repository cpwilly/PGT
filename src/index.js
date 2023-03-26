import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const YearDropdown = () => {
  let medFont = {fontSize: '30px', fontFamily: 'Comic Sans MS', color: 'lime'}

  return(
    <div>
      <label style={medFont}>
      Select Year:&nbsp;&nbsp;
      <select>
        <option value='First'>First</option>
        <option value='Second'>Second</option>
        <option value='Third'>Third</option>
        <option value='Fourth'>Fourth</option>
      </select>
      </label>
    </div>
  );
}

class Page extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bigFont: {fontSize: '60px', fontFamily: 'Comic Sans MS'}
    }

    this.toWingdings = this.toWingdings.bind(this);
  }
  
  toWingdings(){
    this.setState({
      bigFont: {fontSize: '60px', fontFamily: 'Wingdings'}
    });
  }

  render(){
    return(
      <div className='container-fluid'>
        <div className='col text-center'>
          <div className='row-lg-6 mb-5'>
            <br /><br />
            <h1 style={this.state.bigFont} onClick={this.toWingdings}>RateMyDorm</h1>
            <br /><br /><br /><br /><br />
            <YearDropdown />
          </div>
          <div className='row-lg-6'>
            <div className='row'>
              <div className='col-lg-3'>
                <div class = "form-group">
                  <h3>Community</h3>
                  <input type = "checkbox" id = "cdr"  name = "cdr" />
                  <label for = "cdr">&nbsp;&nbsp;Cedar Magnolia</label><br />
                  <input type = "checkbox" id = "clk"  name = "clk" /> 
                  <label for = "clk">&nbsp;&nbsp;Clarke</label><br />
                  <input type = "checkbox" id = "jnp"  name = "jnp" />
                  <label for = "jnp">&nbsp;&nbsp;Juniper</label><br /> 
                  <input type = "checkbox" id = "mst"  name = "mst" /> 
                  <label for = "mst">&nbsp;&nbsp;Mistletoe</label><br />
                  <input type = "checkbox" id = "crl"  name = "crl" /> 
                  <label for = "crl">&nbsp;&nbsp;Carlton Road</label><br />
                  <input type = "checkbox" id = "mry"  name = "mry" />
                  <label for = "mry">&nbsp;&nbsp;Murray Hill</label><br /> 
                  <input type = "checkbox" id = "tri"  name = "tri" /> 
                  <label for = "tri">&nbsp;&nbsp;Triangle Towers</label><br />
                  <input type = "checkbox" id = "vlg"  name = "vlg" /> 
                  <label for = "vlg">&nbsp;&nbsp;The Village</label><br />
                  <input type = "checkbox" id = "stj"  name = "stj" />
                  <label for = "stj">&nbsp;&nbsp;Stephanie Tubbs Jones</label><br /> 
                </div>
              </div>
              <div className='col-lg-3'>
                <div class = "form-group">
                  <h3>Number of Residents</h3>
                  <input type = "checkbox" id = "1"  name = "numres" />
                  <label for = "1">&nbsp;&nbsp;1</label><br />
                  <input type = "checkbox" id = "2"  name = "numres" />
                  <label for = "2">&nbsp;&nbsp;2</label><br />
                  <input type = "checkbox" id = "3"  name = "numres" />
                  <label for = "3">&nbsp;&nbsp;3</label><br />
                  <input type = "checkbox" id = "4"  name = "numres" />
                  <label for = "4">&nbsp;&nbsp;4</label><br />
                  <input type = "checkbox" id = "5"  name = "numres" />
                  <label for = "5">&nbsp;&nbsp;5</label><br />
                  <input type = "checkbox" id = "6"  name = "numres" />
                  <label for = "6">&nbsp;&nbsp;6</label><br />
                  <input type = "checkbox" id = "7"  name = "numres" />
                  <label for = "7">&nbsp;&nbsp;7</label><br />
                  <input type = "checkbox" id = "8"  name = "numres" />
                  <label for = "8">&nbsp;&nbsp;8</label><br />
                  <input type = "checkbox" id = "9"  name = "numres" />
                  <label for = "9">&nbsp;&nbsp;9</label><br />
                </div>
              </div>
              <div className='col-lg-3'>
                <div class = "form-group">
                  <h3>Number of Bathrooms</h3>
                  <input type = "checkbox" id = "1"  name = "bath" /> 
                  <label for = "1">&nbsp;&nbsp;1</label><br />
                  <input type = "checkbox" id = "2"  name = "bath" /> 
                  <label for = "2">&nbsp;&nbsp;2</label><br />
                  <input type = "checkbox" id = "3"  name = "bath" /> 
                  <label for = "3">&nbsp;&nbsp;3</label><br />
                  <input type = "checkbox" id = "4"  name = "bath" />
                  <label for = "4">&nbsp;&nbsp;4</label><br /> 
              </div>
              </div>
              <div className='col-lg-3'>
                <div class = "form-group">
                  <h3>Amenities</h3>
                    <input type = "checkbox" id = "kitchen"  name = "amenities" />
                    <label for = "kitchen">&nbsp;&nbsp;Kitchen</label><br />
                    <input type = "checkbox" id = "fridge"  name = "amenities" />
                    <label for = "fridge">&nbsp;&nbsp;Refrigerator</label><br />
                    <input type = "checkbox" id = "microwave"  name = "amenities" />
                    <label for = "microwave">&nbsp;&nbsp;Microwave</label><br />
                    <input type = "checkbox" id = "ac"  name = "amenities" />
                    <label for = "ac">&nbsp;&nbsp;Air Conditioning</label><br /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById('root'));


