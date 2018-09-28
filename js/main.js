window.onload = function() {

    // TODO Slider hecho por mi. De momento es este:
    $('#galeria').bxSlider({ // plugin: bxslider.com 
        preloadImages: 'all',
        auto: true,
        mode: "fade",
        speed: 1000,
        pause: 1000,
        pager: false,
        controls: false

    });

    // Posts Dinámicos, plugin para fecha: http://momentjs.com. 
    // Está mal para este ejemplo ya que siempre va a poner la fecha actual.
    var posts = [{
            title: "Prueba de título 1",
            date: "Fecha de publicación: " + moment().format('dddd[,] D [de] MMMM [de] YYYY'),
            content: 'Ut nulla aute enim ullamco. Laboris nulla nulla aliquip Lorem incididunt adipisicing eiusmod exercitation do quis qui quis nisi ullamco. Non minim ipsum occaecat do quis nulla sunt reprehenderit laborum ullamco aliquip adipisicing magna. Ut aute cupidatat id laborum nostrud qui id pariatur proident irure. Laboris reprehenderit ut fugiat amet nulla exercitation esse. Veniam esse do sit est irure do velit aliqua. Sint duis labore nisi nisi ex esse fugiat do laboris dolor velit et.',
            extended: 'Aenean nec congue mi, sagittis congue nibh. Proin lacus risus, malesuada rhoncus nulla ac, hendrerit bibendum ipsum. Vivamus euismod magna nec leo congue, non fermentum mi hendrerit. Mauris euismod fermentum ultricies. Etiam nec congue leo, sed fringilla nibh. Integer finibus massa sit amet imperdiet sodales. Nulla ullamcorper vestibulum lorem quis tristique. Ut condimentum justo dolor, et lacinia justo aliquam et. Aenean non ipsum viverra, venenatis quam ut, tempor ex. Cras ut justo id felis pretium suscipit in non urna. Sed dictum, odio eu vehicula luctus, quam purus fermentum diam, vel sollicitudin purus velit ac diam. Cras dapibus, lacus quis luctus consequat, erat felis bibendum risus, sit amet tincidunt nisi eros rhoncus erat. Integer interdum, elit condimentum feugiat imperdiet, augue tortor pharetra nunc, porta auctor sapien orci id erat. Suspendisse vel metus sit amet purus malesuada sollicitudin. Nam sed felis vel nulla gravida scelerisque eget et nisi. Phasellus sed molestie velit.'
        },
        {
            title: "Prueba de título 2",
            date: "Fecha de publicación: " + moment().format('dddd[,] D [de] MMMM [de] YYYY'),
            content: 'Ut nulla aute enim ullamco. Laboris nulla nulla aliquip Lorem incididunt adipisicing eiusmod exercitation do quis qui quis nisi ullamco. Non minim ipsum occaecat do quis nulla sunt reprehenderit laborum ullamco aliquip adipisicing magna. Ut aute cupidatat id laborum nostrud qui id pariatur proident irure. Laboris reprehenderit ut fugiat amet nulla exercitation esse. Veniam esse do sit est irure do velit aliqua. Sint duis labore nisi nisi ex esse fugiat do laboris dolor velit et.',
            extended: 'Aenean nec congue mi, sagittis congue nibh. Proin lacus risus, malesuada rhoncus nulla ac, hendrerit bibendum ipsum. Vivamus euismod magna nec leo congue, non fermentum mi hendrerit. Mauris euismod fermentum ultricies. Etiam nec congue leo, sed fringilla nibh. Integer finibus massa sit amet imperdiet sodales. Nulla ullamcorper vestibulum lorem quis tristique. Ut condimentum justo dolor, et lacinia justo aliquam et. Aenean non ipsum viverra, venenatis quam ut, tempor ex. Cras ut justo id felis pretium suscipit in non urna. Sed dictum, odio eu vehicula luctus, quam purus fermentum diam, vel sollicitudin purus velit ac diam. Cras dapibus, lacus quis luctus consequat, erat felis bibendum risus, sit amet tincidunt nisi eros rhoncus erat. Integer interdum, elit condimentum feugiat imperdiet, augue tortor pharetra nunc, porta auctor sapien orci id erat. Suspendisse vel metus sit amet purus malesuada sollicitudin. Nam sed felis vel nulla gravida scelerisque eget et nisi. Phasellus sed molestie velit.'

        },
        {
            title: "Prueba de título 3",
            date: "Fecha de publicación: " + moment().format('dddd[,] D [de] MMMM [de] YYYY'),
            content: 'Ut nulla aute enim ullamco. Laboris nulla nulla aliquip Lorem incididunt adipisicing eiusmod exercitation do quis qui quis nisi ullamco. Non minim ipsum occaecat do quis nulla sunt reprehenderit laborum ullamco aliquip adipisicing magna. Ut aute cupidatat id laborum nostrud qui id pariatur proident irure. Laboris reprehenderit ut fugiat amet nulla exercitation esse. Veniam esse do sit est irure do velit aliqua. Sint duis labore nisi nisi ex esse fugiat do laboris dolor velit et.',
            extended: 'Aenean nec congue mi, sagittis congue nibh. Proin lacus risus, malesuada rhoncus nulla ac, hendrerit bibendum ipsum. Vivamus euismod magna nec leo congue, non fermentum mi hendrerit. Mauris euismod fermentum ultricies. Etiam nec congue leo, sed fringilla nibh. Integer finibus massa sit amet imperdiet sodales. Nulla ullamcorper vestibulum lorem quis tristique. Ut condimentum justo dolor, et lacinia justo aliquam et. Aenean non ipsum viverra, venenatis quam ut, tempor ex. Cras ut justo id felis pretium suscipit in non urna. Sed dictum, odio eu vehicula luctus, quam purus fermentum diam, vel sollicitudin purus velit ac diam. Cras dapibus, lacus quis luctus consequat, erat felis bibendum risus, sit amet tincidunt nisi eros rhoncus erat. Integer interdum, elit condimentum feugiat imperdiet, augue tortor pharetra nunc, porta auctor sapien orci id erat. Suspendisse vel metus sit amet purus malesuada sollicitudin. Nam sed felis vel nulla gravida scelerisque eget et nisi. Phasellus sed molestie velit.'

        },
        {
            title: "Prueba de título 4",
            date: "Fecha de publicación: " + moment().format('dddd[,] D [de] MMMM [de] YYYY'),
            content: 'Ut nulla aute enim ullamco. Laboris nulla nulla aliquip Lorem incididunt adipisicing eiusmod exercitation do quis qui quis nisi ullamco. Non minim ipsum occaecat do quis nulla sunt reprehenderit laborum ullamco aliquip adipisicing magna. Ut aute cupidatat id laborum nostrud qui id pariatur proident irure. Laboris reprehenderit ut fugiat amet nulla exercitation esse. Veniam esse do sit est irure do velit aliqua. Sint duis labore nisi nisi ex esse fugiat do laboris dolor velit et.',
            extended: 'Aenean nec congue mi, sagittis congue nibh. Proin lacus risus, malesuada rhoncus nulla ac, hendrerit bibendum ipsum. Vivamus euismod magna nec leo congue, non fermentum mi hendrerit. Mauris euismod fermentum ultricies. Etiam nec congue leo, sed fringilla nibh. Integer finibus massa sit amet imperdiet sodales. Nulla ullamcorper vestibulum lorem quis tristique. Ut condimentum justo dolor, et lacinia justo aliquam et. Aenean non ipsum viverra, venenatis quam ut, tempor ex. Cras ut justo id felis pretium suscipit in non urna. Sed dictum, odio eu vehicula luctus, quam purus fermentum diam, vel sollicitudin purus velit ac diam. Cras dapibus, lacus quis luctus consequat, erat felis bibendum risus, sit amet tincidunt nisi eros rhoncus erat. Integer interdum, elit condimentum feugiat imperdiet, augue tortor pharetra nunc, porta auctor sapien orci id erat. Suspendisse vel metus sit amet purus malesuada sollicitudin. Nam sed felis vel nulla gravida scelerisque eget et nisi. Phasellus sed molestie velit.'

        },
        {
            title: "Prueba de título 5",
            date: "Fecha de publicación: " + moment().format('dddd[,] D [de] MMMM [de] YYYY'),
            content: 'Ut nulla aute enim ullamco. Laboris nulla nulla aliquip Lorem incididunt adipisicing eiusmod exercitation do quis qui quis nisi ullamco. Non minim ipsum occaecat do quis nulla sunt reprehenderit laborum ullamco aliquip adipisicing magna. Ut aute cupidatat id laborum nostrud qui id pariatur proident irure. Laboris reprehenderit ut fugiat amet nulla exercitation esse. Veniam esse do sit est irure do velit aliqua. Sint duis labore nisi nisi ex esse fugiat do laboris dolor velit et.',
            extended: 'Aenean nec congue mi, sagittis congue nibh. Proin lacus risus, malesuada rhoncus nulla ac, hendrerit bibendum ipsum. Vivamus euismod magna nec leo congue, non fermentum mi hendrerit. Mauris euismod fermentum ultricies. Etiam nec congue leo, sed fringilla nibh. Integer finibus massa sit amet imperdiet sodales. Nulla ullamcorper vestibulum lorem quis tristique. Ut condimentum justo dolor, et lacinia justo aliquam et. Aenean non ipsum viverra, venenatis quam ut, tempor ex. Cras ut justo id felis pretium suscipit in non urna. Sed dictum, odio eu vehicula luctus, quam purus fermentum diam, vel sollicitudin purus velit ac diam. Cras dapibus, lacus quis luctus consequat, erat felis bibendum risus, sit amet tincidunt nisi eros rhoncus erat. Integer interdum, elit condimentum feugiat imperdiet, augue tortor pharetra nunc, porta auctor sapien orci id erat. Suspendisse vel metus sit amet purus malesuada sollicitudin. Nam sed felis vel nulla gravida scelerisque eget et nisi. Phasellus sed molestie velit.'

        }
    ]

    posts.forEach((item, index) => {
        var html_post = `
            <article class="post">
                    <h2>${item.title}</h2>
                    <p class="fecha">${item.date}</p>
                    <p>${item.content}</p>
                    <p id = "parrafo${index}" hidden = "true">${item.extended}</p>
                    <button id = "boton${index}"class="boton-mas" onclick="mostrarMas(${index})">Mostrar más</button>
                </article>
            `;
        $("#posts").append(html_post);
    });

    //Selector de Tema
    var tema = $("#theme");
    if (localStorage.getItem("theme") != null) {
        tema.attr("href", localStorage.getItem("theme"));
    }

    $("#selector-tema").mouseover(function() {
        $(this).animate({ left: '30px' }, 600);
    }).mouseleave(function() {
        $(this).animate({ left: '0' }, 600);
    });

    $("#tema-verde").click(function() {
        tema.attr("href", "css/green.css");
        localStorage.setItem("theme", "css/green.css");
        cambiarFotosSlider();
    });
    $("#tema-rojo").click(function() {
        tema.attr("href", "css/red.css");
        localStorage.setItem("theme", "css/red.css");
        cambiarFotosSlider();
    });
    $("#tema-azul").click(function() {
        tema.attr("href", "css/blue.css");
        localStorage.setItem("theme", "css/blue.css");
        cambiarFotosSlider();
    });

    //Scroll hacia arriba de la página.
    $("#subir").click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 2000, "easeInBounce");
        return false;
    });

    //Fotos del slider según tema;
    cambiarFotosSlider();

    //Login // FALTA POR HACER
    $("#login form").submit(function(e) {
        e.preventDefault();
        if ($("#form_name").val() != "" &&
            $("#form_email").val() != "" &&
            $("#form_password").val() != "") {
            localStorage.setItem("user", $("#form_name").val());
            $("#login").html("<hr style='margin: 80px 0'> <h3 style='text-transform: uppercase; text-align: center;'>" + localStorage.getItem("user") + "</h3>");

        } else {
            alert("Rellena todos los campos"); //TODO cambiar aler por dialog widget de jquery ui
        }
        return false;
    });

}

function mostrarMas(i) {
    $("#parrafo" + i).show(1000);
    $("#boton" + i).text("Mostrar menos").attr("onclick", `mostrarMenos(${i})`);
}

function mostrarMenos(i) {
    $("#parrafo" + i).hide(1000);
    $("#boton" + i).text("Mostrar más").attr("onclick", `mostrarMas(${i})`);
}

function cambiarFotosSlider() { //Fotos del slider según tema;
    var tema_actual = $("#theme").attr("href");

    if (tema_actual == "css/red.css") {
        $("#foto-1").attr("src", "img/frambuesas.jpg");
        $("#foto-2").attr("src", "img/manzanas.jpg");
        $("#foto-3").attr("src", "img/candado.jpg");
    } else if (tema_actual == "css/green.css") {
        $("#foto-1").attr("src", "img/rana.jpg");
        $("#foto-2").attr("src", "img/bosque.jpg");
        $("#foto-3").attr("src", "img/ortigas.jpg");
    } else {
        $("#foto-1").attr("src", "img/isla.jpg");
        $("#foto-2").attr("src", "img/montana.jpg");
        $("#foto-3").attr("src", "img/pez.jpg");
    }
}