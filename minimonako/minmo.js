require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@0.21.2/min/vs' }});
require(['vs/editor/editor.main'], function() {
    var editor = monaco.editor.create(document.getElementById('container'), {
        value: '// Comece a digitar seu código aqui...',
        language: 'javascript',
        theme: 'vs-dark' // tema opcional
    });
});
