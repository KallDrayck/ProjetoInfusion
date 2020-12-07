function Menu(config){
    this.nav = (typeof config.container === 'string') ? 
    document.querySelector(config.container) : config.container
 
    this.btn = (typeof config.toggleBtn === 'string') ? 
    document.querySelector(config.toggleBtn) : config.toggleBtn

    this.maxWidth = config.widthEnabled || false;

    var _opened = false;
    var _this = this;

    this.btn.removeAttribute('style')
    //closeMenu() //agora ele é chamado abaixo

    if(this.maxWidth){
        window.addEventListener('resize', e => {
            if(window.innerWidth > _this.maxWidth){
                _this.nav.removeAttribute('style')
                _opened = true;
            } else if(!this.nav.getAttribute('style')){
                closeMenu();
            }
        })
        
        if(window.innerWidth <= _this.maxWidth){
            closeMenu();
        }
    }//quando a tela for redimencionada vai disparar esse evento
    

    this.btn.addEventListener('click', openOrClose)

    function openOrClose(){
        if(!_opened){
            openMenu()
        } else {
            closeMenu()
        }
    }
    function openMenu(){
        var _top = _this.nav.getBoundingClientRect().top + 'px' 
        //getBoundingClientRect vai retornar o objeto, nesse caso o top e concatenar com px
        var _style = {
            maxHeight: 'calc(100vh - '+ _top +' )', //calcula o maxHeigth no css
            overflow: 'hidden'
        }
        applyStyleToNav(_style)
        _opened = true;
    }
    function applyStyleToNav(_style){
        //serve para adicionar os styles fazendo o loop
        Object.keys(_style).forEach( stl => {
            //object.keys vai receber um arrey .forEach vai fazer um loop e usar uma erofuncition
            _this.nav.style[stl] = _style[stl]
        })
    }

    function closeMenu(){
        var _style = {
            maxHeight: '0px', //calcula o maxHeigth no css
            overflow: 'hidden'
        }
        
        applyStyleToNav(_style)
        _opened = false;
    }
}