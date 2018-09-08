const express = require('express')
const app = express()
const jwt = require('jsonwebtoken');
const _ = require('lodash');

app.get('/', (req, res) => {
    res.statusCode = 401;
    if(req.headers['x-original-uri'] && req.headers['x-original-uri'].split('?token=').length === 2){
        let token = req.headers['x-original-uri'].split('?token=')[1];
        jwt.verify(token, 'secreate' ,function(err, decoded) {      
            if (err) {
                console.log(err)
              return res.send('hi')    
            } else {
                res.statusCode = 200;
                return res.send('hi')
            }
          });
        
    }else{
        res.send('hi')
    }
})

app.listen(process.env.APP_PORT || 80, () => console.log(`Example app listening on port ${process.env.APP_PORT}!`))