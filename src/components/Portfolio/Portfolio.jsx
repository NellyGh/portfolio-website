import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectPortfolioInfo } from '../../store/slices/portfolioInfo/portfolioInfoSlice'
import PortfolioInfo from '../PortfolioInfo/PortfolioInfo'


function Portfolio() {
  const {portfolioData} = useSelector(selectPortfolioInfo)

  return (
    <div className='portfolio'>
        {
          portfolioData.map(item =>(
            <PortfolioInfo
              key={item.id}
              img={item.img}
              name={item.name}
              linkCode={item.linkCode}
              linkDemo={item.linkDemo}
              
            />
          ))
        }
    </div>
  )
}

export default memo(Portfolio)