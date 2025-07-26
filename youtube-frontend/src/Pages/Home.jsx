import React from 'react'
import HomePage from './HomePage'
import TagsBar from '../Components/TagsBar'

const Home = () => {
  return (
    <div className='mt-12'>
        <TagsBar/>
        <HomePage/>
    </div>
  )
}

export default Home