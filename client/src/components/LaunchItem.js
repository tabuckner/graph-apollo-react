import React from 'react'

export default function LaunchItem({ launch: { flight_number, mission_name, launch_date_local, launch_success }}) {
  return (
    <div>
      flight-number: {flight_number}
      mission name: {mission_name}
    </div>
  )
}
