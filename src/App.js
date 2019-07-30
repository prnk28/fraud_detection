/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import React from "react"
import './App.css';

const request = require("request");

function App() {

  function apiCall(e) {
    var options = {
      method: 'POST',
      url: 'https://w1qgjm5vmk.execute-api.us-east-1.amazonaws.com/api/',
      headers:
      {
        'Content-Type': 'application/json'
      },
      body:
        [{
          Time: 0,
          V1: -1.3598071336738,
          V2: -0.0727811733098497,
          V3: 2.53634673796914,
          V4: 1.37815522427443,
          V5: -0.338320769942518,
          V6: 0.462387777762292,
          V7: 0.239598554061257,
          V8: 0.0986979012610507,
          V9: 0.363786969611213,
          V10: 0.0907941719789316,
          V11: -0.551599533260813,
          V12: -0.617800855762348,
          V13: -0.991389847235408,
          V14: -0.311169353699879,
          V15: 1.46817697209427,
          V16: -0.470400525259478,
          V17: 0.207971241929242,
          V18: 0.0257905801985591,
          V19: 0.403992960255733,
          V20: 0.251412098239705,
          V21: -0.018306777944153,
          V22: 0.277837575558899,
          V23: -0.110473910188767,
          V24: 0.0669280749146731,
          V25: 0.128539358273528,
          V26: -0.189114843888824,
          V27: 0.133558376740387,
          V28: -0.0210530534538215,
          Amount: 149.62
        }],
      json: true
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      $('#exampleModal').modal('toggle').on('show.bs.modal', function (e) {
        // Modify and Log Data
        var resp = body.response;
        var str = resp.replace(/[\[\]]+/g, '');
        var result = str.replace(/'/g, '"');
        console.log(result)

        var modal = $(this)

        // Set Data based on Result
        var obj = JSON.parse(result)

        // Extract Objects
        var prediction = obj.predictions.predicted_label;
        var score = obj.predictions.score

        // Modify based on Result
        if(prediction == 0.0){
          modal.find('.modal-title').text('Success')
          modal.find('.modal-body').text('There is no fraud in this transaction, here is the score: ' + score)
        }else{
          modal.find('.modal-title').text('Error')
          modal.find('.modal-body').text('Fraud detected in this transaction, here is the score: ' + score)
        }
      })
    });

  }
  return (
    <div className="App">
      <div class="modal" id="exampleModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Okay">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

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
          class="btn btn-primary" onClick={apiCall}> Submit </button>
      </header>
    </div>
  );
}

export default App;
