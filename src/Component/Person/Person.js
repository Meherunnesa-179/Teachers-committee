import React, { useEffect, useState } from 'react';
import SelectedTeacher from '../SelectedTeacher/SelectedTeacher';
import TeachersInfo from '../TeachersInfo/TeachersInfo';
import ('./Person.css')

const Person = () => {
    const [persons , setPersons] = useState([]);
    const [members , setMembers] = useState([]);
    useEffect( () => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setPersons(data))
    }, [])

    const handleAddMember = (person) => {
            const newMember = [...members , person];
            setMembers(newMember);
    }
    return (
        <div className ="persons-container">
            <div className="info-container">
                    {
                        persons.map(person => <TeachersInfo
                            key = {person.mail}
                            person ={person}
                            handleAddMember = {handleAddMember}></TeachersInfo>)
                    }
            </div>
            <div className="total-container">
                    <SelectedTeacher members = {members}></SelectedTeacher>  
            </div>
        </div>
    );
};

export default Person;