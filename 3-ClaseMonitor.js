class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada; //poner _ para definir que son privadas
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

// CREANDO LA CLASE RATON HEREDAD DE DISPOSITIVOENTRADA
// herencia = extends
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
        return `Raton : [idRaton:   ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}
//CREANDO OBJETOS DE RATON
let raton1 = new Raton('wireles','genius');
let raton2 = new Raton('bluetooh', 'Dell');
console.log(raton1.toString()); 
console.log(raton2.toString());


//CREANDO LA CLASE TECLADO, HEREDADA DE DISPOSITIVOENTRADA
class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}
//CREANDO OBJETOS DE TECLADO
let teclado1 = new Teclado('bluetooh', 'logi');
let teclado2 = new Teclado('bluetooh', 'hp')
console.log(teclado1.toString());
console.log(teclado2.toString());


//CREANDO LA CLASE MONITOR
class Monitor{
    static contadorMonitor = 0;

    constructor(marca, tamano,){
        this.marca =  marca;
        this.tamano = tamano;
        this._idMonitor = ++Monitor.contadorMonitor;
    }

    get marca (){
        return this._marca;
    }
    get tamano(){
        return this.tamano;
    }
    get idMonitor(){
        return this._idMonitor;
    }

    set marca (marca){
        this._marca = marca;
    }
    set tamano (tamano){
        this._tamano = tamano;
    }
    set idMonitor (idMonitor){
        this._idMonitor = idMonitor;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamano}]`;
    }
}
//CREANDO OBJETOS DE MONITOR
let monitor1 = new Monitor ('HP','32"');
let monitor2 = new Monitor ('Dell', '32"')
console.log (monitor1.toString());
console.log (monitor2.toString());