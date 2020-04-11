

export interface Sede {
$key?: string;
pais: Pais;
departamento: Departamento;
ciudad: string;
ditritio: string;
CP: string;
especialidades: string;
cordenadas: number;
}
const enum Pais{
Peru = 'PE'
}

const enum Departamento {
Amazonas,
Ancash,
Apurimac,
Arequipa,
Ayacucho,
Cajamarca,
Cuzco ,
Huanuco ,
Huancavelica,
Ica,
Junin,
Lambayeque,
LaLibertad,
Lima,
Loreto,
MadreDeDios,
Moquehua,
Pasco,
Piura,
Puno,
SanMartin,
Tacna,
Tumbes,
Ucayali,
}

const enum Anmazonas {
BaguaGrande,
Chachapoyas,
Bagua
}
const enum Ancash {
Chimbote,
Huaraz,
Huarmey,
Casma,
Caraz
}
const enum Apurimac {
Abancay,
Andahuaylas
}
const enum Arequipa {
Arequipa,
Camana,
Mollendo,
Mejia,
ElPedregal
}
const enum Ayacucho {
Ayacucho,
Huanta,
SanMiguel,
Puquio,
CoraCora
}
const enum Cajamarca {
Cajamarca,
Jaen,
Cutervo,
Chota,
Celendin,
Cajabamba,
Bambamarca,
SanIgnacio
}
const enum Callao {
    Callao
}
const enum Cuzco {
Cusco,
Sicuani,
Quillabamba,
Espinar
}
const enum Huancavelica {
    Huancavelica
}
const enum Huanuco {
Huanuco,
TingoMaria
}
const enum Ica {
Ica,
ChinchaAlta,
Pisco,
Nasca
}
const enum Junin {
Huancayo,
Tarma,
Jauja,
LaOroya
}
const enum LaLibertad {
Trujillo,
Chepen,
Pacasmayo,
Guadalupe,
CasaGrande,
}
const enum Lambayeque {
Chiclayo,
Lambayeque,
Ferrenafe,
Monsefu
}
const enum Lima {
Lima,
Huacho,
Huaral,
Canete,
Barranca,
Chancay,
Paramonga
}
const enum Loreto {
Iquitos,
Yurimahuas,
Requena
}
const enum MadreDeDios {
PuertoMaldonado,
}
const enum Moquehua {
Moquehua,
Ilo
}
const enum Pasco {
CerroDePasco,
Oxapampa
}
const enum Piura {
Piura,
Sullana,
Paita,
Talara,
Catacaos,
Chulucanas,
Sechura
}
const enum Puno {
Juliaca,
Puno,
Azangaro,
LaRinconada
}
const enum SanMartin {
Tarapoto,
Moyobamba,
Juanjui,
Rioja
}
const enum Tacna {
Tacna
}
const enum Tumbes {
Tumbes,
Zarumilla
}
