var nwjcBuild = function(options) {
    var fm = require('file-matcher');
    var fileMatcher = new fm.FileMatcher();

    this.match = function(callback) {
        fileMatcher.find(options)
        .then(callback)
        .catch(function(error)=> {
            // ... 
        });
    };

};

module.exports = nwjcBuild;