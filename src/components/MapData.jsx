import React from 'react'
import CardContainer from './CardContainer';
import { data } from '../constant/data';
import FilterBtn from './FilterBtn';

const MapData = () => {
  return (
    <div>
        <FilterBtn />
       {
      data.map((data, index) => {
      return <CardContainer data={data} key={index} />;
    })
  }
    </div>
  )
}

export default MapData
