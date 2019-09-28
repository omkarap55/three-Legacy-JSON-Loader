# three-Legacy-JSON-Loader
A node package to parse THREE Js Json files on server side.
By default Three Js does not have LegacyJSONLoader. This is nodeJs wrapper for LegacyJSONLoader library.
## Install
```bash
npm install three-legacyjsonloader
```
## USAGE
```javascript
const THREE = require('three');
const LegacyJSONLoader = require('three-legacyjsonloader')
let loader = new LegacyJSONLoader(THREE);
loader.load('teapot.json').then(function (obj) {
    console.log(obj)
}).catch(function (err) {
    console.log(err)
})
```
