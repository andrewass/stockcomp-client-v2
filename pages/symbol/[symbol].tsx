import {useRouter} from "next/router";
import {getTrendingSymbols} from "../api/trending";

const SymbolDetails = () => {
    const router = useRouter()
    const {symbol} = router.query

    return(
        <h1>Symbol is {symbol}</h1>
    )
}

export const getServerSideProps = async () => {
    const symbolDetails = await getTrendingSymbols()
    const historicQuotes = await getTrendingSymbols()

    return {props: {symbolDetails, historicQuotes}}
}

export default SymbolDetails