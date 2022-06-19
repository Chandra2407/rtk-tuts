import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';
import store from './../../app/store';

const UserView = () => {
  const dispatch = useDispatch()

  const user = useSelector((state)=>{
    return state.user
  })

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  return (
    <div>
        <h2>List of Users</h2>
        {user.loading && <div>Loading...</div>}
        {user.loading && user.error ? <div>Error : {user.error}</div>:null}
        {user.users && user.users.map(u=>{
          return <h5 key={u.id}>{u.name}</h5>
        })}
    </div>
  )
}

export default UserView