"use strict";
class Caballo {
    constructor() {
        this.name = 'Spirit';
    }
    caminar() {
        console.log('libre');
    }
    onomatopeya() {
        return 'relinchando';
    }
}
class Cerdo {
    constructor() {
        this.name = 'Chanchito Feliz';
    }
    caminar() {
        console.log('caminando');
    }
    onomatopeya() {
        return 'hin';
    }
}
class Perro {
    constructor() {
        this.name = 'Fido';
    }
    caminar() {
        console.log('caminando');
    }
    onomatopeya() {
        return 'wuao';
    }
}
class DiccionarioUsuarios {
}
let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios['1a'] = 'Usuario 1';
diccionarioUsuarios['a1'] = 'Usuario 2';
console.log(diccionarioUsuarios);
//# sourceMappingURL=interfaces.js.map