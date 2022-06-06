import {HistoricQuote} from "../../types/types";
import {Area, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {AreaChart} from "recharts/src/chart/AreaChart";

type Props = {
    quotes : HistoricQuote[]
}

const HistoryChart = ({quotes} : Props) => {
    return (
        <div id="priceChart" style={{marginTop:"10%", width:"80%"}}>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={quotes}>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Area dataKey="price" stroke="#82ca9d" fill="#82ca9d"/>
                    <Tooltip/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default HistoryChart