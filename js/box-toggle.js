$(document).ready(function(){
    $('.tgl').before('<span><h2>&#xf142 Experiência Profissional</h2>&#xf0d7</span>');
    $('.tgl').css('display','none')
    
    $('.tgl2').before('<span><h2>&#xf19d Formação</h2>&#xf0d7</span>');
    $('.tgl2').css('display', 'none')
    
    $('.tgl3').before('<span><h2>&#xf19d Formação Complementar</h2>&#xf0d7</span>');
    $('.tgl3').css('display', 'none')
    
    $('.tgl4').before('<span><h2>&#xf142 Competências</h2>&#xf0d7</span>');
    $('.tgl4').css('display', 'none')
    
    $('.tgl5').before('<span><h2>&#xf129 Informações Complementares</h2>&#xf0d7</span>');
    $('.tgl5').css('display', 'none')
                
    $('span', '#box-toggle').click(function() {
        $(this).next().slideToggle('medium')
        .siblings('.tgl:none','.tgl2:none','.tgl3:none','.tgl4:none','.tgl5:none').slideToggle('medium');						
    });
})