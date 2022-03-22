import React, {useEffect} from 'react';
import axios from 'axios';
import HouseCard from '../HouseCard';

const ListOfHouses = () => {

  useEffect( () => {
    axios.get('houses.json')
    .then(res => console.log(res.data))
  }, [] )

  return (
    <div>listofhouser</div>
  )
};

export default ListOfHouses;
