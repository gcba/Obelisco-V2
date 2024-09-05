# Obelisco v2

Obelisco v2 es un Sistema de diseño basado en componentes para productos digitales de la Ciudad de Buenos Aires, diseñado para continuar la evolución de Obelisco en su segunda versión.

Este sistema brinda una mejor experiencia de usuario y simplifica el desarrollo de interfaces web al mantener una armonía digital enfocada en la experiencia de los usuarios, proporcionada por el Gobierno de la Ciudad de Buenos Aires (GCBA).

Con una amplia variedad de componentes, Obelisco v2 acelera la creación de aplicaciones elegantes y funcionales.

## Cómo usarlo

Obelisco v2 se distribuye por medio del paquete publicado en NPM, Es recomendable usar este sistema para definir la versión a usar y poder actualizarla fácilmente.

## Instalación

Para instalarlo puedes hacer uso de npm, yarn o pnpm:

```sh

npm i @gcba/obelisco-v2

yarn add @gcba/obelisco-v2

pnpm i @gcba/obelisco-v2

```

## Actualización

Si Obelisco ya está instalado en el proyecto y necesitás actualizarlo a la última versión, en el directorio del proyecto hay que ejecutar:

```sh

npm update @gcba/obelisco-v2

```

## Uso con CDN

```sh

<link href="https://gcba.github.io/Obelisco/obelisco.css" rel="stylesheet" />

```

## importación

Importar los estilos en el archivo principal del proyecto:

```sh
import 'obelisco-v2/dist/styles.css';
o
<link rel="stylesheet" href="ruta/al/proyecto/dist/styles.css">
```

### Tipografías

Obelisco requiere las tipografías **Nunito** y **Open sans** disponibles en google fonts, para utilizarlas con su CDN podemos hacerlo de la siguiente forma:

```sh
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet"></link>
```

### Iconografía

Obelisco utiliza las librerías de Boxicons y Material symbols que se pueden instalar de las siguientes maneras:

Boxicons con npm o CDN:

```sh
npm install boxicons
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
```

Material Symbols con npm o CDN:

```sh
npm install material-symbols@latest
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
```

### Javascript

Como Obelisco está construido sobre bootstrap 5, [debemos tener esas dependencias](https://getbootstrap.com/docs/5.3/getting-started/download/#cdn-via-jsdelivr).

Un ejemplo de cómo importalas es:

```sh
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossOrigin="anonymous"></script>
```

## Desarrollo

En la wiki del repositorio está toda la información necesaria para entender cómo se organizan las diferentes partes del proyecto, cómo funciona y los procesos de trabajo que definimos.

## Mantenimiento y colaboración

El mantenimiento y desarrollo de Obelisco lo hace el equipo de la Dirección General de Canales Digitales, pero lo utilizan tanto equipos de gobierno como proveedores externos.

Para agilizar y hacer más transparente el proceso, cualquier persona puede contribuir de varias formas.

Mail de contacto: equipoobelisco@buenosaires.gob.ar
