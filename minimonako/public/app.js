require.config({ paths: { 'vs': '/vs' }});
require(['vs/editor/editor.main'], function() {
    var editor = monaco.editor.create(document.getElementById('editor-container'), {
        value: '// Comece a digitar seu código aqui...',
        language: 'javascript',
        theme: 'vs-dark'
    });

    // Lida com a mudança de tema
    document.getElementById('theme-select').addEventListener('change', function(e) {
        monaco.editor.setTheme(e.target.value);
    });

    // Lida com a ação de salvar
    document.getElementById('save-button').addEventListener('click', function() {
        var code = editor.getValue();
        // Aqui você pode adicionar a lógica para salvar o código
        console.log(code);
    });
});
