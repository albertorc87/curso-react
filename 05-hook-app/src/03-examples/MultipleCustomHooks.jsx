import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFectch";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {

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
