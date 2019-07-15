import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-2">AWS Fraud Detection</h1>
            <p class="lead">A Simple React-based Client that leverages a
             trained model to predict fraud with AWS | <strong>Pradyumn Nukala</strong></p>
          </div>
        </div>
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Transaction Amount</label>
            <input type="amount" class="form-control" id="exampleFormControlInput1" placeholder="$100"></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Transaction Platform</label>
            <select class="form-control" exampleFormControlSelect1id="platform">
              <option>Store</option>
              <option>Mobile</option>
              <option>Web</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Date and time</label>
            <input class="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input"></input>

          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Raw Data</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
          </div>
        </form>
        < button type="button"
          class="btn btn-primary" > Submit </button>
      </header>
    </div>
  );
}

export default App;
