# UseTime
No tener una organización planteada y dejarlo todo en nuestra memoria puede suponer
una desventaja a la hora de realizar una serie de tareas y cumplir un objetivo.

Esto ocurre por ejemplo a la hora de realizar ejercicio físico en un gimnasio. Tener
una rutina establecida te ayudará a concentrarte solo en los ejercicios y así
lograr la meta propuesta.

En este caso la organización va a ir dirigida al conjunto de tareas, prácticas, ejercicios,
estudio teórico... que debemos de completar en nuestra vida como estudiantes. Tener la obligación
de cumplir una serie de horas de trabajo fortalece nuestra disciplina, además de intentar
llegar más desahogados cuando sean las entregas de estas.

## Problema
Para las personas poco organizadas, que dejan las tareas para lo último, 
llegan abogiadas a las entregas, no aprovechan el tiempo para el trabajo
y por ende gastan más de lo que deberían, restando tiempo para ocio,
vida personal, etc., se quiere realizar un servicio software capaz
de distribuir una serie de tareas en el tiempo. Este problema se podría ver,
de manera bastante resumida, como el problema de la mochila; tenemos una cantidad
de horas (capacidad) y queremos realizar una asignación de las tareas
(objetos).

Este software tendrá en cuenta una serie de parámetros para poder determinar
la distribución de las tareas a lo largo del tiempo. Estos parámetros podrían ser:
* Franjas horarias disponibles para trabajar
* Fecha de finalización del trabajo


Además se tendrán en cuenta factores psicológicos como son:
* Cantidad de horas seguidas de estudio
* Diversificación del contenido



El programa tiene que ser dinámico:
* Un caso fácil y común sería añadir una entrega, a los pocos días después añadir
otra, a los otros pocos días otra... Esto conllevará un nuevo cálculo para la actualización
del horario
* Se indica una entrega muy lejana y mientras pasa ese tiempo aparecen nuevas entregas
cuyo plazo acaba antes.


Esta parte del servicio correspondería a cada usuario indivualmente, pero esto se podría
extender más allá y proporcionar una distribución de tareas en grupos. Una persona
sería la encargada de crear una tarea y compartirla con los distintos usuarios. El programa
tendrá en cuenta los horarios de todos los usuarios para buscar las compatibilidades
horarias.



# Documentación
Puede encontrar todo en [docs](docs)

* Configuración del repositorio (Git, Github...) [docs/config_repositorio](docs/config_repositorio)
* Descripción del uso de la app en [user_journeys.md](docs/user_journeys.md)
* Descripción de varios perfiles de usuarios en [tipos_usuario.md](docs/tipos_usuario.md)
* Historias de usuario donde se indica una necesidad del usuario relacionada con la lógica de negocio: [historias_usuario.md](docs/historias_usuario.md)
* Productos mínimamente viables (PMV) en [milestones.md](docs/milestones.md)

# Estado actual
Propuesta aceptada de un modelo del problema (Milestone 0). Puede verlo en [src](src)

# Licencia
GNU General Public License v3.0
Ver [licencia](https://github.com/JoseCarlosJC/UseTime/blob/main/LICENSE)
