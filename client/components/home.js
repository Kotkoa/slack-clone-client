import React from 'react'
import Sidebar from './sidebar'
import Chat from './chat'

const Home = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <Chat />
    </div>
  )
}

Home.propTypes = {}

export default Home
