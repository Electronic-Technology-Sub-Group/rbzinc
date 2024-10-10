import instance from '../index'

export const userLoginService = (username,password) => {
  return instance.post('/user/login', {username,password})
}

export const userRegisterService = ({username,password}) => {
  return instance.post('/user/register',{username,password})
}
