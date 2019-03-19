#upload s3 
aws s3 cp build s3://test-unive.makestar.com --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --recursive