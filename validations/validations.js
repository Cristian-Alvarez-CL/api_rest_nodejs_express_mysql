
function validaString(data) {

    //Valida solo letras Mayusculas y Munusculas => console.log('regex '+/^[a-zA-Z]+$/g.test(data));
    
    if ( !/^[a-zA-Z]+$/g.test(data)) {
        return 'Campo debe ser letras';
    } 

}

function validaInteger(data) {

    const aux = Number.parseInt(data);

    if (isNaN(aux) || typeof aux !== 'number' || aux === undefined) {
        return 'Campo debe contener solo números';
    }
}

function validaAlphanumeric(data) {
/*
    //caracteres alfabéticos y numéricos:  /^[0-9a-zA-Z]+$/

    //if (typeof data !== 'string') {
    if (!/^[0-9a-zA-Z]+$/.test(data)) {
        throw new Error('Campo debe ser alphaNumerico');
    } 
*/
}

function validaEmail(data) {

    const emailRegexp = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    if (!emailRegexp.test(data) || !data || data == null || data ==="") {
        
        return  'Campo no corresponde a un Email';
    } 

}

function validaLargo(largo, data) {
/*
    //console.log('Validacion data: ' +data);

    if (data.length <= largo) {
        throw new Error('Campo debe contener un maximo de ' + largo +' caracteres');
    } 
*/
}

function validaSqlInjection(data) {

    //console.log('Validacion data: ' +data);

}

module.exports= {
    validaAlphanumeric,
    validaEmail,
    validaString,
    validaInteger,
    validaLargo,
    validaSqlInjection,
}