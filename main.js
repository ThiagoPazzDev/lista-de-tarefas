$('#adicionar').on('click', function(e){
    e.preventDefault()

    const tarefaDigitada = $('#tarefa').val()

    const novaLi = $(`<li>${tarefaDigitada}</li>`).appendTo('ul').hide().fadeIn(700)

    $(novaLi)

    $('li').on('click',function(){
        $(this).css('text-decoration','line-through')
        
    })

})



