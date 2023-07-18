import instance from '../axios';

export const getUserData = async () => {
  const response = await instance.get('api/user');
  return response;
};
