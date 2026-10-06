import listaAdat from "../data/listaAdat"

function Lista() {
    return (
        <div className="row mb-2">
            <div className="col-sm-4 kartya">
                <h2>Élőhelyek</h2>

                <ul className="list-group">
                    {listaAdat[0].elohelyek.map( (elohely) => (
                        <li className="list-group-item" key={elohely}>
                            {elohely}
                        </li>
                    ) )}
                </ul>
            </div>
            <div className="col-sm-4 kartya mb-2">
                <h2>Népszerű állatok</h2>

                <ol className="list-group list-group-numbered">
                    {listaAdat[0].nepszeruAllatok.map( (allat) => (
                        <li className="list-group-item" key={allat}>
                            {allat}
                        </li>                        
                    ) )}
                </ol>
            </div>
            <div className="col-sm-4 kartya mb-2">
                <h2>Táplálkozás</h2>

                <ol className="list-group list-group-numbered">
                    {listaAdat[0].taplalkozas.map( (etel) => (
                        <li className="list-group-item" key={etel}>
                            {etel}
                        </li>                        
                    ) )}
                </ol>
            </div>
        </div>
    )
}

export default Lista;