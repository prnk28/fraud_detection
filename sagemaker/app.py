from chalice import Chalice
from chalice import BadRequestError
import base64
import os
import boto3
import json
import io
import ast
import numpy as np
import pandas as pd

app = Chalice(app_name='fraud-detection')
app.debug = True


@app.route('/', methods=['POST'])
def index():
    body = app.current_request.json_body

    # Check if Data Provided in Application
    if 'data' not in body:
        raise BadRequestError('Missing csv data')
    if 'ENDPOINT_NAME' not in os.environ:
        raise BadRequestError('Missing endpoint')

    # Construct Image by bytes
    payload = pd.read_csv(body['data'])
    payload_file = io.StringIO()
    payload.to_csv(payload_file, header=None, index=None)

    # Push Data to SageMaker Model
    client = boto3.client('sagemaker-runtime')
    response = client.invoke_endpoint(
        EndpointName='fraud-detection-endpoint3',
        Body=payload_file.getvalue(),
        ContentType='text/csv')

    # Return Data as JSON Response
    result = json.loads(response['Body'].read().decode())
    return {'response': str(result)}
