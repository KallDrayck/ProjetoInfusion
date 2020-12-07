(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    var menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        widthEnabled: 1024
    })

    var carouselImgs = new Carousel ({ 
        container: '.laptop-slider .slideshow',
        itens: 'figure', //dentro do slideshow vai procurar esses itens, as tags figures, toda figure e ver os botoes
        btnPrev: '.prev',
        btnNext: '.next'
    })

    var carouselQuotes = new Carousel ({ 
        container: '.quote-slideshow',
        itens: 'figure', //dentro do slideshow vai procurar esses itens, as tags figures, toda figure e ver os botoes
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()