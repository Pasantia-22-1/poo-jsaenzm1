class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada; //poner _ sino da error.
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    get marca(){
        return this._marca;        
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    set marca(marca){
        this._marca =  marca;
    }
}

// creando la clase Raton
// heredar = extends
 
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor (tipoEntrada,marca){
        super(tipoEntrada, marca); //super: permite inicializar los atributos del método al que se está llamando
        this._idRaton = ++Raton.contadorRatones; //para aumentar el id en 1 con el ++
    }

    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton : [idRaton:   ${this.idRaton}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca}]`;
    }
}

//creando objetos de RATON
let raton1 = new Raton('wireles','genius');
console.log(raton1.toString()); 

let raton2 = new Raton('bluetooh', 'Dell');
console.log(raton2.toString());

//module.export = {DispositivoEntrada, Raton};