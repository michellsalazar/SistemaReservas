istema de Reservas ReservaPlus
Integrante

Estefani Michell Salazar Mejía

Descripción de la Solución

Se desarrolló una primera versión de un sistema web denominado ReservaPlus, cuyo propósito es gestionar clientes, servicios y reservas dentro de una empresa de servicios.

La aplicación permite centralizar la información que anteriormente era administrada mediante llamadas telefónicas, aplicaciones de mensajería y hojas de cálculo.

El sistema fue desarrollado utilizando HTML, CSS, JavaScript, Git y GitHub, aplicando buenas prácticas de control de versiones y organización colaborativa del desarrollo.

Requerimientos Considerados
Gestión de Clientes
Registrar clientes.
Modificar información de clientes.
Consultar clientes registrados.
Gestión de Servicios
Registrar servicios.
Definir precio de servicios.
Definir duración de servicios.
Consultar servicios disponibles.
Gestión de Reservas
Registrar reservas.
Seleccionar cliente y servicio.
Registrar fecha y hora.
Consultar reservas registradas.
Cancelar reservas.
Actividades Identificadas

Durante el proyecto se identificaron las siguientes actividades:

Código	Actividad#1	Configurar la estructura inicial del sistema
#2	Implementar registro y consulta de clientes
#3	Implementar modificación de clientes
#4	Implementar registro y consulta de servicios
#5	Implementar registro de reservas
#6	Implementar consulta y cancelación de reservas
#7	Validar datos de clientes, servicios y reservas
#8	Probar e integrar funcionalidades
#9	Documentar conflicto de Git
#10	Publicar versión estable v1.0.0
#11	Documentar funcionalidades futuras
Evidencia del Tablero de Gestión

Se implementó un tablero GitHub Projects con las siguientes columnas:

Pendiente
Seleccionado
En ejecución
En revisión
Terminado

El tablero permitió realizar seguimiento al desarrollo y estado de cada actividad.

Estrategia de Desarrollo

Se utilizó una estrategia basada en Git Flow simplificado.

Ramas utilizadas
Plain Text
main
develop
feature-clientes
feature-servicios
feature-reservas
Función de cada rama
main: mantiene la versión estable.
develop: integra las funcionalidades desarrolladas.
feature-clientes: desarrollo de clientes.
feature-servicios: desarrollo de servicios.
feature-reservas: desarrollo de reservas.

Esta estrategia permitió desarrollar funcionalidades independientes sin afectar la estabilidad del sistema.

Evidencias del Trabajo Colaborativo

Aunque el proyecto fue desarrollado de manera individual, se utilizó una metodología colaborativa mediante:

Uso de Issues.
Gestión de actividades.
Control de versiones.
Uso de ramas.
Integración controlada mediante Git.

Se registraron las responsabilidades mediante Issues y el tablero de gestión.

Evidencias del Desarrollo
Módulo de Clientes

Permite:

Registrar clientes.
Consultar clientes.
Modificar clientes.
Módulo de Servicios

Permite:

Registrar servicios.
Consultar servicios.
Gestionar categorías.
Establecer duración y precio.
Módulo de Reservas

Permite:

Registrar reservas.
Asignar cliente.
Asignar servicio.
Definir fecha y hora.
Consultar reservas.
Cancelar reservas.
Integración y Revisión de Cambios

Para integrar funcionalidades se utilizó el siguiente flujo:

Plain Text
feature-clientes
↓
develop
↓
feature-servicios
↓
develop
↓
feature-reservas
↓
develop
↓
main

Cada funcionalidad fue desarrollada en una rama específica y posteriormente integrada a la rama principal mediante procesos de revisión e integración.

Gestión de Conflictos

Se generó un conflicto de integración de manera controlada durante el desarrollo del proyecto.

Origen

Dos ramas modificaron información compartida del proyecto.

Archivos afectados
README.md
Resolución

Se revisaron los cambios realizados en ambas ramas.

Posteriormente:

Se identificaron las diferencias.
Se seleccionó la versión correcta.
Se corrigió el archivo.
Se realizó un commit registrando la resolución.

Ejemplo de commit:

Shell
fix: resolver conflicto en README
Gestión de Versiones

Se liberó la versión:

Plain Text
v1.0.0
Funcionalidades incluidas

✅ Gestión de clientes

✅ Gestión de servicios

✅ Gestión de reservas

Funcionalidades futuras

🔄 Recordatorios automáticos

🔄 Dashboard de indicadores

🔄 Reportes

🔄 Pagos en línea

🔄 Historial de clientes

Métricas y Seguimiento

GitHub Projects permitió visualizar el avance mediante gráficos de progreso y métricas de actividades.

Repositorio

Enlace del repositorio:

https://github.com/michellsalazar/SistemaReservas


Conclusiones
Git y GitHub facilitaron la organización del proyecto y el control de versiones.
El uso de ramas permitió desarrollar funcionalidades sin afectar la versión estable del sistema.
GitHub Projects ayudó a gestionar actividades y realizar seguimiento al avance del proyecto.
La resolución de conflictos permitió comprender el proceso de integración de cambios concurrentes.
La versión v1.0.0 cumple con los requerimientos principales planteados para la primera entrega del sistema de reservas.
