$(document).ready(function(){
    $('.tgl').before('<span><h2>&#xf142 Experiência Profissional &#xf0d7</h2></span>');
    $('.tgl').css('display','none')
    
    $('.tgl2').before('<span><h2>&#xf19d Formação &#xf0d7</h2></span>');
    $('.tgl2').css('display', 'none')
    
    $('.tgl3').before('<span><h2>&#xf19d Formação Complementar &#xf0d7</h2></span>');
    $('.tgl3').css('display', 'none')
    
    $('.tgl4').before('<span><h2>&#xf142 Competências &#xf0d7</h2></span>');
    $('.tgl4').css('display', 'none')
    
    $('.tgl5').before('<span><h2>&#xf129 Informações Complementares &#xf0d7</h2></span>');
    $('.tgl5').css('display', 'none')
                
    $('span', '#box-toggle').click(function() {
        $(this).next().slideToggle('medium')
        .siblings('.tgl:none','.tgl2:none','.tgl3:none','.tgl4:none','.tgl5:none').slideToggle('medium');						
    });
})