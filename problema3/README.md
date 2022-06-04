# Proyecto Número 3

Consta de una serie de 8 validaciones para obtener una contraseña segura.
Estas validaciones son:

- Debe tener al menos 16 caracteres.
- Debe tener letras minúsculas y mayúsculas.
- No puede tener 2 letras iguales consecutivas.
- Debe contener al menos 4 números.
- No puede tener 2 números iguales consecutivos.
- Debe tener al menos 2 caracteres especiales (!@#$%ˆ&\*-\_+=?) pero ninguno de ellos puede repetirse en ninguna posición y además los caracteres no pueden estar juntos.
- No se puede usar el número 0.
- No se puede colocar espacios.
  Y finalmente posee una validación que verifica que se cumplan todas las anteriores en simultáneo.

## Cómo ejecutar el programa

En la variable de la línea 1 del proyecto colocar un string con la contraseña que deseemos verificar.

```bash
  let password = 'gonzalez46%2A&s@24gabriel';
```

Iniciar la prueba para ver en consola el resultado.

```bash
  node index.js
```
