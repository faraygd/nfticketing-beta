import React from 'react'

const ProfileImage = () => {
  return (
    <div className="max-w-[2520px] -mt-[144px] w-[260px] h-[250px] ">
      <img className="w-full object-cover" src="https://gateway.ipfscdn.io/ipfs/QmUmSPFBQiYfNKFMRLUySaEiT3ym7TR82r8fx8CDKHVBP8/4.jpg" alt="" />
      <div className="description">
        <h1 className='font-bold p-4 text-xl'>Musical Ticket</h1>
        <div className="description-project w-96 pl-4">
          Musical ticketing is live, 1000 Unique ticket for SGT Holder
        </div>
      </div>
    </div>
  )
}

export default ProfileImage