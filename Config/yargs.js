const argv = require('yargs')
    .options({
        address: {
            alias: 'a',
            descr: 'City address',
            demand: true
        }
    }).argv;


module.exports = {
    argv
}