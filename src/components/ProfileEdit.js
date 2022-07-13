import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import { deleteUser, updateUser } from '../redux/slices/userSlice';
import Button from './Button/Button';
import Input from './Input/Input';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    `;

function ProfileEdit() {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: '',
        email: ''
    })
    const clickHandler = () => {
        dispatch(updateUser(user));
    }
    const deleteHandler = () => {
        dispatch(deleteUser());
    }
    
  return (<>
    <Wrap>
        <Input type= "text" placeholder="Enter your Name" value={user.name} onChange={e => setUser({...user,name:e.target.value})} />
        <Input type="email" placeholder="Enter your Email" value={user.email} onChange={e => setUser({...user,email:e.target.value})} />
        <Button onClick={clickHandler}>Update</Button>
        <Button onClick={deleteHandler}>Delete Profile</Button>
    </Wrap>
    </>
  )
}

export default ProfileEdit