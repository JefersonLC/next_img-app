export function loginUser(values) {
  const headersList = {
    'Content-Type': 'application/json'
  };

  const bodyContent = JSON.stringify(values);

  fetch('http://localhost:8000/api/login', {
    method: 'POST',
    body: bodyContent,
    headers: headersList
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Error al iniciar sesión');
      }
      res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => {
      // Maneja errores de la solicitud HTTP
      console.error(error);
      // Actualiza el estado del componente o muestra mensajes de error en la interfaz de usuario
    });
}
