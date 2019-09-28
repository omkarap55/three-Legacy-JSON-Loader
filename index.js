const fs = require('fs');
class LegacyJSONLoader {
    constructor(THREE) {
        this.THREE = THREE;
        this.ObjectLoader = new THREE.ObjectLoader();
    }
    load(url) {
        let promise = new Promise((resolve, reject) => {
            fs.readFile(url, (err, data) => {
                if (err)
                    throw err;
                var json = JSON.parse(data);
                try {
                    let objLoader = this.ObjectLoader;
                    let parsedObj = objLoader.parse(json);
                    resolve(parsedObj);
                }
                catch (err) {
                    reject(err);
                }
            });
        });
        return promise;
    }
    parse(json) {
        let promise = new Promise(function (resolve, reject) {
            try {
                let objLoader = this.ObjLoader;
                let parsedObj = objLoader.parse(json);
                resolve(parsedObj);
            }
            catch (err) {
                reject(err);
            }
        });
        return promise;
    }
}
module.exports = LegacyJSONLoader;
