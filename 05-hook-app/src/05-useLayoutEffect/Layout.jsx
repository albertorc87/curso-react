import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFectch";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";

export const Layout = () => {

    const {
        counter,
        increment,
    } = useCounter(1)

    const {data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                ? <LoadingQuote/>
                : <Quote quote={data?.quote} author={data?.author} />
            }

            <button 
            disabled={isLoading}
            onClick={() => increment()} 
            className="btn btn-primary">
                Next Quote
            </button>

        </>
    );
};
