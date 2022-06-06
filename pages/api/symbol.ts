import {HistoricQuote, SymbolDetails} from "../../types/types";

export async function getSymbolDetails(symbol : String) : Promise<SymbolDetails>{
    const path = process.env.STOCK_BASE_URL+"/stock/symbol-information?"
    const param = new URLSearchParams({
        symbol: symbol as string
    })
    const response = await fetch(path+param)

    return await response.json()
}

export async function getHistoricalQuotes(symbol : String) : Promise<HistoricQuote[]>{
    const path = process.env.STOCK_BASE_URL+"/stock/historical-quotes?"
    const param = new URLSearchParams({
        symbol: symbol as string
    })
    const response = await fetch(path+param)

    return await response.json()
}