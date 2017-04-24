var nwjcBuild = function() {
    const
        spawn = require('child_process').spawnSync,
        ls = spawn( 'ls', [ '-lh', '/usr' ] );

    console.log( `stderr: ${ls.stderr.toString()}` );
    console.log( `stdout: ${ls.stdout.toString()}` );
};

module.exports = nwjcBuild;