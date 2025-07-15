# 🚀 Proyecto Final (Entrega Final) - Sistema Web Full-Stack de Gestión de Libros

Este proyecto es una aplicación web full-stack que te permite gestionar libros y comentarios, desarrollada con **React.Js** (frontend), **Node.js/Express** (backend), **Sequelize** (ORM), y **PostgreSQL** como base de datos. Todo el sistema se arma y gestiona con **Docker Compose**.

---

## 📦 Estructura del Proyecto

```
.
├── backend/           # API Express + Sequelize
├── frontend/          # React
├── database/          # Scripts SQL iniciales
├── nginx/             # Configuración de proxy reverso
├── pgadmin/           # Configuración de pgAdmin
├── docker-compose.yml # Manejo de servicios
├── .env.template      # Variables de entorno
└── ...
```

---

## 🏁 Requisitos Previos

- [Docker](https://docs.docker.com/get-docker/) y [Docker Compose](https://docs.docker.com/compose/)
- (Opcional) [Git](https://git-scm.com/)

---

## 🚀 Instalación y Primeros Pasos

### 1️⃣ Clonar el repositorio

```sh
git clone https://github.com/Franco-Juarez/Programacion-III.git
cd Programacion-III/"Proyecto Final"
```

### 2️⃣ Configurar variables de entorno

Copiá el archivo `.env.template` a `.env` en la raíz del proyecto y revisá/ajustá los valores si es necesario:

```sh
cp .env.template .env
```

> **Tip:** Podés dejar los valores por defecto para pruebas locales.

---

## 🐳 Levantar el sistema con Docker Compose

Desde la raíz del proyecto:

```sh
sudo docker-compose up --build -d
```
ó
```sh
sudo docker compose up --build -d
```

Esto va a levantar todos los servicios:
- **Frontend** (React) en [http://localhost:3000](http://localhost:3000)
- **Backend API** (Express) en [http://localhost:3001/api](http://localhost:3001/api)
- **Base de datos** (PostgreSQL) en el puerto 5432
- **pgAdmin** en [http://localhost:5050](http://localhost:5050)
- **Nginx** (proxy) en [http://localhost](http://localhost)

---

## 🗄️ Migraciones y Seeders (Sequelize)

Una vez que los contenedores estén corriendo, ejecutá las migraciones y seeders **dentro del contenedor backend** (acceder a la consola del contenedor):

```sh
sudo docker-compose exec backend sh
# Dentro del contenedor:
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
exit
```

También podés usar el siguiente comando para automatizar el proceso de dejar la base de datos limpia y luego aplicar todas las migraciones y seeders de nuevo:

```sh
docker-compose exec backend sh
# Dentro del contenedor:
npx sequelize-cli db:migrate:undo:all && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all
exit
```

Esto va a crear las tablas y cargar datos de ejemplo.

---

## 🧪 Probar la aplicación

1. Accedé a [http://localhost:3000](http://localhost:3000) para ver el frontend (hacé un refrescado de la página si es necesario).
2. Accedé a [http://localhost:3001/api/libros](http://localhost:3001/api/libros) para probar la API de libros.
3. Accedé a [http://localhost:3001/api/comentarios](http://localhost:3001/api/comentarios) para probar la API comentarios.
4. Accedé a [http://localhost:5050](http://localhost:5050) para administrar la base de datos con pgAdmin (usuario y contraseña en `.env`).

---

## 🛠️ Comandos útiles

- **Ver logs en tiempo real:**
  ```sh
  docker-compose logs -f
  ```
- **Reiniciar servicios:**
  ```sh
  docker-compose restart
  ```
- **Detener y limpiar todo:**
  ```sh
  docker-compose down -v --rmi all
  ```

---

## ⚠️ Problemas Comunes

- **Puerto ocupado:** Cambiá el puerto en `docker-compose.yml` o liberá el puerto.
- **Permisos en Docker:**  
  ```sh
  sudo chown -R $USER:$USER .
  chmod -R 755 .
  ```
- **Migraciones fallan:** Asegurate de que la base de datos esté levantada antes de correr migraciones.

---

## 📚 Estructura de carpetas relevante

```
backend/
  ├── controllers/
  ├── migrations/
  ├── models/
  ├── routes/
  ├── seeders/
  ├── services/
  ├── utils/
  └── server.js
database/
  └── init.sql
frontend/
  ├── public/
  |    └── index.html
  ├── src/
  |    ├── components
  |    |       ├── common
  |    |       └── ui
  |    ├── App.css
  |    ├── App.js
  |    ├── index.css
  |    └── index.js
  └── .env.development
nginx/
  └── nginx.conf
pgadmin/
  └── servers.json
.env.template
docker-compose.yml
README.md
```

---

## 👥 Equipo

| Nombre               | Rol          |
|----------------------|--------------|
| Juan Baranovsky      | Desarrollo   |
| Franco Juárez        | Desarrollo   |
| Lucía Canclini       | Desarrollo   |
| Rodrigo Álvarez      | Desarrollo   |

---

## 🆘 Recursos

- [Documentación Docker Compose](https://docs.docker.com/compose/)
- [Sequelize CLI](https://sequelize.org/master/manual/migrations.html)
- [React](https://react.dev/)
- [Express](https://expressjs.com/)

---