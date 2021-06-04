export class Estudiante {
    constructor() {
        this.id = '',
            this.cedula = '',
            this.nombre = '',
            this.horario_id = '',
            this.licencia_id = '',
            this.fase_id = '',
            this.licencia = {
                id: '',
                tipo: '',
                estado: ''
            },
            this.horario = {
                id: '',
                dia: {
                    id: '',
                    dia_nombre: ''
                },
                hora: {
                    id: '',
                    hora_inicio: ''
                }
            },
            this.fase= {
                id:'',
                fase_nombre:''
            }
    }
    id: string;
    cedula: string;
    nombre: string;
    horario_id: string;
    licencia_id: string;
    fase_id: string;
    licencia: {
        id: string,
        tipo: string,
        estado: string
    };
    horario: {
        id: string,
        dia: {
            id: string,
            dia_nombre: string
        },
        hora: {
            id: string,
            hora_inicio: string
        }
    };
    fase: {
        id: string,
        fase_nombre: string
    }
}