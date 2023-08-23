$(document).ready(function() {
    /* Adiciona a tarefa e risca a linha aao concluir. */

    $('#botao-adicionar').click(function() {
        const adicionaTarefa = $('#tarefas').val();
        const tarefaAdicionada = $('<li></li>').text(adicionaTarefa);
        $('#lista-tarefas').append(tarefaAdicionada);
        $('ol').on('click', 'li',function() {
            $(this).toggleClass('selecao');
        })
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
    });
});
