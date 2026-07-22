Enunciado
Crea una aplicación para buscar películas

API a usar: - https://www.omdbapi.com/ Consigue la API Key en la propia página web registrando tu email.

Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.

✅ Lista las películas y muestra el título, año y poster.

✅ Que el formulario funcione

✅ Haz que las películas se muestren en un grid responsive.

✅ Hacer el fetching de datos a la API

Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas.

Haz que la búsqueda se haga automáticamente al escribir.

Evita que se haga la búsqueda continuamente al escribir (debounce)

## testing plawright

🟢 Básico (funcionalidad esencial)

✅1. Abrir la app y verificar que el input de búsqueda está visible.
✅2. Escribir un texto en el input y comprobar que se refleja correctamente.
✅3. Hacer clic en el botón de buscar y validar que aparecen resultados.
✅4. Buscar una película conocida (“Avenger”) y confirmar que aparece en la lista.
✅5. Buscar un título inexistente y validar que se muestra el mensaje de “sin resultados”.
✅6. Verificar que cada resultado muestra título, año y póster.
✅7. Comprobar que el botón de búsqueda está deshabilitado si el input está vacío.

---

🟡 Intermedio (flujo y lógica)

8. Escribir en el input y validar que la búsqueda se dispara automáticamente sin pulsar el botón.
✅9. Probar que al borrar el texto del input se limpia la lista de resultados.
✅10. Buscar varias películas seguidas y confirmar que la lista se actualiza correctamente.
✅11. Validar que los resultados se muestran en formato de cuadrícula.
✅12. Comprobar que el scroll funciona cuando hay muchos resultados.
✅13. Probar que el input mantiene el valor tras la búsqueda.
14. Validar que se pueden usar mayúsculas/minúsculas indistintamente (“matrix” vs “Matrix”).

---

🔴 Avanzado (robustez y edge cases)

15. Simular una búsqueda con caracteres especiales (“@#$%”) y validar que no rompe la app.
16. Probar una búsqueda muy larga (>100 caracteres) y confirmar que se maneja correctamente.
17. Validar que la app muestra un mensaje de error si la API devuelve fallo.
18. Simular desconexión de red y comprobar que se muestra feedback adecuado.
19. Probar que al recargar la página se mantiene el último término buscado.
20. Validar que el hook useMovies no dispara múltiples fetch innecesarios (optimización).
21. Probar que la app no se bloquea si la API devuelve resultados vacíos.

---

🚀 Experto (flujo completo y accesibilidad)

22. Simular un flujo completo: abrir → buscar → ver resultados → limpiar → recargar.
23. Validar que los resultados se actualizan en menos de X segundos (performance).
24. Probar que los elementos tienen etiquetas accesibles (aria-label, alt en imágenes).
25. Navegar con teclado (Tab/Enter) y confirmar que se puede buscar sin mouse.
26. Validar que los mensajes de error son legibles por screen readers.
27. Probar que el layout se adapta en pantallas pequeñas (responsive).
28. Simular múltiples usuarios buscando al mismo tiempo (concurrent requests).
29. Validar que la app no hace llamadas duplicadas a la API al escribir rápido.
30. Probar que se puede copiar el título de una película desde la interfaz (usabilidad).
