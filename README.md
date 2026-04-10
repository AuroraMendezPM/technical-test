# 🧪 Prueba Técnica - NestJS Tasks API

## Objetivo

Este proyecto contiene una pequeña API funcional en NestJS y SQLite. El objetivo de esta prueba es que realices algunos cambios y agregues funcionalidades nuevas.

Puedes revisar su documentación oficial, o preguntar si tienes dudas.

---

## 📝 Actividades a realizar

En este sistema ya puedes crear usuarios y tareas.
Queremos mejorar la funcionalidad para que los usuarios puedan organizar mejor sus tareas.

Implementa lo siguiente:

1. **Agrega un campo `dueDate` (opcional) a las tareas**:
   - El campo debe almacenarse como fecha válida (`Date`).
   - Si no se proporciona, debe guardarse como `null`.

2. **Crea un endpoint para obtener las tareas pendientes de un usuario**, ordenadas por:
   - Tareas con `dueDate` más próxima primero.
   - Luego, tareas sin `dueDate`.

3. **Evita crear tareas duplicadas por título para el mismo usuario**:
   - No debe permitirse que un usuario tenga más de una tarea con el mismo título.
   - Esta validación debe aplicarse al crear una nueva tarea.

4. _(Opcional, si te queda tiempo)_ Agrega un endpoint que permita consultar cuántas tareas pendientes tiene un usuario:
   - `GET /users/:id/pending-count` → `{ "count": 3 }`

---

## 🚀 Instrucciones para iniciar

El proyecto ya está configurado para usarse en **GitHub Codespaces**.

### Para correrlo:

```bash
npm install
npm run start:dev
```

El servidor corre en: `http://localhost:3000`

Puedes probar los endpoints con [Postman](https://www.postman.com/) o [Hoppscotch](https://hoppscotch.io).

---

## 💻 Abre en codespaces

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/AuroraMendezPM/technical-test)

## 📚 Recursos útiles

- [Documentación oficial de NestJS](https://docs.nestjs.com/)
- [Decoradores de validación](https://github.com/typestack/class-validator#validation-decorators)
- [Documentación de TypeORM](https://typeorm.io/)

---

## ✅ Criterios de evaluación

- Comprensión del código existente y capacidad de adaptarse.
- Buenas prácticas básicas de REST.
- Uso correcto de DTOs y validaciones.
- Claridad en la estructura del código y uso de servicios.
- Uso mínimo de documentación (no es un examen de memoria).
