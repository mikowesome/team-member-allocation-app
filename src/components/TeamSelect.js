import React, { useContext } from 'react'
import EmployeesContext from '../context/EmployeesContext'

function TeamSelect() {
    const {
        selectedTeam,
        handleSelectedTeamChange
    } = useContext(EmployeesContext)
  return (
    <select 
        className='form-select form-select-lg'
        onChange={handleSelectedTeamChange}
        value={selectedTeam}
    >
        <option value='TeamA'>Team A</option>
        <option value='TeamB'>Team B</option>
        <option value='TeamC'>Team C</option>
        <option value='TeamD'>Team D</option>
    </select>
  )
}

export default TeamSelect