interface Persona{
    nombreCompleto: String,
    edad: Number,
    direccion: Direccion,
}

interface Direccion{
    pais: String,
    distrito: String,
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Kevin',
        edad: 24,
        direccion: {
            pais: 'Peru',
            distrito: 'Trujillo'
        }
    }

    return (
        <div>
            <h3>Objetos Literales</h3>
            <hr />
            <code>
                <pre>
                    {JSON.stringify(persona)}
                </pre>
            </code>
        </div>
    )
}
