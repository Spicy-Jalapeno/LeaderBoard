
import React from 'react'
import useStore from '../store'

const SessionsData = (data) =>{
    let totalSessions = []
    const sessionsMap = new Map()

    data.map((session) =>{ 
        if(sessionsMap.has(session.data.name)){
            sessionsMap.set(session.data.name,sessionsMap.get(session.data.name) + 1)
        }else{
            sessionsMap.set(session.data.name, 1)
        }
    })

    for (let[key,value] of sessionsMap){
        totalSessions.push({name:key, played:value})
    }
    // const setSessions = useStore(state => state.totalSessions)
    // setSessions({totalSessions2});
    // const totalSessions = useStore(state=> state.totalSessions)
     useStore.setState({totalSessions:totalSessions})
    //Return is use
    return {totalSessions}; 
}


export default SessionsData;