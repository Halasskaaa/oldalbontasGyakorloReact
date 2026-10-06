import kartyaAdat from "../data/kartyaAdat";

function Kartya() {
    return (
        <div className="row mb-1">
            {kartyaAdat.map( (allat) => (
                <div
                className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100"
                key={allat.nev}
                >
                <h2>{allat.nev}</h2>

                <div className="card">
                    <div className="card-body">
                        <h3>{allat.nev}</h3>

                        <p>{allat.leiras}</p>

                        <p>
                            <strong>Veszélyeztetett: </strong>
                            {allat.veszelyeztetett ? "Igen" : "Nem"}
                        </p>

                        <p className="mb-0">
                            <strong>Kevenc ételei: </strong>
                            {allat.kedcencEtel.join(", ")}
                        </p>
                    </div>
                </div>
                </div>
            ) )}
        </div>
    )
}

export default Kartya;