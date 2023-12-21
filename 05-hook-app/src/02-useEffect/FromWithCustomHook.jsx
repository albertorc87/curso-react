import { useEffect } from "react"
import { useForm } from "../hooks/useForm"

export const FromWithCustomHook = () => {

    const {formState, onResetForm, onInputChange, username, email, password} = useForm({
        username: '',
        password: '',
        email: ''
    })

    // Con el segundo parámetro como [] solo queremos que el useEffect se ejecute una vez, en el renderizado
    useEffect(() => {

    }, [])
    
    // En este caso cada vez que cambie el formState saltará
    useEffect(() => {

    }, [formState])

    useEffect(() => {

    }, [email])

    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="alberto@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

        </>
    )
}
