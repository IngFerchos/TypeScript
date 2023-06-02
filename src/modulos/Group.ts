export default class Group {
    constructor(
        public readonly id: number,
        public name: string
    ) {
    }
}

export const defaultGroups = {
    users: 'user',
    admin: 'admin',
}

//detalle de implementacion, variable solo para este modulo(GROUP.ts).
const manejaUsuario = () => {

}
