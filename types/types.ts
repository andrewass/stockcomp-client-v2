
export interface SymbolSimple {
    symbol: string,
    name: string,
    price: number,
    priceChange: number,
    usePrice: number,
    currency: string
}

export interface SymbolDetails {
    symbol: string
}

export interface HistoricQuote {
    date: Date,
    price: number
}