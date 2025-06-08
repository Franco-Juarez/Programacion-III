# Gestión de Turnos para Clínica

Bienvenidos a nuestra aplicación backend para la gestión de turnos médicos en una clínica, desarrollada con **Node.js**, **Express.js**, **EJS** y **SQLite**. Incluye autenticación JWT, validaciones con Joi y endpoints RESTful para pacientes, administradores y turnos.

---

## Instalación

1. **Clonar el repositorio**
   ```sh
   git clone https://github.com/Franco-Juarez/Programacion-III.git
   cd "Trabajo Práctico III"
   ```

2. **Instalar dependencias**
   ```sh
   npm install
   ```

3. **Configurar variables de entorno**
   - Copiar `.env.template` a `.env` y ajustar los valores si es necesario.

4. **Iniciar el servidor**
   ```sh
   npm run dev
   ```
   El servidor estará disponible en [http://localhost:3000](http://localhost:3000)

---

## Endpoints principales

### Autenticación de Paciente

- **Login de paciente**
(podés usar cualquier de los que están en la base de datos)
  ```http
  POST /api/v1/pacientes/login
  Content-Type: application/json

  {
    "email": "franmastan@gmail.com",
    "password": "1234521"
  }
  ```

### Turnos (Paciente)

- **Listar los turnos**
  ```http
  GET /api/v1/turnos
  Authorization: <TOKEN>
  ```

- **Consultar turnos de un paciente**
  ```http
  GET /api/v1/turnos/{idPaciente}
  Authorization: <TOKEN>
  ```

- **Crear un nuevo turno**
  ```http
  POST /api/v1/turnos
  Content-Type: application/json
  Authorization: <TOKEN>

  {
    "fecha": "2024-03-20",
    "hora": "14:30",
    "idPaciente": 3
  }
  ```

- **Actualizar un turno**
  ```http
  PUT /api/v1/turnos/{idTurno}
  Content-Type: application/json
  Authorization: <TOKEN>

  {
    "fecha": "2024-03-21",
    "hora": "15:00",
    "idPaciente": 3
  }
  ```

- **Cancelar un turno**
  ```http
  DELETE /api/v1/turnos/{idTurno}
  Authorization: <TOKEN>
  ```

---

### Administración

- **Login de admin**
  ```http
  POST /api/v1/admin/login
  Content-Type: application/json

  {
    "email": "admin@admin.com",
    "password": "admin123"
  }
  ```

- **Crear un nuevo turno (como admin)**
  ```http
  POST /api/v1/admin/turnos
  Content-Type: application/json
  Authorization: <TOKEN_ADMIN>

  {
    "fecha": "2024-03-20",
    "hora": "14:30",
    "idPaciente": 1
  }
  ```

- **Listar todos los turnos (como admin)**
  ```http
  GET /api/v1/admin/turnos
  Authorization: <TOKEN_ADMIN>
  ```

- **Consultar turno por ID (como admin)**
  ```http
  GET /api/v1/admin/turnos/{idTurno}
  Authorization: <TOKEN_ADMIN>
  ```

- **Cancelar un turno (como admin)**
  ```http
  DELETE /api/v1/admin/turnos/{idTurno}
  Authorization: <TOKEN_ADMIN>
  ```

---

### Pacientes

- **Crear un nuevo paciente**
  ```http
  POST /api/v1/pacientes
  Content-Type: application/json
  Authorization: <TOKEN_ADMIN>

  {
    "dni": "37025550",
    "nombre": "Roberto",
    "apellido": "Solari",
    "email": "siesmail@gmail.com",
    "password": "1232556"
  }
  ```

- **Listar todos los pacientes**
  ```http
  GET /api/v1/pacientes
  Authorization: <TOKEN_ADMIN>
  ```

- **Consultar paciente por ID**
  ```http
  GET /api/v1/pacientes/{id}
  Authorization: <TOKEN_ADMIN>
  ```

- **Actualizar un paciente**
  ```http
  PUT /api/v1/pacientes/{id}
  Content-Type: application/json
  Authorization: <TOKEN_ADMIN>

  {
    "dni": "12345678",
    "nombre": "Juan",
    "apellido": "Perez",
    "email": "juanperez@gmail.com",
    "password": "12345678"
  }
  ```

- **Eliminar un paciente**
  ```http
  DELETE /api/v1/pacientes/{id}
  Authorization: <TOKEN_ADMIN>
  ```

---

## Validaciones

- Todas las rutas usan **validaciones con Joi** para asegurar que los datos enviados sean correctos.
- Si los datos no cumplen el esquema, la API responde con error 400 y un mensaje descriptivo.

---

## Autenticación

- El sistema utiliza **JWT**.
- El token se debe enviar en el header `Authorization` en cada request protegido.
- El backend **no almacena tokens**: el cliente es responsable de guardarlo y enviarlo.

---

## Estructura del proyecto

```
src/
  controllers/
  middlewares/
  models/
  routes/
  schemas/
  utils/
  views/
```


## 👥 Equipo  
| Nombre               | Rol          |  
|----------------------|--------------|  
| Lucía Canclini       | Desarrollo   |  
| Franco Juárez        | Desarrollo   |  
| Rodrigo Álvarez      | Desarrollo   |  
| Juan Baranovsky      | Desarrollo   |  


---

## Capturas de pantalla
### 1. Clonar repositorio e instalacion
![Clonar Repo](/Programacion-III//Trabajo%20Práctico%20III//src/utils/images/01_Clonado_GIT_npm_install.png)

### 2. Iniciar el servidor
![Iniciar servidor](/Programacion-III/Trabajo%20Práctico%20III//src/utils/images/02_run_dev.png)


### 3. Vista de turnos
![Vista de turnos](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/03_visual_turnos.png)

### 4. Obtener turno por paciente
![Get turno por paciente](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/04_get_turno_por_paciente.png)

### 5. Visualización de pacientes
![Visual pacientes](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/04_visual_pacientes.png)

### 6. Token de administrador
![Token admin](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/05_post_token_admin.png)

### 7. Obtener turnos
![Get turnos](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/06_get_turnos.png)

### 8. Obtener turnos (Visual)
![Get turnos v2](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/07_get_turnos_2.png)

### 9. Obtener turno para paciente
![Post turno paciente](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/08_post_turno_para_paciente.png)

### 10. Obtener turnos nuevo por paciente
![Get turnos nuevo](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/09_get_turnos_nuevo_por_paciente.png)

### 11. Eliminar turno
![Delete turno](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/10_delete_turno.png)

### 12. Modificar turno (PUT)
![PUT turno modificado](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/11_put_turno_modificado.png)

### 13. Modificar turno (GET)
![GET turno modificado](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/12_get_turno_modificado.png)

### 14. Obtener pacientes
![Get pacientes](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/13_get_pacientes.png)

### 15. Cargar paciente
![Post paciente cargar](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/14_post_paciente_cargar.png)

### 16. Obtener paciente nuevo
![Get paciente nuevo](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/15_get_paciente_nuevo.png)

### 17. Obtener paciente por ID
![Get paciente por ID](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/16_get_paciente_por_ID.png)

### 18. Obtener paciente por ID (Visual)
![Get paciente por ID B](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/16b_get_paciente_por_ID.png)

### 19. Modificar paciente (PUT)
![PUT paciente modificado](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/17_put_paciente_modificado.png)

### 20. Error al modificar paciente
![Error PUT paciente](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/17b_put_paciente_modificado.png)

### 21. Error: paciente no existe
![Error paciente no existe](/Programacion-III/Trabajo%20Práctico%20III/src/utils/images/18_error_put_paciente_no_existe.png)

---

