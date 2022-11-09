import React from 'react'
import Employees from '../components/Employees'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
        <Navbar />
        <Header />
        <Employees />
        <Footer />
    </>
  )
}

export default Home