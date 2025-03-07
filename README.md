# Proyecto "Galeria de Imágenes" Con React

En este proyecto crearé una GALERIA DE IMÁGENES usando React.

## ¿Que uso?.

1. Bootstrap
2. Unsplash API 
3. quis aperiam repellat iste dolores fugiat sed eveniet soluta accusamus modi beatae.

### Cambios que se fueron realizando.

- Coloque la opción de cancelar (cerrar) imagen con la tecla ESC.

- Podia mantener para todas las imagenes el mismo alto y el mismo ancho fijo, pero eso causaba que como todas las imagenes no tienen las mismas dimensiones, algunas imagenes salgan con la cabeza cortada, o que no se aprecie bien la imagen o lo que queria transmitir el artista en su foto. Asi que me parecio mejor que la imagen respete una altura, y que se ajuste su ancho respectivamente sea necesario para mostrar la imagen completa. Esteticamente en la pagina no queda tan bien, pero la imagen se puede apreciar. Podria tambien ocupar toda la pantalla, pero la idea es que sea un cardView, y que el fondo este difuminado con el blur. (En Proceso)

- Coloque las funciones la API en un solo lugar y uso 'useContext', ya que iba a tener  componentes con código de llamada de la API, además de estar enviando y recibiendo props  de otros componentes,  me parecio que no iba a ser legible. Asi que obtengo un solo array que lo reemplazo al realizar una busqueda, o por random (al inicio) y me permite reutilizar cualquier dato que tengan las funciones de la API. Decido  crear 'UnsplashContext'.