var https = require('https');
var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {

  let leetTalk = "";
  //console.log(html.length);
  for(let i = 0; i < html.length; i++)
  {
    if(html[i] === "a"){
      leetTalk += "4";
    }
    else if(html[i] === "l")
    {
      leetTalk += "1";
    }
    else if(html[i] === "")
  }

  console.log(leetTalk);

}

getHTML(requestOptions, print1337);