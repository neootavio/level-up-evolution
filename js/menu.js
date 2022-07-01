function menu(){
    var nav = $('nav');
    nav.delegate('a','click', function(e){
      nav.find('.active').removeClass('active');    
      $(e.target).closest('a').addClass('active');
    }
  }