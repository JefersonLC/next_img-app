const PATH = 'http://localhost:8000/api';

export async function loginUser(values) {
  try {
    const headersList = {
      'Content-Type': 'application/json'
    };
    const bodyContent = JSON.stringify(values);
    const response = await fetch(PATH + '/login', {
      method: 'POST',
      body: bodyContent,
      headers: headersList
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function registerUser(values) {
  try {
    const headersList = {
      'Content-Type': 'application/json'
    };
    const bodyContent = JSON.stringify(values);
    const response = await fetch(PATH + '/users', {
      method: 'POST',
      body: bodyContent,
      headers: headersList
    });
    return response;
  } catch (error) {
    return error;
  }
}
