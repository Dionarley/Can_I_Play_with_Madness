require.config({ paths: { 'vs': '/vs' }});
require(['vs/editor/editor.main'], function() {
    var editor = monaco.editor.create(document.getElementById('editor-container'), {
        value: '// Comece a digitar seu código aqui...',
        language: 'javascript',
        theme: 'vs-dark'
    });
});
