import { Eventos } from './eventos';

export interface Eventos {
    id: number;
    dt_ocorrencia: Date;
    horario: string;
    responsavel: string;
    cidade: string;
    estado: string;
    observacao: string;
}
