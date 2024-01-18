# Quizz App
Esta aplicación es una prueba técnica para la empresa Moción, consite en una Api https://opentdb.com/api.php que contiene pregutas de tipo Verdadero/Falso.

## Pantallas
Esta aplicación tiene 3 pantallas, Home, Quiz y Result, siendo cada una repectivamente la pantalla de inicio antes de empezar con el quiz, la pantalla de preguntas dónde se elige la respuesta a cada pregunta y la pantalla de resultado dónde se muestra el resultado del quiz y las respuestas a cada pregunta.

## Tecnologías usadas

Para esta aplicación se usaron las siguientes tecnologías:
* Vite
* Wouter
* Tachyons
* Axios

### Vite
Vite fue elegido debido a su facilidad y ligereza al momento de crear distintos tipos de app, tiene gran versatilidad en cuanto a plantillas y pre-configuraciones.

### Wouter
Wouter fue elegido debido a que está basado en React-Router pero sólo utiliza los componentes más principales, esperfecto para hacer aplicaciones simples y por lo antes dicho es muy fácil de reemplazar en caso de escalar la aplicación.

### Tachyons
Tachyons es una alternativa más simple a Tailwind, contiene una gran cantidad de clases y su documentación es bastante simple de entender, al igual que con wouter, en caso de escalabilidad tachyons es bastante sencillo de reemplazar por un procesador de css similar (como el mismo Tailwind).

### Axios

Contando con el tema escalabilidad y manejo limpio de código, se decidió elegir Axios para el manejo de Apis, es bastante sencillo y a su vez completo, permite hacer un llamado de apis de manera segura.

## Mejoras en la aplicación
Hay muchas cosas que se pueden mejorarde esta aplicación:
* Manejo más seguro del respositorio Git con la creación de ramas por cada nueva Feature, PR con reviión de código automática, etc
* Mejor manejo de la parametrización de la Api, en caso de escalar y necesitar más preguntas o de otro tipo, se deben crear formas más fáciles de cambiar los parámetros de la API.
* Mejores estilos.

## Como instalarla
La instalación es bastante sencilla, primero se debe contar con [yarn](https://yarnpkg.com/), una vez instalado se deberá clonar el proyecto en la carpeta deseada 

```git clone https://github.com/diegofavian94/quizz-app-mocion.git```

una vez dentro del proyecto debemos instalar las dependencias

```yarn install```

ahora que las depedencias han sido instaladas procederemos a iniciar el proyecto

```yarn dev --open```

después de unos segundos se iniciará el proyecto y se abrirá automáticamente la pestaña del navegador con la aplicación.