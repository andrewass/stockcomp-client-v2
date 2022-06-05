import {SymbolSimple} from "../../types/types";
import {Table} from "@navikt/ds-react";
import {SymbolRow} from "./SymbolRow";
import {v4 as uuidv4} from "uuid";

type Props = {
    symbols: SymbolSimple[]
}

export const StockTable = ({symbols}: Props) => {
    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Select</Table.HeaderCell>
                    <Table.HeaderCell>Symbol</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {symbols.map((symbol) => <SymbolRow key={uuidv4()} symbol={symbol}/>)}
            </Table.Body>
        </Table>
    )
}