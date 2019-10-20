export class Graduacao {
    id: number;
    categoria: string;
    // tslint:disable-next-line: variable-name
    nome_corda: string;
    // tslint:disable-next-line: variable-name
    desc_corda: string;
    significado: string;
    observacao: string;

    // tslint:disable-next-line: variable-name
    constructor(id: number, categoria: string, nome_corda: string,
                // tslint:disable-next-line: variable-name
                desc_corda: string, significado: string, observacao: string) {
                    this.id = id;
                    this.categoria = categoria;
                    this.nome_corda = nome_corda;
                    this.desc_corda = desc_corda;
                    this.significado = significado;
                    this.observacao = observacao;
                }
}
