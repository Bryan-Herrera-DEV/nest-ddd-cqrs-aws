# DDD Project and Vertical Slicing in NestJS

| [English](README.md) | [Español](README-es.md) |
This project is an example of a NestJS application that implements the DDD (Domain Driven Design) and Vertical Slicing architecture. 
The application allows users to register, authenticate and manage tasks. 
Tasks can have reference images, and both user profile images and task images are stored in Amazon S3.

## Patterns and architectures proposed

### Domain Driven Design (DDD)

Domain Driven Design (DDD) is a software design approach that focuses on modeling a complex business domain and communication between team members. In this application, we separate business logic, application logic and infrastructure logic into different layers, following DDD principles.

### Vertical Slicing

Vertical Slicing is an architectural approach that organizes code into independent, self-contained "slices" or "modules" that represent different functionalities of the application. In this project, we separate the functionality into three main modules: Auth, Task and User. Each module contains its own application, domain, infrastructure and interface layers, which facilitates maintainability and scalability of the code.

### Command Query Responsibility Segregation (CQRS)

CQRS is an architectural pattern that separates query and command operations into different models and objects. In this project, we use the CQRS pattern to handle read and write operations related to tasks and users. 

### Event Sourcing

Event Sourcing is an architectural pattern in which changes in application state are stored as a sequence of events. Although not directly implemented in this example, Event Sourcing can be useful in combination with CQRS to handle domain events and maintain an audit trail of system changes.

## How to run the project

1. Clone the repository and navigate to the project directory.
2. Install the dependencies with `npm install`.
3. Configure the required environment variables (e.g. AWS S3 and MongoDB credentials).
4. Run the application with `npm run start`.