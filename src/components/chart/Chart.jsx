import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({title, data, dataKey, grid}) {
    
    return (
        <div className="chart">
           <h3 className="chartTitle">{title}</h3>
           <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke= "#5550bd"/>
                <YAxis  stroke= "#5550bd"/>
                <Tooltip/> 
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                <Line type="monotone" dataKey={dataKey}/>
            </LineChart>
           </ResponsiveContainer>
        </div>
    )
}