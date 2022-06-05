
export async function getTrendingSymbols(){
    const path = process.env.STOCK_BASE_URL+'/stock/stock-quote-trending'
    const response = await fetch(path)

    return await response.json()
}