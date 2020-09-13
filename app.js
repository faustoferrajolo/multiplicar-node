const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            //.then(archivo => console.log(`El nombre del archivo: ${ archivo }`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El nombre del archivo: ` + `${ archivo }`.rainbow))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

//let base = 'a';

//console.log(multiplicar);


//let argv2 = process.argv;

/* let parametro = argv[2];
let base = parametro.split('=')[1]; */