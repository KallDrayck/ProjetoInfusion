function Carousel(config){
    this.container = ( typeof config.container === 'string') ? 
    document.querySelector(config.container) : config.container
    
    this.itens = (typeof config.itens === 'string') ? 
    this.container.querySelectorAll(config.itens) : config.itens
    
    this.btnPrev = (typeof config.btnPrev === 'string') ? 
    this.container.querySelector(config.btnPrev) : config.btnPrev
    
    this.btnNext = (typeof config.btnNext === 'string') ? 
    this.container.querySelector(config.btnNext) : config.btnNext
    
    var _this = this; //_this representa a instancia, o proprio carrosel
    var _currentSlide = 0 //slade atual
    
    init() //responsavel para iniciar o carrosel
    
    function init(){
        var _show = _this.container.querySelectorAll('.show') //vai percorrer a seleção 
        
        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('show') // vai percorrer todas e tirar a class 
        })
        //depois de ter removido todos, vai add 
        _this.itens[0].classList.add('show')
        _this.btnNext.removeAttribute('style')
        _this.btnPrev.removeAttribute('style')
        
        addListeners()        
    }
    
    function addListeners(){
        _this.btnNext.addEventListener('click', showNextSlide)
        _this.btnPrev.addEventListener('click', showPrevSlide)
    }
    
    function showNextSlide(){
        _currentSlide++;
        showSlide()
    }
    
    function showPrevSlide(){
        _currentSlide--;
        showSlide()
    }
    
    function showSlide(){
        var qtd = _this.itens.length; //numero de itens do arrays
        var slide = _currentSlide % qtd;
        slide = Math.abs(slide); //math.abs vai sempre retornar o valor absoluto, impedindo numeros negativos
        
        _this.container.querySelector('.show').classList.remove('show'); //revemo o show 
        _this.itens[slide].classList.add('show') //add o show no proximo slide 
        
    }
    
}