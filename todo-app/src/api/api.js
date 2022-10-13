const baseUrl = 'https://pre-onboarding-selection-task.shop';

const get = async endpoint => {
  const url = baseUrl + endpoint;
  const res = await fetch(`${url}${endpoint}`, {
    headers: { Authorization: `${localStorage.getItem('token')}` },
  });
  const result = await res.json();
  return result;
};

const post = async (endpoint, data) => {
  const url = baseUrl + endpoint;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  return result;
};

const put = async (endpoint, data) => {
  const url = baseUrl + endpoint;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  return result;
};

const del = async endpoint => {
  const url = baseUrl + endpoint;
  const res = await fetch(url, {
    method: 'DELETE',
    headers: { Authorization: `${localStorage.getItem('token')}` },
  });
  const result = await res.json();
  return result;
};

export { get, post, put, del as delete };
