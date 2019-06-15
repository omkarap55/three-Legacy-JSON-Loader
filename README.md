# three-Legacy-JSON-Loader
By default Three Js does not have LegacyJSONLoader. This is nodeJs wrapper for LegacyJSONLoader library.
## Install
```bash
npm install three-legacyjsonloader
```
## USAGE
```javascript
const THREE= require('three');
const LegacyJSONLoader=require('three-legacyjsonloader');
LegacyJSONLoader(THREE);

console.log(typeof THREE.LegacyJSONLoader); //function
```
