import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { data } from './data';

import "./Search.css"


const Search = () => {
    const [carList, setCarList] = useState(data);
    const [searchTerm, setSearchTerm] = useState("");
    // const [val, setVal] = useState([])

    const filterCars = (searchText, listOfCars) => {
        if (!searchText) {
          return listOfCars;
        }


import "./Search.css"


const Search = () => {
    const [carList, setCarList] = useState(data);
    const [searchTerm, setSearchTerm] = useState("");
    const [val, setVal] = useState([])

    const filterCars = (searchText, listOfCars) => {
      if (!searchText) {
        return listOfCars;
      }
  
        return listOfCars.filter(({ car_model }) =>
          car_model.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    useEffect(() => {
        const Debounce = setTimeout(() => {
          const filteredCars = filterCars(searchTerm, data);
          setCarList(filteredCars);
        }, 300);
        return () => clearTimeout(Debounce);
    }, [searchTerm]);


  

    const handleAdd = () => {
      const abc=[...val, []]
      setVal(abc)
    }

    const handleChange = (onchangeValue, i) => {
        const inputData = [...val];
        inputData[i]=onchangeValue.target.value
    };

  


import "./Search.scss"


const Search = () => {
  
    const [carList, setCarList] = useState(data);
    const [searchTerm, setSearchTerm] = useState("");
    const [val, setVal] = useState([])

    const filterCars = (searchText, listOfCars) => {
      if (!searchText) {
        return listOfCars;
      }

  
        return listOfCars.filter(({ car_model }) =>
          car_model.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    useEffect(() => {
        const Debounce = setTimeout(() => {
          const filteredCars = filterCars(searchTerm, data);
          setCarList(filteredCars);
        }, 300);
        return () => clearTimeout(Debounce);
    }, [searchTerm]);


    // const handleAdd = () => {
    //   const abc=[...val, []]
    //   setVal(abc)
    // }

    // const handleChange = (onchangeValue, i) => {
    //     const inputData = [...val];
    //     inputData[i]=onchangeValue.target.value
    // };

  

    const handleAdd = () => {
      const abc=[...val, []]
      setVal(abc)
    }

    const handleChange = (onchangeValue, i) => {
        const inputData = [...val];
        inputData[i]=onchangeValue.target.value
    };

  




 
  return (
    <div>
      <div className="container">
        <div className="list">
          <form className="form" action="#">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form__input"
              type="text"
              placeholder="Search contacts"
            />
          </form>

          <ul className="">
            {carList.map((car, index) => {
              return (
                <Link to="/" key={index}>
                  {car.car_model}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

    </div>
  );
};


export default Search;





export default Search;


