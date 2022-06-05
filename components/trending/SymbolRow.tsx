import {Button, Table} from "@navikt/ds-react";
import {SymbolSimple} from "../../types/types";
import {Data} from "@navikt/ds-icons";
import Link from "next/link";


type Props = { symbol: SymbolSimple }

export const SymbolRow = ({symbol}: Props) => {
    return (
        <Table.Row>
            <Table.DataCell>
                <Link href={"/symbol/"+symbol.symbol}>
                    <a><Data/></a>
                </Link>
            </Table.DataCell>
            <Table.DataCell>{symbol.symbol}</Table.DataCell>
            <Table.DataCell>{symbol.name}</Table.DataCell>
        </Table.Row>
    )
}