import React, {useState} from 'react';


const Search = () => {
  const [val, setVal] = useState([])

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
      <button onClick={() => handleAdd()}>Add</button>
      {val.map((data, i ) => {
        return (
          <div>
            <input type="text" onChange={e=> handleChange(e, i)} placeholder="edsfdhgfhjdsfjad"/>
            {/* <button onClick={() => handleDelete(i)}>X</button> */}
          </div>
        )
      })

      }
    </div>
  );
};


export default Search;