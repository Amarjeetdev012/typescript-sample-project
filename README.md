# typescript-sample-project

creating a qr code project using login and register

create user model

NodeJS
Require the module qrcode

var QRCode = require('qrcode')

QRCode.toDataURL('I am a pony!', function (err, url) {
  console.log(url)
})
render a qrcode for the terminal

var QRCode = require('qrcode')

QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
  console.log(url)
})
