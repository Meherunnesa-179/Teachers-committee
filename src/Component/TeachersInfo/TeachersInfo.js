import React from 'react';
import ('./TeachersInfo.css')

const TeachersInfo = (props) => {
    // console.log(props)
    const {name , weblink , designation , image , phone , mail , salary } = props.person;
    // console.log(props);
    return (
        <div className ="teachers-container">
            <img src={image} alt="" />
            <h4>Name : {name}</h4>
            <h5>Designation : {designation}</h5>
            <h6>Phone : {phone}</h6>
            <h5>Mail : {mail}</h5>
            <p>Weblink : {weblink}</p>
            <h4>Salary : ${salary} </h4>
            <button onClick = {() => props.handleAddMember(props.person)} className ="add-btn"> <i class="fas fa-directions"></i> Add To Committee</button>
        </div>
    );
};

export default TeachersInfo;