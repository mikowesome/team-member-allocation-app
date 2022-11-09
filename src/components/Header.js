import React, { useContext } from 'react'
import EmployeesContext from '../context/EmployeesContext'

function Header() {
    const {
        employees,
        selectedTeam
    } = useContext(EmployeesContext)

    const teamMemberCount = employees.filter(employee => employee.teamName === selectedTeam).length

  return (
    <header className='container'>
      <div className='row justify-content-center mt-3 mb-4'>
        <div className='col-8'>
          <h1>Team Member Allocation</h1>
          <h3>{selectedTeam} has {teamMemberCount > 1 ? `${teamMemberCount} members` : `${teamMemberCount} member`}</h3>
        </div>
      </div>
    </header>
  )
}

export default Header