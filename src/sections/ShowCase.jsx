import React from 'react'

const ShowCase = () => {
  return (
    <div id="work" className='app-showcase'>
        <div className='w-full'>
            <div className="showcaselayout">
                <div className='first-project-wrapper'>
                    <div className='image-wrapper'>
                        <img src='/images/project1.png' alt='ryde'/>
                    </div>
                    <div className="text-content">
                        <h2>On demand rides made simple with a user friendly app</h2>
                        <p className='text-white-50 md:text-xl'>
                            An app built with React Native and Node.js to help users find cabs on demand
                        </p>
                    </div>
                </div>
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project">
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src='/images/project2.png' alt='project2'/>
                        </div>
                        <h2>A Library Management System</h2>
                    </div>
                    <div className="project">
                        <div className="image-wrapper bg-[#ffe7db]">
                            <img src='/images/project3.png' alt='project3'/>
                        </div>
                        <h2>YC Directory - A Startup Showcase App</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowCase