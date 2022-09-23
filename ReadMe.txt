Para el despliegue de la aplicacion es necesario, descargar las librerias de la siguiente forma:

>> npm i 

El despligue de la siguiente forma: 

>> ng serve --open 

Cabe recalcar que realice el uso del manejador de estados NGRX, modulos, pipes, estructura de carpetas escalable, servicios, modelos, clases, componentes y que la apliacacion es totalmente responsive


EL inconveniente que presente fue cargar la conversion realizada, debido a que el state no se capturaba de manera adecuada desde el pipe asincrono. 
Por lo que la conversion queda con el tipo de moneda que el usuario escogio previamente. 


Esto se ve reflejado al hacer una busqueda y asignar la divisa
