/**
 * Utils to help with tests, clearing/creating codemirror instances etc.
 */

var testUtils = {
  clearCodeMirrorEditor: function() {
    editor.setValue('');
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
