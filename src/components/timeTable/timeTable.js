import React, { useState } from "react";
import ModalInfo from "./modal";
import "./timeTable.scss";

// const data = [
//   {
//     monday: [
//       {
//         id: 1,
//         name: "Aliyev Vali",
//         Group: "Frontend(react)",
//         room: "Xona 1",
//         time: '09:00-11:00'
//       },
  
//       {
//         id: 2,
//         name: "Jurayeva Sabina",
//         Group: "Frontend(Vue)",
//         room: "Xona 2",
//         time: '11:00-13:00'
//       },
//     ],
//   },
//   {
//     tuesday: [
//       {
//         id: 5,
//         name: "Aliyev Vali",
//         Group: "Frontend(react)",
//         room: "Xona 1",
//         time: '09:00-11:00'
//       },
//       {
//         id: 6,
//         name: "Aliyev Vali",
//         Group: "Frontend(react)",
//         room: "Xona 1",
//         time: '09:00-11:00'
//       },
//       {
//         id: 7,
//         name: "Aliyev Vali",
//         Group: "Frontend(react)",
//         room: "Xona 1",
//         time: '09:00-11:00'
//       },
//       {
//         id: 8,
//         name: "Aliyev Vali",
//         Group: "Frontend(react)",
//         room: "Xona 1",
//         time: '09:00-11:00'
//       }
//     ],
//   },{
//     wednesday: [
//       {
//         id: 7,
//         name: "Aliyev Vali",
//         Group: "Frontend(react)",
//         room: "Xona 1",
//         time: '09:00-11:00'
//       },
//       {
//         id: 4,
//         name: "Aliyev Vali",
//         Group: "Frontend(react)",
//         room: "Xona 1",
//         time: '09:00-11:00'
//       }
//     ],
//   },{
//     thursday: [
//       {
//         id: 7,
//         name: "Aliyev Vali",
//         Group: "Frontend(react)",
//         room: "Xona 1",
//         time: '09:00-11:00'
//       },
//       {
//         id: 4,
//         name: "Aliyev Vali",
//         Group: "Frontend(react)",
//         room: "Xona 1",
//         time: '09:00-11:00'
//       }
//     ],
//   },{
//     friday: [
//       {
//         id: 7,
//         name: "Aliyev Vali",
//         Group: "Frontend(react)",
//         room: "Xona 1",
//         time: '09:00-11:00'
//       },
//       {
//         id: 4,
//         name: "Aliyev Vali",
//         Group: "Frontend(react)",
//         room: "Xona 1",
//         time: '09:00-11:00'
//       }
//     ],
//   },{
//     saturday: [
//       {
//         id: 7,
//         name: "Aliyev Vali",
//         Group: "Frontend(react)",
//         room: "Xona 1",
//         time: '09:00-11:00'
//       },
//       {
//         id: 4,
//         name: "Aliyev Vali",
//         Group: "Frontend(react)",
//         room: "Xona 1",
//         time: '09:00-11:00'
//       }
//     ],
//   },{
//     sunday: []
//   }
// ]

const teachers = [
  {
      id: "1",
      name: "Ali Valiyev"
  },
  {
      id: "2",
      name: "Valiyev Ali",
  },
  {
      id: "3",
      name: "Jurayeva Sabina",
  },
]
const courses = [
  {
      id: "4",
      speciality: "Frontend"
  },
  {
      id: "5",
      speciality: "Backend"
  },
  {
      id: "6",
      speciality: "Flutter"
  },
]
const rooms = [
  {
      id: "7",
      room: "Xona 1"
  },
  {
      id: "8",
      room: "Xona 2"
  },
  {
      id: "9",
      room: "Xona 3"
  },
]
 
const TimeTable = () => {
  
  return (
    <div className="time__parent">
      <div className="d-flex justify-content-between align-center timetable">
        <div className="btitle">Dars jadvali</div>
        < ModalInfo teachers={teachers} courses={courses} rooms={rooms}/> 
      </div>

      <div className="">
        <h1 className="btitle">O'qituvchining dars jadvali</h1>
        <table>
          <thead>
            <tr>
              <th>Dushanba</th>
              <th>Seshanba</th>
              <th>Chorshanba</th>
              <th>Payshanba</th>
              <th>Juma</th>
              <th>Shanba</th>
              <th>Yakshanba</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {teachers.map((item,id) => {
                  <td key={id}>
                      {/* <div>{item.monday.name}</div> */}
                  </td>
              })}
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
    </div>

    </div>
  );
};

export default TimeTable;


// {data.map( item => (
//   <tr key={item.id}>
//     {item?.rooms?.map((room, id) => (
//         <td key={id}>
//           <div className="name">{room.name}</div>
//           <div className="name">{room.group}</div>
//           <div className="name">{room.room}</div>
//           <div className="name">{room.date}</div>
//         </td>
//     ))}
// </tr>   
// ))}