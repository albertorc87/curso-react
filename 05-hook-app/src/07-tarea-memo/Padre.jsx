import { Hijo } from './Hijo'
import { useMemo, useState, useCallback } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    const incrementar = useCallback((value) => {
        setValor((c) => c + value)
    }, [])

    // const incrementar = useMemo((num) => {
    //     setValor( valor + num )
    // }, [valor])
    //const memorizedValue = useMemo(() => heavyStuff(counter), [counter])
    //

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
