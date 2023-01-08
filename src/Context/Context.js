import { createContext, useState } from "react"

export const AllDataBase = createContext()

export const DataContext = ({ children }) => {
    const [calendarList, setCalendarList] = useState([
        {
            id: 1,
            startTime: '9:00',
            endTime: '11-00',
            dayWeek: [
                {
                    id: 1,
                    teacher: 'Aliyev Vali',
                    group: 'Group 001',
                    room: 'Xona 11',
                    skills: "Front-End",

                },
                {
                    id: 2,
                    teacher: '',
                    group: '',
                    room: '',
                    skills: ""
                },
                {
                    id: 3,
                    teacher: 'Aliyev Vali',
                    group: 'Group 001',
                    room: 'Xona 11',
                    skills: "Front-End"
                },
                {
                    id: 4,
                    teacher: '',
                    group: '',
                    room: '',
                    skills: ""
                },
                {
                    id: 5,
                    teacher: 'Aliyev Vali',
                    group: 'Group 001',
                    room: 'Xona 11',
                    skills: "Front-End"
                },
                {
                    id: 6,
                    teacher: '',
                    group: '',
                    room: '',
                    skills: ""
                },
                {
                    id: 7,
                    room: 'No Data',

                },
            ]
        },
        {
            id: 2,
            startTime: '11:00',
            endTime: '12-00',
            dayWeek: [
                {
                    id: 1,
                    teacher: 'Muhtarov Jamshid',
                    group: 'Group 003',
                    room: 'Xona 5',
                    skills: "Back-End"
                },
                {
                    id: 2,
                    teacher: '',
                    group: '',
                    room: '',
                    skills: ""
                },
                {
                    id: 3,
                    teacher: 'Muhtarov Jamshid',
                    group: 'Group 003',
                    room: 'Xona 5', skills: "Back-End"

                },
                {
                    id: 4,
                    teacher: '',
                    group: '',
                    room: '', skills: ""

                },
                {
                    id: 5,
                    teacher: 'Muhtarov Jamshid',
                    group: 'Group 003',
                    room: 'Xona 5', skills: "Back-End"

                },
                {
                    id: 6,
                    teacher: '',
                    group: '',
                    room: '', skills: ""

                },
                {
                    id: 7,
                    room: 'No Data',

                },
            ]
        },
        {
            id: 3,
            startTime: '14:00',
            endTime: '16-00',
            dayWeek: [
                {
                    id: 1,
                    teacher: '',
                    group: '',
                    room: '', skills: ""

                },
                {
                    id: 2,
                    teacher: 'Samandarov Ulugbek',
                    group: 'Group 007',
                    room: 'Xona 8',
                    skills: "Mobile-App"
                },
                {
                    id: 3,
                    teacher: '',
                    group: '',
                    room: '', skills: ""

                },
                {
                    id: 4,
                    teacher: 'Samandarov Ulugbek',
                    group: 'Group 007',
                    room: 'Xona 8', skills: "Mobile-App"

                },
                {
                    id: 5,
                    teacher: '',
                    group: '',
                    room: '', skills: ""

                },
                {
                    id: 6,
                    teacher: 'Samandarov Ulugbek',
                    group: 'Group 007',
                    room: 'Xona 8', skills: "Mobile-App"

                },
                {
                    id: 7,
                    room: 'No Data',

                },
            ]
        },
        {
            id: 4,
            startTime: '17:00',
            endTime: '19-00',
            dayWeek: [
                {
                    id: 1,
                    teacher: 'Karimov Ismoil',
                    group: 'Group 004',
                    room: 'Xona 9',
                    skills: "Cyber Security"
                },
                {
                    id: 2,
                    teacher: 'Mirzayev Azizbek',
                    group: 'Group 002',
                    room: 'Xona 12',
                    skills: "Game Developer"
                },
                {
                    id: 3,
                    teacher: 'Karimov Ismoil',
                    group: 'Group 004',
                    room: 'Xona 9', skills: "Cyber Security"

                },
                {
                    id: 4,
                    teacher: 'Mirzayev Azizbek',
                    group: 'Group 002',
                    room: 'Xona 12', skills: "Game Developer"

                },
                {
                    id: 5,
                    teacher: 'Karimov Ismoil',
                    group: 'Group 004',
                    room: 'Xona 9', skills: "Cyber Security"

                },
                {
                    id: 6,
                    teacher: 'Mirzayev Azizbek',
                    group: 'Group 002',
                    room: 'Xona 12', skills: "Game Developer"

                },
                {
                    id: 7,
                    room: 'No Data',

                },
            ]
        }
       

    ])
    return (
        <AllDataBase.Provider value={[calendarList, setCalendarList]}>
            {children}
        </AllDataBase.Provider>
    )
}

