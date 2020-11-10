import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell, Label, LabelList } from 'recharts';
import useStore from '../store';

const GameDistributionPieChart = () => {
    // const data=[{name: "Hero Realms", played: 56}, {name: "Alex", wins: 40}, {name: "Connor", wins: 20}]
    
    const colors = ["#1920CE", "#0CAE2F", "#570697", "#50BADB", "#A73030", "#28D3C9"]
    // Global state of total Sessions 
    const games = useStore(state => state.totalSessions)

    return (
        <ResponsiveContainer>
            <PieChart>
                <Pie data={games} dataKey="played" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label >
                    {
                games.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
                    }
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
     );
}
 
export default GameDistributionPieChart;