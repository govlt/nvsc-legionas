export interface Cases {
    _data: Case[];
}

export interface Case {
  pranesimo_menuo: string;
  mirtis: boolean | null;
  atvejai: number;
}