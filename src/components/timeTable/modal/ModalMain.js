import React, { useState, useContext } from 'react'
import { AllDataBase } from '../../../Context/Context'
import styles from '../timeTable.module.css'
export default function ModalMain() {
  const [name, setName] = useState('')
  const [group, setGroup] = useState('')
  const [room, setRoom] = useState('')
  const [skills, setSkills] = useState('')
  const [startTime, setStarttime] = useState('')
  const [EndTime, setEndTime] = useState('')
  const [calendarList, setCalendarList] = useContext(AllDataBase)
  console.log(calendarList.forEach(el => {
    console.log(el, "el");
    console.log(el.dayWeek, "elweek");
  }));

  const onSubmit = () => {
    setName('')
    setGroup('')
    setRoom('')
    setSkills('')

    setCalendarList(prev => [
      ...prev, { id: prev.length + 1, startTime: startTime, endTime: EndTime, dayWeek: [{ teacher: name, group: group, room: room }] }
    ]
    )





    console.log(name, group, room);
  }
  return (
    <div>
      <input className={styles.input} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Ism...' />
      <input className={styles.input} type="text" name="group" value={group} onChange={(e) => setGroup(e.target.value)} placeholder='Group...' />
      <input className={styles.input} type="text" name="room" value={room} onChange={(e) => setRoom(e.target.value)} placeholder='Xona...' />
      <input className={styles.input} type="text" name="skills" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder='setSkills...' />
      <label htmlFor='dat'>start
        <input className={styles.input} type="time" name="time" value={startTime} onChange={(e) => setStarttime(e.target.value)} placeholder='setStarttime...' />
      </label>
      <label htmlFor='dat'> end
        <input className={styles.input} type="time" name="time" value={EndTime} onChange={(e) => setEndTime(e.target.value)} placeholder='setEndTime...' />

      </label>
      <button type="" onClick={onSubmit}>Add Teacher</button>
    </div>
  )
}
