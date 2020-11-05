import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell, Label } from 'recharts';

const PlayerWinsBarChart = ({data}) => {
    // const data=[{name: "Matthew", wins: 10}, {name: "Alex", wins: 40}, {name: "Connor", wins: 20}]
    let wins = []
    data.map(player => {
        console.log(player)
        wins.push({name: player.data.firstName, wins: player.data.totalWins})
    })
    const colors = ["#1920CE", "#0CAE2F", "#570697"]
    return (
        <ResponsiveContainer >
            <BarChart data={wins} margin={{right: 10}}>
                <CartesianGrid  strokeDasharray="3 3"/>
                <XAxis dataKey="name"/> 
                <YAxis/>
                <Tooltip />
                <Bar dataKey="wins"> 
                    {
                        wins.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[Math.floor(Math.random() * colors.length)]} />
                        ))
                    }
                </Bar>
            </BarChart>        
        </ResponsiveContainer>
        
     );
}
 
export default PlayerWinsBarChart;