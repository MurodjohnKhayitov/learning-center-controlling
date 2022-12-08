import React from "react";

const Instructor = () => {

    const instructor = [
        {
            fullname: 'Aliyev Vali',
            age: 29,
            speciality: 'FrontEnd teacher',
            workTime: '9:00-11:00'
        },
        {
            fullname: 'Salimov Bekzod',
            age: 35,
            speciality: 'Flutter teacher',
            workTime: '9:00-11:00'
        },
    ]

    return(
        <>
            <div class="instructor">
                <h1>O'qituvchi sahifasi</h1>
                <div class="instructor__img"></div>
                <div class="instructor__name">Aliyev vali</div>
                <div class="instructor__spec">Frontend O'qituvchi</div>
                <div class="instructor__worktime">9:00-18:00</div>
            </div>
        </>
    )
}

export default Instructor