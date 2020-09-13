const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================'.green);
    console.log(`= tabla del ${ base } =`.blue);
    console.log('================'.green);

    return new Promise((resolve, reject) => {


        if (!Number(base)) {

            reject(`El valor introducido "${ base }" no es un número!`)
            return;

        }

        for (let i = 1; i <= limite; i++) {

            console.log(`${ base } * ${ i } = ${ base * i} `);
        }

    });


}



crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {


        if (!Number(base)) {

            reject(`El valor introducido "${ base }" no es un número!`)
            return;

        }
        let data = '';


        for (let i = 1; i <= limite; i++) {

            //var resultado = base * i;
            data += `${ base } * ${ i } = ${ base * i} \n`;

        }



        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);

            //console.log('The file has been saved!');
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}