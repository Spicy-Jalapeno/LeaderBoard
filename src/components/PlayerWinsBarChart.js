import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell, Label } from 'recharts';
import useStore from '../store'
const PlayerWinsBarChart = ({data}) => {
    // const data=[{name: "Matthew", wins: 10}, {name: "Alex", wins: 40}, {name: "Connor", wins: 20}]
    let wins = []
    data.map(player => {
        // console.log(player)
        wins.push({name: player.data.firstName, wins: player.data.totalWins})

    })
     useStore.setState({playersWins:wins})
    const colors = ["#1920CE", "#0CAE2F", "#570697"]
    return (      
                <ResponsiveContainer width="90%" height="80%">
                    <BarChart data={wins} >
                        <CartesianGrid  strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/> 
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