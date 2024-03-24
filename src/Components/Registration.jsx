// eslint-disable-next-line no-unused-vars
import React from 'react'

const Registration = ({userData}) => {
  return (
    <div className='registration-wrapper'>
        <div>
            <p>Registration Done</p>
            <p className='details'>Details</p>
            <div className='userDetails'>
                <p>Username: {userData?.username}</p>
                <p>Email: {userData?.email}</p>
                <p>Phone: {userData?.phone}</p>
                <p>Branch: {userData?.branch}</p>
                <p>Confirmation: {userData?.confirmation}</p>
            </div>

        
        </div>
    </div>
  )
}

export default Registration