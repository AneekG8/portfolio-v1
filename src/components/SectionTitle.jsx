import React from 'react'

const SectionTitle = ({title,subtitle,tabs,selectedTab,onTabChange}) => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className="flex rounded-full border-black-200 border-1">
            {tabs ? tabs.map((tab,index) => (
                <div key={index} className={`hero-badge cursor-pointer ${index !== selectedTab ? 'bg-black' : ''}`} onClick={() => onTabChange(index)}>
                    <p>{tab.subtitle}</p>
                </div>
            )) : <div className="hero-badge">
                  <p>{subtitle}</p>
                </div> 
            }
        </div>
        <div className="font-semibold md:text-5xl text-3xl text-center">{title || tabs[selectedTab].title}</div>
    </div>
  )
}

export default SectionTitle