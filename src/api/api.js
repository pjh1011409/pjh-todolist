import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseURL = 'https://pre-onboarding-selection-task.shop';

const getApi = async () => {
  const response = await axios.get(`${baseURL}/todos`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });
  return response;
};

const postApi = async text => {
  const data = JSON.stringify({
    todo: text,
  });
  const response = await axios.post(`${baseURL}/todos`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.access_token}`,
    },
  });
  return response;
};

const putApi = async (id, status, newTodo) => {
  const data = JSON.stringify({
    todo: newTodo,
    isCompleted: status,
  });
  const response = await axios.delete(`${baseURL}/api/todos/${id}`, data, {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${localStorage.access_token}`,
    },
  });
  return response;
};

const delApi = async id => {
  const response = await axios.delete(`${baseURL}/api/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.access_token}`,
    },
  });
  return response;
};

export { getApi, postApi, putApi, delApi };
