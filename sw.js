// REGISTRO
function registrar() {
  const usuario = document.getElementById("regUsuario").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  if (usuario === "" || email === "" || password === "") {
    alert("Todos los campos son obligatorios");
    return;
  }

  // Guardar datos
  const usuarioData = {
    usuario: usuario,
    email: email,
    password: password
  };

  localStorage.setItem("usuario", JSON.stringify(usuarioData));

  alert("Registro exitoso. Ahora puedes iniciar sesión");
}

// LOGIN
function login() {
  const usuarioLogin = document.getElementById("loginUsuario").value.trim();
  const passwordLogin = document.getElementById("loginPassword").value.trim();

  const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

  if (!usuarioGuardado) {
    alert("No hay usuarios registrados");
    return;
  }

  if (
    usuarioLogin === usuarioGuardado.usuario &&
    passwordLogin === usuarioGuardado.password
  ) {
    document.getElementById("mensaje").innerText =
      "Bienvenido, " + usuarioGuardado.usuario + " 👋";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}
