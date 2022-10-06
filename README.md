# UseTime
No tener una organización planteada y dejarlo todo en nuestra memoria puede suponer
una desventaja a la hora de realizar una serie de tareas y cumplir un objetivo.

Esto ocurre por ejemplo a la hora de realizar ejercicio físico en un gimnasio. Tener
una rutina especificada te ayudará a concentrarte solo en los ejercicios en sí y así
lograr la meta propuesta.

En este caso la organización va a ir dirigida al conjunto de tareas, prácticas, ejercicios,
estudio teórico... que debemos de completar en nuestra vida como estudiantes por ejemplo. Tener la obligación
de cumplir una serie de horas de trabajo fortalece nuestra disciplina, además de intentar
llegar más desahogados cuando sean las entregas de estas.

## Problema
Para las personas poco organizadas, que dejan las tareas para lo último, 
llegan abogiadas a las entregas, no aprovechan el tiempo para el trabajo
y por ende gastan más de lo que deberían, restando tiempo para ocio,
vida personal, etc., se quiere realizar un servicio software capaz
de distribuir una serie de tareas en el tiempo.

Este software tendrá en cuenta una serie de parámetros para poder determinar
la distribución de las tareas a lo largo del tiempo. Estos parámetros serán:
* Franjas horarias disponibles para trabajar
* Fecha de finalización del trabajo
* Cantidad de trabajo a realizar cuando se está muy cerca de la entrega
* ...

Además se tendrán en cuenta factores psicológicos como son:
* Cantidad de horas seguidas de estudio
* Diversificación del contenido
* ...


El programa tiene que ser dinámico:
* Un caso fácil y común sería añadir una entrega, a los pocos días después añadir
otra, a los otros pocos días otra... Esto conllevará un nuevo cálculo para la actualización
del horario
* Se indica una entrega muy lejana y mientras pasa ese tiempo aparecen nuevas entregas
cuyo plazo acaba antes.
* En la programación estaba terminar una serie de tareas tal día y no lo has cumplido
* ...


Esta parte del servicio correspondería a cada usuario indivualmente, pero esto se podría
extender más allá y proporcionar una distribución de una tarea en grupos. Una persona
sería la encargada de crear una tarea y compartirla con los distintos usuarios. El programa
tendrá en cuenta entonces los horarios de todos los usuarios para buscar compatibilidades
horarias.



# Objetivo 0
* Configuración de Git y Github
* Descripción del problema
[Objetivo 0](https://github.com/JoseCarlosJC/UseTime/tree/objetivo_0/obj-0)

# Licencia
GNU General Public License v3.0
Ver [licencia](https://github.com/JoseCarlosJC/UseTime/blob/main/LICENSE)
