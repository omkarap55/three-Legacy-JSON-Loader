const THREE = require('three');
const LegacyJSONLoader = require('../index')

let loader = new LegacyJSONLoader(THREE);
loader.load('./json/teapot.json').then(function (obj) {
    console.log(obj)
}).catch(function (err) {
    console.log(err)
})