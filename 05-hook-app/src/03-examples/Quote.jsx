import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({quote, author}) => {

    const [boxSize, setBoxSize] = useState({width: 0, height: 0})
    const pRef = useRef()
    useLayoutEffect(() => {
        const {height, width} = pRef.current.getBoundingClientRect()
        setBoxSize({width, height})
    }, [quote])

    return (
        <blockquote 
        ref={pRef}
        className="blockquote text-end"
        style={{display: 'flex'}}
        >
            <p className="mb-1">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
        </blockquote>

    )
}
