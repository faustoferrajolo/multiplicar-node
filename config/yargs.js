const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola tabla de multip', options)
    .command('crear', 'Genera un archivo con la tabla de multip', options)
    .help()
    .argv;



module.exports = {
    argv
}