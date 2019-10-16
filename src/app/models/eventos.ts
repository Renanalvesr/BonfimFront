export class Eventos {
    id: number;
    // tslint:disable-next-line: variable-name
    dt_ocorrencia: string;
    // tslint:disable-next-line: variable-name
    hr_ocorrencia: string;
    responsavel: string;
    // tslint:disable-next-line: variable-name
    nome_evento: string;
    foto: string;
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
    observacao: string;

    // tslint:disable-next-line: variable-name
    constructor(id: number, dt_ocorrencia: string, hr_ocorrencia: string,
      // tslint:disable-next-line: variable-name
                responsavel: string, nome_evento: string, foto: string,
                endereco: string, bairro: string, cidade: string,
                estado: string, observacao: string) {
       this.id = id;
       this.dt_ocorrencia = dt_ocorrencia;
       this.hr_ocorrencia = hr_ocorrencia;
       this.responsavel = responsavel;
       this.nome_evento = nome_evento;
       this.foto = foto;
       this.endereco = endereco;
       this.bairro = bairro;
       this.cidade = cidade;
       this.estado = estado;
       this.observacao = observacao;
    }
}
