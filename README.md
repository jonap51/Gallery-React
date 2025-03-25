# Proyecto "Galería de Imágenes" Con React


En este proyecto crearé una GALERÍA DE IMÁGENES usando React.
Al iniciar la galería trae imágenes RANDOMS, ahí no se aplica el scroll infinito.
Pero luego de realizar una búsqueda, las "páginas aparecerán debajo" generando el scroll infinito, llamando a la siguiente página.
Al abrir cualquier imágen, se trae los Tags. *dependiendo el tamaño de pantalla trae una cantidad de tags : < 450px trae un máximo de 3, < de 800px un máx de 6  o trae el total de tags que exista para pantallas mayores a 801px*
Se puede clickear los tags, y automáticamente se generará una búsqueda.
Al tipear en el buscador, se puede hacer click en search, o apretar enter para realizar la búsqueda.


## ¿Que uso?


1. Hooks
    - useState
    - useEffects
    - useContext  
2. Bootstrap
3. HeroUI/Tailwind
4. HeroIcons
3. Unsplash API
4. Github Secrets
5. Workflows/Actions
6. Gh-Pages
7. npm *Infinite Scroll* https://www.npmjs.com/package/react-infinite-scroll-component#react-infinite-scroll-component--
8. npm *Axios* https://axios-http.com/docs/intro


## Cambios que se fueron realizando


- Coloque la opción de cerrar imagen con la tecla ESC. Además de un botón y haciendo click afuera de la tarjeta.

- Podía mantener para todas las imágenes el mismo alto y el mismo ancho fijo, pero eso causaba que como todas las imágenes no tienen las mismas dimensiones, algunas imágenes salgan con la cabeza cortada, o que no se aprecie bien la imagen o lo que quería transmitir el artista en su foto. Así que me pareció mejor que la imagen respete una altura, y que se ajuste su ancho respectivamente sea necesario para mostrar la imagen completa. Estéticamente en la página no queda tan bien, pero la imagen se puede apreciar. Podría también ocupar toda la pantalla, pero la idea es que sea un cardView, y que el fondo este difuminado con el blur.

- Coloque las funciones la API en un solo lugar y uso 'useContext', ya que iba a tener  componentes con código de llamada de la API, además de estar enviando y recibiendo props  de otros componentes,  me pareció que no iba a ser legible. Así que obtengo un solo array que lo reemplazo al realizar una búsqueda, o por random (al inicio) y me permite reutilizar cualquier dato que tengan las funciones de la API. Decidí  crear 'UnsplashContext'.

- Tenia 2 opciones, realizar la llamada de la api desde el CardView, o de antes  (Main) al clickear una imagen, pero si lo realizaba de Main luego cuando este dentro de CardView tambien tengo otros 2 botones, entonces debería realizar una búsqueda al clickear cada botón, eso quiere decir que debía volver a escribir código en cada botón. Por eso decidí llamar una sola vez a la api desde CardView, y que desde ahí que capture el ID de la imagen que se muestra para obtener sus tags y cualquier otra info. Dando como resultado 1 sola llamada y no tener código repetido en cada botón.


### Así va quedando
![Flamenco traído de api Unsplash](/public/img/flamencos.png)



- Las imágenes del CardView se achicaban al tener una descripción muy larga, y se arregló su contenedor para que esto no suceda más.

- Arregle varios problemas como por ejemplo bootstrap por default se puede interactuar con los botones next y prev extremadamente lejos, impidiendo apretar el botón de "cerrar". Achiqué su tamaño para que no molestara.

- Ajuste la cantidad de tag que se muestran dependiendo el tamaño de pantalla


![Interacción de botones muy extensa](/public/img/next.png)

