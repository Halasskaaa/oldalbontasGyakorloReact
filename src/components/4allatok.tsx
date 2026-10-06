import allatAdat from "../data/allatAdat";

function Allatok() {
    return (
        <div className="row-mb-1">
            <div className="col-sm-12 kartya mb-3">
                <h2>Az állatkert néhány lakója</h2>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Név</th>
                            <th>Életkor</th>
                            <th>Súly</th>
                            <th>Veszélyeztetett?</th>
                            <th>Kedvenc ételek</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allatAdat.map( (allat) => (
                            <tr key={allat.nev}>
                                <td>{allat.nev}</td>
                                <td>{allat.eletkor} éves</td>
                                <td>{allat.suly} kg</td>
                                <td>{allat.veszelyeztetett ? "Igen" : "Nem"}</td>
                                <td>{allat.kedvecEtelek.join(", ")}</td>
                            </tr>
                        ) )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Allatok;