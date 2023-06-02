"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function fetchData(recurso) {
    return __awaiter(this, void 0, void 0, function* () {
        const respuesta = yield fetch(`${recurso}`);
        return respuesta.json();
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchData('/usuarios');
    });
}
class Programador {
    constructor(t) {
        this.computador = t;
    }
}
const programadorOne = new Programador({ encender: () => { }, apagar: () => { } });
const programadorTwo = new Programador('hello');
function fetchProduct() {
    return {
        key: 'id de producto',
        value: { id: 'id de producto' }
    };
}
function fetchStock() {
    return {
        key: 'hello',
        value: 34
    };
}
class Usuario {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
function print(t) {
    console.log(t);
    return t;
}
print({ id: 1, name: 'chanchito feliz' });
class Estado {
    constructor() {
        this.data = [];
    }
    agregar(t) {
        this.data.push(t);
    }
    getEstado() {
        return this.data;
    }
}
class EstadoEliminar extends Estado {
    eliminar(id) {
        this.data.filter(x => x.id !== id);
    }
}
class EstadoUsuarios extends Estado {
    reiniciarContrasenas() {
    }
}
const esatdoUsuario = new EstadoUsuarios();
const calendar = { id: 1, fuente: 'Google', dueno: 'el' };
function getProp(objeto, property) {
    return objeto[property];
}
getProp(calendar, 'id');
getProp(calendar, 'fuente');
const keyValue = {
    'soy un string': 42
};
const p = {
    x: 1,
};
const p1 = {
    x: 1,
    y: 2,
};
const p2 = {
    x: 1,
    y: 2,
    desc: 'soy una descripcion'
};
//# sourceMappingURL=genericos.js.map