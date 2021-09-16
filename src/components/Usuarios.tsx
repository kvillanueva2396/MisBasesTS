import { useUsuarios } from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/resRes';

export const Usuarios = () => {

    const {usuarios, paginaAnterior, paginaSiguiente} = useUsuarios();

    const renderItems = ( usuario: Usuario ) => {
        return (
            <tr key={ usuario.id.toString() }>
                <th>
                    <img 
                        src={ usuario.avatar } 
                        alt={ usuario.first_name }
                        style={{
                            width: 35,
                            borderRadius: 100
                        }}
                    />
                </th>
                <th>{ usuario.first_name } { usuario.last_name }</th>
                <th>{ usuario.email }</th>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( usuario => renderItems(usuario) )
                    }
                </tbody>
            </table>

            <button className="btn btn-primary" onClick={paginaAnterior}>
                    Anterior
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={paginaSiguiente}>
                    Siguiente
            </button>
        </>
    )
}
