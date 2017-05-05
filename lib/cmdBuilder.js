var cmdBuilder = function(nwhome, source, ext) {
    const spawn = require('child_process').spawn;
    var batstr = 'nwjc-builder.bat ' + nwhome + ' ' + source + ' ' + ext;
    const bat = spawn('cmd.exe', ['/c', batstr]);

    bat.stdout.on('data', (data) => {
      console.log(data.toString());
    });

    bat.stderr.on('data', (data) => {
      console.log(data.toString());
    });

    bat.on('exit', (code) => {
      console.log(`Child exited with code ${code}`);
    });
};

module.exports = cmdBuilder;