  var https = require('https');
  var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  let reverse = "";
  //console.log(html.length);
  for(let i = html.length-1; i >= 0; i--)
  {
    reverse += html[i];
  }

  console.log(reverse);

}

getHTML(requestOptions, printReverse);