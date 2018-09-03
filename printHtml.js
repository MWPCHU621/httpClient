var https = require('https');

var fileData = "";

function getHTML (options, callback) {



  //gets chunk from host and given file path. and prints it out using a callback function
  https.get(options, function(response)
  {

    //sets incoming response as utf8.
    response.setEncoding('utf8');


    response.on('data', function (data) {
      fileData += (data + "\n");
      //console.log(fileData);
      //console.log('Chunk Received. Data is:', data + "chunk count is: " + count);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      callback(fileData);

    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);