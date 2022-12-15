import React from 'react';
import { Select, Tag } from 'antd';
// import { Option } from './Option';


const options = [
  {
      id: "1",
      name: "Ali Valiyev",
      specialist: "Frontend",
      data: "18:00"
  },
  {
      id: "2",
      name: "Ali Valiyev",
      specialist: "Frontend",
      data: "18:00"
  },
  {
      id: "3",
      name: "Ali Valiyev",
      specialist: "Frontend",
      data: "18:00"
  },
  {
      id: "4",
      name: "Ali Valiyev",
      specialist: "Frontend",
      data: "18:00"
  },
]


const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
      }}
    >
      {label}
    </Tag>
  );
};


const SelectTable = () => (
  <Select
    mode="multiple"
    showArrow
    tagRender={tagRender}
    placeholder="hello"

    style={{
      width: '100%',
      marginBottom: "20px"
    }}
    options={options}
  >
    
  </Select>
);


export default SelectTable;