import React from 'react'
import Navbar from '../components/Navbar'

function NotFound() {
  return (
    <>
        <Navbar />
        <header className='container'>
            <div className='row justify-content-center mt-3 mb-4'>
                <div className='col-8'>
                    <h1 className='text-danger'>404 - Page not found</h1>
                </div>
            </div>
        </header>
    </>
  )
}

export default NotFound