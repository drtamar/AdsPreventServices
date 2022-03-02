import React from 'react'
import { useParams,Link,   Outlet } from 'react-router-dom';
import NotAccountConnect from '../AccoutOverview/NotAccountConnect'
import DataOnTheWay from './DataOnTheWay';
//import { useSelector } from 'react-redux';

const FraudAnalyticsGoogle = () => {

  // const { GoogleClient } = useSelector((state) => state.googleReducer)

  // console.log("status: ",status.status)
  const link = false
 if (link) {

    return (
      <>
        <div className='container-fluid mt-5 '>
          <h3 className='mr-4' id='analytics-main-id'>Google Ads Fraud Analytics</h3>
          <div className='analytics-main-div'>
            <div>
              
              <Link to="/dashboard/fraudanalyticsgoogle/detectedips"> <button className='analytics-btn'>Detected Ips</button> </Link>
              <button className='analytics-btn'>Countries</button>
              <button className='analytics-btn'>Keywords</button>
              <button className='analytics-btn'>Campaigns</button>
              <button className='analytics-btn'>Ip Ranges</button>
              <button className='analytics-btn'>Devices</button>
            </div>
             <DataOnTheWay /> 
              <Outlet/>
          </div>
        </div>
      </>
    )
  }
  else {
    return (
      <div className='mt-5'>
        <NotAccountConnect value='Google' />
      </div>

    )
  }
}

export default FraudAnalyticsGoogle;
