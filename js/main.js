const usuario1 = {
  nombre: "Junior",
  correo: "junior@gmail.com",
  contraseña: "1104",
};

const usuario2 = {
  nombre: "Maria",
  correo: "maria@gmail.com",
  contraseña: "1234",
};

const usuario3 = {
  nombre: "Cesar",
  correo: "cesar@gmail.com",
  contraseña: "1104",
};

const cuentas = [usuario1, usuario2, usuario3];

let opcion = prompt("Ingresa un número de usuario: 1-Junior 2-Maria 3-Cesar");

if (opcion == 1) {
  alert("Bienvenido " + usuario1.nombre);
} else if (opcion == 2) {
  alert("Bienvenida " + usuario2.nombre);
} else if (opcion == 3) {
  alert("Bienvenido " + usuario3.nombre);
}

alert("Ten en cuenta que si fallas tres veces, no podrás loguearte");

let correoIngresado = prompt("ingrese su correo :D");
let contraseñaIngresada = prompt("Ingrese su contraseña");

function evaluar() {
  for (let x = 0; x < 2; x++) {
    if (usuario1.correo == correoIngresado && usuario1.contraseña == contraseñaIngresada) {
      alert("Accediendo...credenciales ingresadas correctamente");
      break;
    } else if (usuario2.correo == correoIngresado && usuario2.contraseña == contraseñaIngresada) {
      alert("Accediendo...credenciales ingresadas correctamente");
      break;
    } else if (usuario3.correo == correoIngresado && usuario3.contraseña == contraseñaIngresada) {
      alert("Accediendo...credenciales ingresadas correctamente");
      break;
    } else {
      alert("Usted ingreso un correo o contraseña incorrecto, vuelva a ingresar");
      correoIngresado = prompt("ingrese su correo nuevamente ._.");
      contraseñaIngresada = prompt("Ingrese su contraseña");
    }
  }
}

function ver() {
  for (i = 0; i < 2; i++) {
    if (opcion == 1) {
      alert(cuentas[i]);
    }
  }
}

evaluar();

let credencial = prompt("Desea ver sus credenciales? 1-SI 2-NO");

if (credencial == 1) {
  ver();
} else {
  alert("Hasta luego");
}
