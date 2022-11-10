import axiosClient from '../apiClient';

const loginUser = async reqBody => {
  const res = await axiosClient.post('/user/login', reqBody);
  if (res.status !== 200) throw new Error();
  return res;
};

const registerUser = async reqBody => {
  const res = await axiosClient.post('/user/register', reqBody);
  if (res.status !== 201) throw new Error();
  return res;
};

export { loginUser, registerUser };
