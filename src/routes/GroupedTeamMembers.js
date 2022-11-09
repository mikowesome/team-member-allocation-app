import React, { useContext, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import EmployeesContext from '../context/EmployeesContext'

function GroupedTeamMembers() {
  const {
    groupTeamMembers,
    setSelectedTeam
  } = useContext(EmployeesContext)

  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers())

  function handleTeamClick(id) {
    setGroupedEmployees(prevGroupedEmployees => prevGroupedEmployees.map(groupedEmployee => {
      return (
        groupedEmployee.team === id ? {...groupedEmployee, collapsed: !groupedEmployee.collapsed} : groupedEmployee
      )
    }))
    setSelectedTeam(id)
  }

  const groupedEmployeeElements = groupedEmployees.map(group => {
    return (
      <div 
        key={group.team} 
        className='card mt-2' 
        style={{cursor:'pointer'}}
      >
        <h4 
          id={group.team} 
          className='card-header text-secondary bg-white'
          onClick={() => handleTeamClick(group.team)}
        >
          Team Name: {group.team}
        </h4>
        <div className={group.collapsed === true ? 'collapse' : ''}>
          <hr />
            {
              group.members.map(member => {
                return (
                  <div className='mt-2'>
                    <h5 className='card-title mt-2'>
                      <span className='text-dark'>Full Name: {member.fullName}</span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                )
              })
            }
        </div>
      </div>
    )
  })

  return (
    <>
      <Navbar />
      <Header />
      <main className='container'>
          <div className='row justify-content-center mt-3 mb-4'>
              <div className='col-8'>
                  {groupedEmployeeElements}
              </div>
          </div>
      </main>
      <Footer />
    </>
  )
}

export default GroupedTeamMembers