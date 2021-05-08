function validaAlphanumeric(data) {

    //console.log('Validacion data: ' +data);

    if (typeof data !== 'string') {
        throw new Error('Campo debe ser alphaNumerico');
    } 

}

function validaString(data) {

    //Valida solo letras Mayusculas y Munusculas => console.log('regex '+/^[a-zA-Z]+$/g.test(data));
    
    if ( !/^[a-zA-Z]+$/g.test(data)) {
        throw new Error('Campo debe ser letras');
    } 

}

function validaInteger(data) {

    // revisar pasar string a number para validar correctamente lo que viene de un param

    console.log(data);

    //Valida solo numeros => console.log('regex '+/[[:digit:]]/g.test(data));

    if (!/[[:digit:]]/g.test(data)) {
        throw new Error('Campo debe contener solo números');
    } 

}

function validaLargo(largo, data) {

    //console.log('Validacion data: ' +data);

    if (data.length <= largo) {
        throw new Error('Campo debe contener un maximo de ' + largo +' caracteres');
    } 

}

function validaSqlInjection(data) {

    //console.log('Validacion data: ' +data);



}

module.exports= {
    validaAlphanumeric,
    validaString,
    validaInteger,
    validaLargo,
    validaSqlInjection,
}