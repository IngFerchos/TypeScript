interface Animal {
    name:string
    caminar(): void
    onomatopeya(): string
}

class Caballo implements Animal {
    name: string = 'Spirit'

    caminar(): void {
        console.log('libre')
    }

    onomatopeya(): string {
        return 'relinchando'
    }
}

class Cerdo implements Animal {
    name: string = 'Chanchito Feliz'

    caminar(): void {
        console.log('caminando')
    }

    onomatopeya(): string {
        return 'hin'
    }
}

class Perro implements Animal {
    name: string = 'Fido'

    caminar(): void {
        console.log('caminando')
    }

    onomatopeya(): string {
        return 'wuao'
    }
}

class DiccionarioUsuarios {
    [id: string]: string
}

let diccionarioUsuarios = new DiccionarioUsuarios()

diccionarioUsuarios['1a'] = 'Usuario 1'
diccionarioUsuarios['a1'] = 'Usuario 2'

console.log(diccionarioUsuarios)