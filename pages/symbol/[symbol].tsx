import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import {getHistoricalQuotes, getSymbolDetails} from "../api/symbol";

const SymbolDetails = () => {
    const router = useRouter()
    const {symbol} = router.query

    return(
        <h1>Symbol is {symbol}</h1>
    )
}

export const getServerSideProps : GetServerSideProps = async (context) => {
    const { symbol } = context.query
    const [symbolDetails, historicQuotes] = await Promise.all([
        getSymbolDetails(symbol as String),
        getHistoricalQuotes(symbol as String)
    ]);
    return {props: {symbolDetails, historicQuotes}}
}

export default SymbolDetails