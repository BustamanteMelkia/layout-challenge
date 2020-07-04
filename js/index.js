$(document).ready(function(){

    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true
      });

    const publicaciones = [
        {
            title: "Publicacion 1",
            date: 'Publicado el '+moment().format('LL'),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente facere doloribus magnam porro omnis facilis maiores error, dolores asperiores quam culpa autem. Alias adipisci cumque possimus similique ipsum suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente facere doloribus magnam porro omnis facilis maiores error, dolores asperiores quam culpa autem. Alias adipisci cumque possimus similique ipsum suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente facere doloribus magnam porro omnis facilis maiores error, dolores asperiores quam culpa autem. Alias adipisci cumque possimus similique ipsum suscipit? "
        },
        {
            title: "Publicacion 2",
            date: 'Publicado el '+moment().format('LL'),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente facere doloribus magnam porro omnis facilis maiores error, dolores asperiores quam culpa autem. Alias adipisci cumque possimus similique ipsum suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente facere doloribus magnam porro omnis facilis maiores error, dolores asperiores quam culpa autem. Alias adipisci cumque possimus similique ipsum suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente facere doloribus magnam porro omnis facilis maiores error, dolores asperiores quam culpa autem. Alias adipisci cumque possimus similique ipsum suscipit? "
        },
        {
            title: "Publicacion 3",
            ddate: 'Publicado el '+moment().format('LL'),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente facere doloribus magnam porro omnis facilis maiores error, dolores asperiores quam culpa autem. Alias adipisci cumque possimus similique ipsum suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente facere doloribus magnam porro omnis facilis maiores error, dolores asperiores quam culpa autem. Alias adipisci cumque possimus similique ipsum suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente facere doloribus magnam porro omnis facilis maiores error, dolores asperiores quam culpa autem. Alias adipisci cumque possimus similique ipsum suscipit? "
        },
    ];

    publicaciones.forEach((item, index)=>{
        renderPost(item);
    })



});

function renderPost(dataPost){
    const post = `  <article class="post" >
                        <div class="encabezado-post">
                            <div class="descripcion-post">
                                <h2 class="titulo">
                                    ${dataPost.title}
                                </h2>

                                <p class="fecha">
                                    ${dataPost.date}
                                </p>
                            </div>
                            <div class="comentarios">
                                <a href="#" class="btn d-inline-block">92 Comentarios</a>
                            </div>
                        </div>
                        <p class="contenido-post">
                            ${dataPost.content}
                        </p>
                    </article>`;

    $('.caja-principal').append(post);
}