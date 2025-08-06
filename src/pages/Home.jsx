import React from 'react'
import { Game } from '../components/game'

const Home = () => {
  return (
    <div className="min-vh-100 w-100 position-relative d-flex justify-content-center align-items-center" >
      <div className='bg-dark text-center position-absolute top-0 w-100 text-white fs-3 p-2 fw-bold'>Tic Toc Toe</div>
      <Game/>
    </div>
  )
}

export default Home
