import React from "react";
import Courses from "../components/courses";

const Home = () => {
    const courses = [
        {
            id:0,
            img: 'https://postila.ru/data/a5/ef/14/bd/a5ef14bdafa593594d27d9b6473f35a4132ca79d0f4f5d4eac0b7edbe14c62a2.jpg',
            duration: '100 ta',
            time: '22 soat',
            course: 'Frontend mutaxasislik kursi',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            author: {
                name: 'Aliyev Vali',
                speciality: 'Frontend'
            }
        },
        {
            id:1,
            img: 'https://yandex.ru/images/search?text=images+person&img_url=http%3A%2F%2Fi.pinimg.com%2Foriginals%2Ffc%2F67%2F03%2Ffc6703e79d41363832817cbdf297beaa.jpg&pos=7&rpt=simage&stype=image&lr=10335&parent-reqid=1670821692631829-17426207716315213589-sas3-0973-1aa-sas-l7-balancer-8080-BAL-5901&source=serp',
            duration: '93 ta',
            time: '25 soat',
            course: 'Backend mutaxasislik kursi',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            author: {
                name: 'Berdiyev Javohir',
                speciality: 'Backend'
            }
        },
    ]
    return(
        <>
            <h1 className="btitle">Barcha kurslar ro'yhati</h1>
            <Courses courses={courses}/>

        </>
    )
}

export default Home