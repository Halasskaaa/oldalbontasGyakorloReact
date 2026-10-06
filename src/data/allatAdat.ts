import type { AllatBase } from "../types/allatBase";

const allatAdat: AllatBase[] = [
    {
        nev: "Szimba",
        eletkor: 8,
        suly: 190,
        veszelyeztetett: true,
        kedvecEtelek: ["Marhahús", "csirkehús"]
    },
    {
        nev: "Bambi",
        eletkor: 5,
        suly: 95,
        veszelyeztetett: true,
        kedvecEtelek: ["Bambusz", "sárgarépa"]
    },
    {
        nev: "Mici",
        eletkor: 12,
        suly: 3200,
        veszelyeztetett: false,
        kedvecEtelek: ["Fű", "levelek", "gyümölcsök"]
    },
    {
        nev: "Geri",
        eletkor: 6,
        suly: 850,
        veszelyeztetett: true,
        kedvecEtelek: ["Levelek", "ágak"]
    }
];

export default allatAdat;