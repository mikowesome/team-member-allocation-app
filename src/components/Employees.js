import React, { useContext } from 'react'
import EmployeesContext from '../context/EmployeesContext'
import femaleProfile from '../images/female-profile.jpg'
import maleProfile from '../images/male-profile.jpg'
import TeamSelect from './TeamSelect'


function Employees() {
    const { 
        employees,
        selectedTeam,
        handleEmployeeChange
    } = useContext(EmployeesContext)
    
    const employeeElements = employees.map(employee => {
        return (
            <div
                key={employee.id}
                id={employee.id} 
                className={`${employee.teamName === selectedTeam ? 'standout' : ''} card m-2`} 
                style={{cursor: "pointer"}}
                onClick={() => handleEmployeeChange(employee.id)}
            >
                <img 
                    src={employee.gender === 'male' ? maleProfile : femaleProfile} 
                    className="card-img-top"
                    alt={employee.gender === 'male' ? 'male pic' : 'female pic'} 
                />
                <div className='card-body'>
                    <h5 className='card-title'>Full Name: {employee.fullName}</h5>
                    <p className='card-text'>Designation: {employee.designation} </p>
                </div>
            </div>
        )
    })

  return (
    <main className='container'>
        <div className='row justify-content-center mt-3 mb-3'>
            <div className='col-8'>
                <TeamSelect />
            </div>
        </div>
        <div className='row justify-content-center mt-3 mb-3'>
            <div className='col-8'>
                <div className='card-collection'>
                    {employeeElements}
                </div>
            </div>
        </div>
    </main>
  )
}

export default Employees