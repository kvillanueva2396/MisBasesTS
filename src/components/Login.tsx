import { useEffect, useReducer } from "react";

interface AuthState{
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string,
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: '',
}

type LoginPayload = {
    username: string,
    nombre: string,
}

type AuthAction = 
    | { type: 'logout' } 
    | { type: 'login', payload: LoginPayload}

const authReducer = ( state: AuthState, action: AuthAction ):AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: '',
            }

        case 'login':
            const {nombre, username} = action.payload;
            return {
                validando: false,
                token: "abc123",
                nombre: nombre,
                username: username,
            }
        
        default:
            return state;
    }
}

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = () => {
        dispatch({ 
            type: 'login', 
            payload: {
                nombre: 'Kevin',
                username: "jxx0911",
            } 
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout',
        })
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' });
        },1500);
    }, []);

    if( state.validando ) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                ( state.token )
                    ? <div className="alert alert-success">Autenticado como: {state.username}</div>
                    : <div className="alert alert-danger">No autenticado</div>
            }

            {
                ( state.token )
                    ? <button className="btn btn-danger" onClick={logout}> Logout</button>
                    : <button className="btn btn-primary" onClick={login}>Login</button>
            }
        </>
    )
}
