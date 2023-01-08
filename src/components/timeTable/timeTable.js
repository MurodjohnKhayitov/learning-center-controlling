import React, { useState, useContext } from "react";
import { AllDataBase } from "../../Context/Context";
import ModalInfo from "./modal";
import "./timeTable.scss";
import styles from './timeTable.module.css'
import Schedule from "./Schudule";
import ModalMain from "./modal/ModalMain";
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
    name: "Abdullayev Abos"
  },
  {
    id: "2",
    name: "Kompyuter",
  },
  {
    id: "3",
    name: "Naushnik",
  },
]
const courses = [
  {
    id: "4",
    speciality: "G1"
  },
  {
    id: "5",
    speciality: "315"
  },
  {
    id: "6",
    speciality: "F-30"
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
  const [calendarList, setCalendarList] = useContext(AllDataBase)

  return (
    <div className="time__parent">
      <div className="d-flex justify-content-between align-center timetable">
        <div className="btitle">Dars jadvali</div>
        < ModalInfo teachers={teachers} courses={courses} rooms={rooms} />
        {/* <ModalMain /> */}
      </div>

      <div className="">
        <h1 className="btitle">O'qituvchining dars jadvali</h1>
        <table className={styles.MainTable}>
          <thead>
            <tr>
              <th>Time</th>
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

            {calendarList.map(table => (

              <tr key={table.id}>
                <td>{table.startTime}-{table.endTime}</td>

                {table?.dayWeek?.map((day, id) => (

                  <td key={id} className={`${day?.teacher ? styles.haveData : styles.noData}`}>
                    <div className={styles.name}>{day?.teacher}</div>
                    <div className={styles.name}>{day?.group}</div>
                    <div className={styles.name}>{day?.room}</div>
                    <div className={styles.name}>{day?.skills}</div>
                  </td>

                ))}
              </tr>

            ))}
          </tbody>
        </table>
      </div>
      {/* <Schedule /> */}

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