import type { KartyaBase } from "../types/kartyaBase";

const kartyaAdat: KartyaBase[] = [
    {
        nev: "Szimba",
        leiras: "Szimba egy 8 éves hím oroszlán. Súlya körülbelül 190 kg.",
        veszelyeztetett: true,
        kedcencEtel: ["marhahús", "csirkehús"]
    },
    {
        nev: "Bambi",
        leiras: "Bambi egy 5 éves panda. Súlya körülbelül 95 kg.",
        veszelyeztetett: true,
        kedcencEtel: ["Bambusz", "sárgarépa"]
    },    
    {
        nev: "Mici",
        leiras: "Mici egy 12 éves elefánt. Súlya körülbelül 3200 kg.",
        veszelyeztetett: false,
        kedcencEtel: ["Fű", "levelek", "gyümölcsök"]
    },
    {
        nev: "Geri",
        leiras: "Geri egy 6 éves zsiráf. Súlya körülbelül 850 kg.",
        veszelyeztetett: true,
        kedcencEtel: ["Levelek", "ágak"]
    }

];

export default kartyaAdat;
