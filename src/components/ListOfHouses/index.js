import React, {useState, useEffect} from 'react';
import axios from 'axios';
import HouseCard from '../HouseCard';
import './styles.scss';

const ListOfHouses = () => {

  const [houses, setHouses] = useState([]);

  // fetch data
  useEffect( () => {
    axios.get('houses.json')
    .then(response => setHouses(response.data.houses))
  }, [] )

  const renderHouses = () => {
    return houses.map((house) => {
      return (
        <HouseCard house={house} key={house.image} />
      )
    })
  };

  return (
    <div className="c-cards-list">
      {renderHouses()}
    </div>
  )
};

export default ListOfHouses;
