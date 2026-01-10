const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const mensaje = document.getElementById("mensaje");

// Cambiar formularios
function mostrarRegistro() {
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
  mensaje.innerText = "";
}

function mostrarLogin() {
  registerForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
  mensaje.innerText = "";
}

// REGISTRO
registerForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const usuario = {
    user: document.getElementById("regUser").value,
    email: document.getElementById("regEmail").value,
    pass: document.getElementById("regPass").value
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));
  mensaje.innerText = "Registro exitoso. Ahora inicia sesión";
  mostrarLogin();
});

// LOGIN
loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) {
    mensaje.innerText = "No hay usuarios registrados";
    return;
  }

  if (user === usuario.user && pass === usuario.pass) {
    // Guardar sesión
    localStorage.setItem("sesion", "true");
    localStorage.setItem("usuarioActivo", usuario.user);

    // Redirigir al index principal
    window.location.href = "index2.html";
  } else {
    mensaje.innerText = "Usuario o contraseña incorrectos";
  }
});
