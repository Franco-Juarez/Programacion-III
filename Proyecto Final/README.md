# 📘 Proyecto Final entrega parcial – Programación III

---

## 🚀 Instrucciones para correr el proyecto

### 1. Clonar el repositorio

```bash
git clone git@github.com:Franco-Juarez/Programacion-III.git
```

### 2. Ingresar a la carpeta del proyecto

```bash
cd Programacion-III/Proyecto\ Final
```

### 3. Crear el archivo .env usando el template
```bash
cp .env.template .env
```

### 4. Construir los contenedores con Docker
```bash
docker compose build
o
docker-compose build
```
### 5. Levantar los servicios
```bash
docker compose up
o
docker-compose up
```
### 6. Acceder a la consola del contenedor del backend
```bash
docker compose exec backend sh
```
### 7. Ejecutar migraciones y seeders
```bash
npx sequelize-cli db:migrate:undo:all && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all
```

### 8. Acceder a la aplicacion

#### Frontend: http://localhost:3000
#### API: http://localhost:3001
1. GET LIBROS http://localhost:3001/api/libros
2. GET COMENTARIOS http://localhost:3001/api/comentarios
#### pgAdmin: http://localhost:5050
1.  POSTGRES_DB: app_database
2.  POSTGRES_USER: app_user
3.  POSTGRES_PASSWORD: app_password