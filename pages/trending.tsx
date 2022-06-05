import {StockTable} from "../components/trending/StockTable";
import {getTrendingSymbols} from "./api/trending";
import {SymbolSimple} from "../types/types";

type Props = {
    symbols: SymbolSimple[]
}

const Trending = ({symbols}: Props) => (
    <>
        <StockTable symbols={symbols}/>
    </>
)


export const getServerSideProps = async () => {
    const symbols = await getTrendingSymbols()

    return {props: {symbols}}
}

export default Trending