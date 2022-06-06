import {SymbolSimple} from "../../types/types";

export async function getTrendingSymbols() : Promise<SymbolSimple[]>{
    const path = process.env.STOCK_BASE_URL+'/stock/stock-quote-trending'
    const response = await fetch(path)

    return await response.json()
}