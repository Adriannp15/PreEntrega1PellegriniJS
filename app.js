//Sistema interactivo para calcular pago de un monto en cuotas

// Función para calcular los pagos en cuotas
function calcularCuotas(monto, cantidadCuotas) {
    let cuota = monto / cantidadCuotas; // Calcular el monto de cada cuota
  
    // Mostrar los resultados utilizando alerts
    alert(`El monto total es: ${monto}`);
    alert(`La cantidad de cuotas es: ${cantidadCuotas}`);
    alert(`El monto de cada cuota es: ${cuota}`);
  }
  
  // Función para verificar si el usuario desea continuar
  function deseaContinuar() {
    let respuesta = prompt('¿Desea calcular otra vez? (Si/No)').toLowerCase();
    return respuesta === 'si';
  }
  
  // Ejecutar el programa principal
  do {
    let monto = Number(prompt('Ingrese el monto total:'));
    let cantidadCuotas = Number(prompt('Ingrese la cantidad de cuotas:'));
  
    calcularCuotas(monto, cantidadCuotas);
  } while (deseaContinuar());
  