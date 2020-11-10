import { Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell, Label } from 'recharts';
import useStore from '../store'
import PlayersWins from '../utilities/PlayerWins';
const PlayerWinsBarChart = () => {
  
    const wins = useStore(state => state.playersWins)
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