/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import React from "react"
import './App.css';
import { toJson } from 'really-relaxed-json'

const request = require("request");

function App() {

  function apiCall(e) {
    var rawData = $('#rawData').val()
    //const json = toJson(rawData)
    var options = {
      method: 'POST',
      url: 'https://w1qgjm5vmk.execute-api.us-east-1.amazonaws.com/api/',
      headers:
      {
        'Content-Type': 'application/json'
      },
      body: [
        {
          "Time": 102542,
          "V1": -1.456876318,
          "V2": 3.740305561,
          "V3": -7.404518446,
          "V4": 7.440964036,
          "V5": -1.549877953,
          "V6": -1.661696862,
          "V7": -5.757213014,
          "V8": 1.615011011,
          "V9": -2.194880726,
          "V10": -6.807135251,
          "V11": 6.825793162,
          "V12": -10.39974912,
          "V13": 1.83644884,
          "V14": -11.8728451,
          "V15": -3.642392598,
          "V16": -6.044103144,
          "V17": -9.750776387,
          "V18": -3.116372254,
          "V19": 0.065317149,
          "V20": 0.529557331,
          "V21": 0.957897452,
          "V22": 0.14533948,
          "V23": -0.044703901,
          "V24": -0.544961671,
          "V25": -0.757756536,
          "V26": -0.005352369,
          "V27": 0.318152286,
          "V28": -0.323553623,
          "Amount": 2.28
        }
      ],
      json: true
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      // Modify and Log Data
      var resp = body.response;
      var str = resp.replace(/[\[\]]+/g, '');
      var result = str.replace(/'/g, '"');
      console.log(resp)

      var modal = $('#exampleModal')
      // Set Data based on Result
      var obj = JSON.parse(result)

      // Extract Objects
      var prediction = obj.predictions.predicted_label;
      var score = obj.predictions.score

      // Modify based on Result
      if (prediction == 0.0) {
        modal.find('.modal-title').text('No Fraud')
        modal.find('.modal-body').text('There is no fraud in this transaction, here is the score: ' + score)
      } else {
        modal.find('.modal-title').text('Fraudulent Transaction')
        modal.find('.modal-body').text('Fraud detected in this transaction, here is the score: ' + score)
      }
      modal.modal('toggle');
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
        </form>
        < button type="button"
          class="btn btn-primary" onClick={apiCall}> Submit </button>
      </header>
    </div>
  );
}

export default App;
