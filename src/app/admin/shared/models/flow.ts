export class Flow {
    costosInicialesEmisor: number;
    costosInicialesBonista: number;
    flujoEmisor: number;
    flujoBonista: number;
    cuponExcel: number;
    prima: number;
    valorNominal: number;
    valorComercial: number;
    cupon: number;
    cuota: number;
    amortizacion: number;

    constructor(data?:any){
        if(!data) data = {};
        this.costosInicialesEmisor = 0;
        this.costosInicialesBonista = 0;
        this.flujoEmisor = 0;
        this.flujoBonista = 0;
        this.cuponExcel = 0;
        this.prima = 0;
        this.valorNominal = 0;
        this.valorComercial = 0;
        this.cupon = 0;
        this.cuota = 0;
        this.amortizacion = 0;
    }
}
