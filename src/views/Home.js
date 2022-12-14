import React from "react";
import Courses from "../components/courses";
import Search  from "../components/search/Search";

const Home = () => {
    const courses = [
        {
            id:0,
            img: 'pict1.jpg',
            duration: '100 ta',
            time: '200 soat',
            course: 'Frontend mutaxasislik kursi',
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English.",
            author: {
                name: 'Aliyev Vali',
                speciality: 'Frontend'
            }
        },
        {
            id:1,
            img: 'pict2.jpg',
            duration: '93 ta',  
            time: '186 soat',
            course: 'Backend mutaxasislik kursi',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            author: {
                name: 'Berdiyev Javohir',
                speciality: 'Backend'
            }
        },
        {
            id:2,
            img: 'pict3.jpg',
            duration: '50 ta',  
            time: '150 soat',
            course: 'Flutter mutaxasislik kursi',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            author: {
                name: 'Jo`rayev Davron',
                speciality: 'Flutter'
            }
        },
    ]
    return(
        <>
            <Search />
            <h1 className="btitle">Barcha kurslar ro'yhati</h1>
            <Courses courses={courses}/>
        </>
    )
}

export default Home