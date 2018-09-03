var https = require('https');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

//gets HTML chunks and console.log each chunk of data as it is received,
//mconcatenated with a newline character ('\n') so you can visualize each chunk.
function getAndPrintHTML(options) {

  var fileData = "";

  //gets chunk from host and given file path.
  https.get(options, function(response)
  {

    //sets incoming response as utf8.
    response.setEncoding('utf8');


    response.on('data', function (data) {
      fileData += (data + "\n");
      console.log(fileData);
      //console.log('Chunk Received. Data is:', data + "chunk count is: " + count);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

    console.log(fileData);


  });

  /* Add your code here */

}

getAndPrintHTML(requestOptions);