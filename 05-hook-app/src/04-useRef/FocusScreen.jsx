import { useRef } from "react"

export const FocusScreen = () => {

    const intputRef = useRef()

    const onclick = () => {
        // document.querySelector('input').select();
        intputRef.current.select();
    }

    return (
        <>
            <div>FocusScreen</div>
            <hr />
            <input 
            ref={intputRef}
            type="text"
            placeholder="Ingresa tu nombre bro"
            className="form-control" />

            <button 
            className="btn btn-outline-primary mt-5"
            onClick={onclick}
            >
                Set Focus
            </button>
        </>
    )
}
