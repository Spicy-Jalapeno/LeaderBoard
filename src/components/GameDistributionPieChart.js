import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell, Label, LabelList } from 'recharts';

const GameDistributionPieChart = ({data}) => {
    // const data=[{name: "Hero Realms", played: 56}, {name: "Alex", wins: 40}, {name: "Connor", wins: 20}]
    
    const colors = ["#1920CE", "#0CAE2F", "#570697", "#50BADB", "#A73030", "#28D3C9"]
    let games = []
    const map = new Map()
    data.map((session) => {
         if(map.has(session.data.name)) {
            map.set(session.data.name, map.get(session.data.name) + 1)
        } else {
            map.set(session.data.name, 1)
        }
    })
    
    for (let [key, value] of map) {
        games.push({name: key, played: value})
    }

    return (
        <ResponsiveContainer height="95%">
            <PieChart>
                <Pie data={games} dataKey="played" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label >
                    {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
                    }
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
     );
}
 
export default GameDistributionPieChart;