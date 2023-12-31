
# Instructivo de trabajo para el repositorio de Imagina
---
#### Introducción

Este instructivo tiene como objetivo proporcionar una guía para trabajar en el repositorio de Imagina, una página web desarrollada con React Vite.

#### Requisitos

Para trabajar en este repositorio, necesitas tener instalado Git y Node.js.

#### Instalación de dependencias

Para instalar las dependencias del proyecto, sigue estos pasos:

- Abre una terminal en la carpeta raíz del proyecto.
- Ejecuta el comando `npm install`.

#### Flujo de trabajo Git

Estamos utilizando un flujo de trabajo Gitflow para gestionar el desarrollo del proyecto. Este flujo utiliza las siguientes ramas:

- Main: Rama principal del proyecto. Representa la versión estable del proyecto.
- Dev: Rama de desarrollo. Representa la versión en desarrollo del proyecto.
- Hotfix: Rama para implementar correcciones urgentes.
- Releases: Ramas para implementar nuevas versiones del proyecto.
- Feature/lafeatureadesarrollar: Ramas para implementar nuevas características.

#### Proceso de desarrollo

Cada desarrollador debe clonar el repositorio y crear una nueva rama a partir de la rama `dev` para desarrollar una nueva característica.

Para crear una nueva rama, sigue estos pasos:

Abre una terminal en la carpeta raíz del proyecto.
`Ejecuta el comando git checkout -b feature/<nombre-de-la-característica>.`

Por ejemplo, para crear una rama para desarrollar una nueva característica de login, ejecutarías el siguiente comando:

```
git checkout -b feature/login
```

Trabaja en tu nueva rama como lo harías normalmente. Cuando termines de desarrollar tu característica, debes fusionar tu rama con la rama `dev`.

Para fusionar tu rama, sigue estos pasos:

1- Abre una terminal en la carpeta raíz del proyecto.
2- Ejecuta el comando `git checkout dev`.
3- Ejecuta el comando `git merge feature/<nombre-de-la-característica>`.

Por ejemplo, para fusionar la rama `feature/login` con la rama `dev`, ejecutarías el siguiente comando:
```
git checkout dev
git merge feature/login
```

Un desarrollador designado será responsable de fusionar la rama `dev` con la rama `main` o `releases`.

#### Comentarios y commits

Agrega comentarios a tu código para que sea más fácil de entender. También debes incluir un mensaje claro en cada commit que hagas.

#### Pull requests

Siempre envía tus cambios como pull requests. Esto permitirá a otros desarrolladores revisar tu trabajo antes de fusionarlo en la rama principal.

#### Conclusión

Siguiendo estas instrucciones, podrás trabajar de manera eficiente y colaborativa en el repositorio de Imagina.

El team de ADN soluciones web.