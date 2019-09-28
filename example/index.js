const THREE = require('three');
const LegacyJSONLoader = require('../index')
// import {LegacyJSONLoader} from 'three-legacyjsonloader'

let loader = new LegacyJSONLoader(THREE);
loader.load('./json/teapot.json').then(function (obj) {
    console.log(obj)
}).catch(function (err) {
    console.log(err)
})