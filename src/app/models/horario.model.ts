export class Horario{
    constructor(){
        this.id = '',
        this.cantidad = 0,
        this.estado = false,
        this.dia_id = '',
        this.fase_id = '',
        this.hora_id = '',
        this.dia = {
            id:'',
            dia_nombre:''
        },
        this.hora={
            id:'',
            hora_inicio:''
        }

    }
    id: string;
    cantidad: number;
    estado: boolean;
    dia_id: string;
    fase_id: string;
    hora_id: string;
    dia: {
        id: string,
        dia_nombre: string
    };
    hora:{
        id: string,
        hora_inicio: string
    }
}