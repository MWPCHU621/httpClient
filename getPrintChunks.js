var https = require('https');

//gets HTML chunks and console.log each chunk of data as it is received,
//mconcatenated with a newline character ('\n') so you can visualize each chunk.
function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  //gets chunk from host and given file path.
  https.get(requestOptions, function(response)
  {
    //sets incoming response as utf8.
    response.setEncoding('utf8');


    response.on('data', function (data) {
      console.log('Chunk Received. Data is:', data + "\n");
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });


  });

  /* Add your code here */

}

getAndPrintHTMLChunks();