
export const TiposBasicos = () => {

    const nombre: String = "Kevin";
    const edad: Number = 35;
    const estadoActivo: Boolean = true;

    const poderes: Array<string> = ["Volar", "Super Fuerza", "Rayos X"];

    return (
        <>
            <h3>Tipos Basicos: </h3>
            <p>
                Nombre: {nombre}<br/>
                Edad: {edad}<br/>
                EstadoActivo: {estadoActivo? "Activo" : "No Activo"}<br/>
            </p>
        </>
    )
}
