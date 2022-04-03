function somar (a, b){
    return a + b;
};


function subtrair (a, b){
    return a - b;
};


function dividir (a, b){
    if (b===0){
        console.log("Não se pode dividir por zero.");
    } else {
        console.log(a / b);
    }
};


function multiplicar (a, b){
    if (b===0){
        console.log("Não se pode dividir por zero.");
    } else {
        console.log(a / b);
    }
};



module.exports = {
    somar,
    subtrair,
    dividir,
    multiplicar
}