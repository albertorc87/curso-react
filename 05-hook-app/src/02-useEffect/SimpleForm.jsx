import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'alberto@google.com'
    })

    const {username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target

        setFormState({
            ...formState,
            [name]: value
        })
    }

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
            <h1>Simple Form</h1>
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
                placeholder="alberto@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'strider2') && <Message/>
            }
        </>
    )
}
