/**
 * Utils to help with tests, clearing/creating codemirror instances etc.
 */

var testUtils = {
  clearCodeMirrorEditor: function() {
    editor.setValue('');
    editor.setOption('indentWithTabs', false);
    editor.setOption('indentUnit', 2);
  },

  setLanguage: function(language) {
    editor.setOption('mode', language);
  },

  prepare: function(settings) {
    if (!settings.language) {
      throw 'Each test needs a language';
    }

    this.clearCodeMirrorEditor();
    this.setLanguage(settings.language);
  }
};
