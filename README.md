# Proyecto "Galeria de Imágenes" Con React

En este proyecto crearé una GALERIA DE IMÁGENES usando React.

## ¿Que uso?.

1. Bootstrap
2. Unsplash API 
3. quis aperiam repellat iste dolores fugiat sed eveniet soluta accusamus modi beatae.

### Cambios que se fueron realizando.

- Coloque la opción de cancelar (cerrar) imagen con la tecla ESC. (en proceso)

- Podia mantener para todas las imagenes el mismo alto y el mismo ancho fijo, pero eso causaba que como todas las imagenes no tienen las mismas dimensiones, algunas imagenes salgan con la cabeza cortada, o que no se aprecie bien la imagen o lo que queria transmitir el artista en su foto. Asi que me parecio mejor que la imagen respete una altura, y que se ajuste su ancho respectivamente sea necesario para mostrar la imagen completa. Esteticamente en la pagina no queda tan bien, pero la imagen se puede apreciar. Podria tambien ocupar toda la pantalla, pero la idea es que sea un cardView, y que el fondo este difuminado con el blur. (En Proceso)

- Coloque las funciones la API en un solo lugar y uso 'useContext', ya que iba a tener  componentes con código de llamada de la API, además de estar enviando y recibiendo props  de otros componentes,  me parecio que no iba a ser legible. Asi que obtengo un solo array que lo reemplazo al realizar una busqueda, o por random (al inicio) y me permite reutilizar cualquier dato que tengan las funciones de la API. Decido  crear 'UnsplashContext'.

- Tenia 2 opciones, realizar la llamada de la api desde el CardView, o de antes  (Main) al clickear una imagen, pero si lo realizaba de Main luego cuando este dentro de CardView tambien tengo otros 2 botones, entonces deberia realizar una busqueda al clickear cada botón, eso quiere decir que debia volver a escribir codigo en cada botón. Por eso decidí llamar una sola vez a la api desde CardView, y que desde ahi que capture el ID de la imagen que se muestra para obtener sus tags y cualquier otra info. Dando como resultado 1 sola llamada y no tener codigo repetido en cada botón.

![Flamenco traido de api Unsplash](/public/flamencos.png)