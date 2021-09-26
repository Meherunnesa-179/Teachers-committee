import React from 'react';
import ('./SelectedTeacher.css')

const SelectedTeacher = (props) => {
    const {members} = props;
    const total= members.reduce((previous , current) =>previous + current.salary ,0);
 
    return (
        <div>
                 <h2 className="heading"><i class="fas fa-users"></i> List of Selected Teacher</h2>
                <div className="cart">
                    <h2>Total Members : {props.members.length} <i class="fas fa-check-square"></i></h2>
                    <h3>Total Salary :$ {total} </h3>
                    <ul>
                    {
                       members.map( member=> <li>{ member.name}</li>)
                   }
                    </ul>
                </div>
        </div>
    );
};

export default SelectedTeacher;