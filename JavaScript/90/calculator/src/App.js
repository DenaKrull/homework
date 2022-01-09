import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    total: 0,
    current: 0
  }

  setCurrent = (e) => {
    e.preventDefault();
    const current = e.target.value ? e.target.value : e.target.innerText;
    console.log(current);
    this.setState({
      current: current
    });
    e.target.value = '';
  }

  setOperator = (e) => {
    e.preventDefault();
    console.log(e.target.innerText);
    this.setState({
      total: this.state.current,
      operator: e.target.innerText
    });
  }

  calculate = (e) => {
    e.preventDefault();
    console.log(e.target.innerText);
    if (this.state.operator === '+') {
      this.setState({
        current: parseInt(this.state.total) + parseInt(this.state.current),
        total: parseInt(this.state.total) + parseInt(this.state.current)
      });
    } else if (this.state.operator === '-') {
      this.setState({
        current: parseInt(this.state.total) - parseInt(this.state.current),
        total: parseInt(this.state.total) - parseInt(this.state.current)
      });
    } else if (this.state.operator === '*') {
      this.setState({
        current: parseInt(this.state.total) * parseInt(this.state.current),
        total: parseInt(this.state.total) * parseInt(this.state.current)
      });
    } else if (this.state.operator === '/') {
      this.setState({
        current: parseInt(this.state.total) / parseInt(this.state.current),
        total: parseInt(this.state.total) / parseInt(this.state.current)
      });
    }
  }

  render() {
    return (
      <div >
        <div className="container text-center">
          <div className="row">
            <form>
              <div >

                <div className="p-3 mb-2 bg-success text-white">{this.state.total}</div>
                <input type="number" className="form-control btn" onBlur={this.setCurrent}></input>
                <div class="d-grid gap-2 d-md-block">
                  <button className="btn btn-outline-secondary btn-lg" onClick={this.setCurrent}>7</button>
                  <button className="btn btn-outline-secondary btn-lg" onClick={this.setCurrent}>8</button>
                  <button className="btn btn-outline-secondary btn-lg" onClick={this.setCurrent}>9</button>
                  <button className="btn btn-outline-secondary btn-lg" onClick={this.setOperator}>/</button>
                </div>
                <div> </div>
                <button className="btn btn-outline-secondary btn-lg" onClick={this.setCurrent}>4</button>
                <button className="btn btn-outline-secondary btn-lg" onClick={this.setCurrent}>5</button>
                <button className="btn btn-outline-secondary btn-lg" onClick={this.setCurrent}>6</button>
                <button className="btn btn-outline-secondary btn-lg" onClick={this.setOperator}>*</button>
                <div></div>
                <button className="btn btn-outline-secondary btn-lg" onClick={this.setCurrent}>1</button>
                <button className="btn btn-outline-secondary  btn-lg" onClick={this.setCurrent}>2</button>
                <button className="btn btn-outline-secondary  btn-lg" onClick={this.setCurrent}>3</button>
                <button className="btn btn-outline-secondary  btn-lg" onClick={this.setOperator}>-</button>
                <div></div>
                <button className="btn btn-outline-secondary btn-lg" onClick={this.setCurrent}>0</button>
                <button className="btn btn-outline-secondary btn-lg" onClick={(e) => {
                  e.preventDefault();
                  this.setState({
                    current: 0,
                    total: 0,
                    operator: ''
                  });
                }}>c</button>
                <button className="btn btn-outline-secondary btn-lg" onClick={this.calculate}>=</button>
                <button className="btn btn-outline-secondary btn-lg" onClick={this.setOperator}>+</button>


              </div>
            </form>
          </div>

        </div>

      </div>
    );
  }
}

export default App;


