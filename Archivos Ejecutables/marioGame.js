// VARIABLES A DECLARAR...

var container = document.getElementById("container");
var foreground = document.getElementById("foreground");
var plants = document.getElementById("plantas");
var mountains = document.getElementById("montanas");
var clouds = document.getElementById("nubes");
var mario = document.getElementById("mario");
var items = document.getElementById("items");
var runningRight = 0;
var runningLeft = 0;
var score = 0;
var coins = 0;
var dead = 0;

// AJUSTANDO INTERVALO DE ANIMACIÓN A CADA ELEMENTO DEL JUEGO...

// EL PERSONAJE SE MUEVE HACIA LA DERECHA...

setInterval(function()
{
    if (runningRight == 1)
    {
        move(foreground, -40)
        move(items, -40)
        move(plants, -23)
        move(mountains, -6)
        move(clouds, -4)

        mario.classList.remove("lookingLeft");
        mario.classList.add("lookingRight");
        mario.classList.add("runningRight");
    }

}, 10);

// EL PERSONAJE SE MUEVE HACIA LA IZQUIERDA...

setInterval(function()
{
    if (runningLeft == 1)
    {
        move(foreground, 40)
        move(items, 40)
        move(plants, 23)
        move(mountains, 6)
        move(clouds, 4)

        mario.classList.remove("lookingRight");
        mario.classList.add("lookingLeft");
        mario.classList.add("runningLeft");
    }

}, 10);