# Proyecto DDD y Vertical Slicing en NestJS

Este proyecto es un ejemplo de aplicación NestJS que implementa la arquitectura DDD (Domain Driven Design) y Vertical Slicing. 
La aplicación permite a los usuarios registrarse, autenticarse y gestionar tareas. 
Las tareas pueden tener imágenes de referencia, y tanto las imágenes de perfil de usuario como las imágenes de las tareas se almacenan en Amazon S3.

## Patrones y arquitecturas planteadas

### Domain Driven Design (DDD)

Domain Driven Design (DDD) es un enfoque de diseño de software que se centra en el modelado de un dominio de negocio complejo y en la comunicación entre los miembros del equipo. En esta aplicación, separamos la lógica de negocio, la lógica de aplicación y la lógica de infraestructura en diferentes capas, siguiendo los principios de DDD.

### Vertical Slicing

Vertical Slicing es un enfoque de arquitectura que organiza el código en "rebanadas" o "módulos" independientes y autocontenidos, que representan diferentes funcionalidades de la aplicación. En este proyecto, separamos las funcionalidades en tres módulos principales: Auth, Task y User. Cada módulo contiene sus propias capas de aplicación, dominio, infraestructura e interfaces, lo que facilita la mantenibilidad y escalabilidad del código.

### Command Query Responsibility Segregation (CQRS)

CQRS es un patrón de arquitectura que separa las operaciones de lectura (query) y escritura (command) en diferentes modelos y objetos. En este proyecto, utilizamos el patrón CQRS para manejar las operaciones de lectura y escritura relacionadas con las tareas y los usuarios. 

### Event Sourcing

Event Sourcing es un patrón de arquitectura en el que los cambios en el estado de la aplicación se almacenan como una secuencia de eventos. Aunque no se implementa directamente en este ejemplo, Event Sourcing puede ser útil en combinación con CQRS para manejar eventos de dominio y mantener un registro de auditoría de los cambios en el sistema.

## Cómo ejecutar el proyecto

1. Clona el repositorio y navega al directorio del proyecto.
2. Instala las dependencias con `npm install`.
3. Configura las variables de entorno necesarias (por ejemplo, las credenciales de AWS S3 y MongoDB).
4. Ejecuta la aplicación con `npm run start`.