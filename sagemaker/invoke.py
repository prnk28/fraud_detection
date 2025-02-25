import json
import pandas as pd
import boto3
import io
import csv
import random

payload = pd.read_json("credit.json", orient='records')
payload_file = io.StringIO()
payload.to_csv(payload_file, header=None, index=None)
print(payload)

client = boto3.client('sagemaker-runtime')
response = client.invoke_endpoint(
    EndpointName='fraud-detection-endpoint3',
    Body=payload_file.getvalue(),
    ContentType='text/csv')
result = json.loads(response['Body'].read().decode())
print(result)
