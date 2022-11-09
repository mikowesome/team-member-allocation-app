import React, { createContext, useState, useEffect } from 'react'

const EmployeesContext = createContext()

export const EmployeesContextProvider = (props) => {
    const [selectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamA")

    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
    },
    {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
    },
    {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
    },
    {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
    },
    {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
    },
    {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
    }])

    useEffect(() => {
        localStorage.setItem('employeeList', JSON.stringify(employees))
    }, [employees])

    useEffect(() => {
        localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
    }, [selectedTeam])

    function handleEmployeeChange(id) {
        setEmployees(prevEmployees => prevEmployees.map(employee => {
            if (employee.id === id) {
                if (employee.teamName === selectedTeam) {
                    return {...employee, teamName: ''}
                } else {
                    return {...employee, teamName: selectedTeam}
                }
            } else {
                return employee
            }
        }))
    }

    function handleSelectedTeamChange(event) {
        setSelectedTeam(event.target.value)
    }

    function groupTeamMembers() {
        let teams = []
        const teamAMembers = employees.filter(employee => employee.teamName === 'TeamA')
        const teamA = {team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true}
        teams.push(teamA)

        const teamBMembers = employees.filter(employee => employee.teamName === 'TeamB')
        const teamB = {team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true}
        teams.push(teamB)

        const teamCMembers = employees.filter(employee => employee.teamName === 'TeamC')
        const teamC = {team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true}
        teams.push(teamC)

        const teamDMembers = employees.filter(employee => employee.teamName === 'TeamD')
        const teamD = {team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true}
        teams.push(teamD)

        return teams
    }

    return (
        <EmployeesContext.Provider value={{
            employees, 
            selectedTeam,
            handleSelectedTeamChange,
            handleEmployeeChange,
            setSelectedTeam,
            groupTeamMembers
        }}>
            {props.children}
        </EmployeesContext.Provider>
    )
}

export default EmployeesContext