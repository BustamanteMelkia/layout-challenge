$(document).ready(function(){
    /** Theme selector **/
    
    const theme = $('#theme-color');

    $('.to-green').click(function(){
        theme.attr('href','../css/green.css')
    })

    $('.to-blue').click(function(){
        theme.attr('href','../css/blue.css')
    })

    $('.to-red').click(function(){
        theme.attr('href','../css/red.css')
    })

    /**Scroll subir arriba**/
    $('.subir-arriba').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0    
        },500);
        return false;
    })


    /** Registro **/
    $('.formulario').submit(function(e){
        e.preventDefault();
        const name = $('#name').val();
        const password = $('#password').val();
        if (is_empty(name) || is_empty(password))
            alert("Error: Campos vacios");
        else{
            // localStorage.setItem(name,password)
            $('.formulario').css('display','none');
            $('.contacto').html(`
                <p class='welcome'>Bienvenido: ${name}</p>
                <a href='#' id='salir' class='btn'>Salir</a>
            `);
            $('#salir').click(function(){
                // localStorage.clear();
                location.reload();  
            })
        }
    })

    /** clock **/
    setInterval(function(){
        $('.reloj').html(moment().format('LTS'));
    },1000);
    

});


function is_empty(value){
    if(value == "" || value == "undefined")
        return true;
    return false;
}