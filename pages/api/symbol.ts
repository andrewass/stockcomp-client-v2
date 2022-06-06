
export const getSymbolDetails = async (symbol : String) => {
    const path = process.env.STOCK_BASE_URL+"/stock/symbol-information?"
    const param = new URLSearchParams({
        symbol: symbol as string
    })
    const response = await fetch(path+param)

    return await response.json()
}

export const getHistoricalQuotes = async (symbol : String) => {
    const path = process.env.STOCK_BASE_URL+"/stock/historical-quotes?"
    const param = new URLSearchParams({
        symbol: symbol as string
    })
    const response = await fetch(path+param)

    return await response.json()
}