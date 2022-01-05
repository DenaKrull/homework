import React from 'react'

export default function ListComponent(props) {
  const {title, zipcodes } = props;
  return (
    <div>
      <h4>{title}</h4>
      <h4> {zipcodes.map(zipcode => <div key={zipcode.zip}> {zipcode.zip} </div>)}</h4>
    </div>
  )

}
