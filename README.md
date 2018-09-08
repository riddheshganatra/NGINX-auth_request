# NGINX-auth_request
hosting authenticated content on NGINX using auth_request

# Description
Static content is hosted using nginx and authentication is done using auth_request

auth_request goes to node js api which validates token for request and set appropriate header before sending response,

# Run it locally

./run-dev.sh

#output

http://localhost:4200/mp3recordings/SampleAudio_0.4mb.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOjI3LCJpYXQiOjE1MzM5MDE0MDksImV4cCI6MTU2NTQzNzQwOX0.c_lYlHSuMO1AgGGsPlX8AeYYWkppT-4Ign7pjX90P4w

token is generated using secreate : 'secreate'
