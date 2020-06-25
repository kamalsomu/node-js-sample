var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World.. From kamal somu!')
})

// Route that receives a POST request to /sms
app.post('/scan/pullrequest', function (req, res) {
   res.send('vijay is super star');

})



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
