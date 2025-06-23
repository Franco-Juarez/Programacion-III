--
-- PostgreSQL database dump
--

-- Dumped from database version 15.13
-- Dumped by pg_dump version 15.13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: enum_libros_estado; Type: TYPE; Schema: public; Owner: app_user
--

CREATE TYPE public.enum_libros_estado AS ENUM (
    'read',
    'reading',
    'unread'
);


ALTER TYPE public.enum_libros_estado OWNER TO app_user;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: app_user
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO app_user;

--
-- Name: comentarios; Type: TABLE; Schema: public; Owner: app_user
--

CREATE TABLE public.comentarios (
    id integer NOT NULL,
    texto text NOT NULL,
    "libroId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.comentarios OWNER TO app_user;

--
-- Name: comentarios_id_seq; Type: SEQUENCE; Schema: public; Owner: app_user
--

CREATE SEQUENCE public.comentarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comentarios_id_seq OWNER TO app_user;

--
-- Name: comentarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: app_user
--

ALTER SEQUENCE public.comentarios_id_seq OWNED BY public.comentarios.id;


--
-- Name: libros; Type: TABLE; Schema: public; Owner: app_user
--

CREATE TABLE public.libros (
    id integer NOT NULL,
    titulo character varying(255) NOT NULL,
    autor character varying(255) NOT NULL,
    "anioPublicacion" integer NOT NULL,
    genero character varying(255) NOT NULL,
    estado public.enum_libros_estado DEFAULT 'unread'::public.enum_libros_estado NOT NULL,
    descripcion text NOT NULL,
    calificacion integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.libros OWNER TO app_user;

--
-- Name: libros_id_seq; Type: SEQUENCE; Schema: public; Owner: app_user
--

CREATE SEQUENCE public.libros_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.libros_id_seq OWNER TO app_user;

--
-- Name: libros_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: app_user
--

ALTER SEQUENCE public.libros_id_seq OWNED BY public.libros.id;


--
-- Name: comentarios id; Type: DEFAULT; Schema: public; Owner: app_user
--

ALTER TABLE ONLY public.comentarios ALTER COLUMN id SET DEFAULT nextval('public.comentarios_id_seq'::regclass);


--
-- Name: libros id; Type: DEFAULT; Schema: public; Owner: app_user
--

ALTER TABLE ONLY public.libros ALTER COLUMN id SET DEFAULT nextval('public.libros_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: app_user
--

COPY public."SequelizeMeta" (name) FROM stdin;
\.


--
-- Data for Name: comentarios; Type: TABLE DATA; Schema: public; Owner: app_user
--

COPY public.comentarios (id, texto, "libroId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: libros; Type: TABLE DATA; Schema: public; Owner: app_user
--

COPY public.libros (id, titulo, autor, "anioPublicacion", genero, estado, descripcion, calificacion, "createdAt", "updatedAt") FROM stdin;
1	Harry Potter y la piedra filosofal	J. K. Rowling	1997	Novela	unread	Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buendía recibe una carta que cambiará su vida para siempre. En ella le comunican queha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y se hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero sobre todo, conocerá los secretos que le permitirán cumplir con su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico común y corriente. ¡Es un mago! 	\N	2025-06-23 19:14:03.107+00	2025-06-23 19:14:03.107+00
2	El señor de los anillos: La Comunidad del Anillo	J. R. R. Tolkien	1954	Novela	unread	El Señor de los Anillos: La Comunidad del Anillo es el primer libro de la trilogía de J.R.R. Tolkien, que narra la historia de Frodo Bolsón, un hobbit que hereda un anillo mágico, el Anillo Único, con el poder de controlar a todos los demás anillos y someter a la Tierra Media bajo el dominio de Sauron, el Señor Oscuro. Frodo, acompañado por un grupo diverso llamado la Comunidad del Anillo, emprende un peligroso viaje para destruir el Anillo en el Monte del Destino, enfrentándose a numerosos peligros y criaturas malvadas en su camino. 	\N	2025-06-23 19:53:46.949+00	2025-06-23 20:08:28.36+00
\.


--
-- Name: comentarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: app_user
--

SELECT pg_catalog.setval('public.comentarios_id_seq', 1, false);


--
-- Name: libros_id_seq; Type: SEQUENCE SET; Schema: public; Owner: app_user
--

SELECT pg_catalog.setval('public.libros_id_seq', 2, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: app_user
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: comentarios comentarios_pkey; Type: CONSTRAINT; Schema: public; Owner: app_user
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_pkey PRIMARY KEY (id);


--
-- Name: libros libros_pkey; Type: CONSTRAINT; Schema: public; Owner: app_user
--

ALTER TABLE ONLY public.libros
    ADD CONSTRAINT libros_pkey PRIMARY KEY (id);


--
-- Name: comentarios comentarios_libroId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: app_user
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT "comentarios_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES public.libros(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

