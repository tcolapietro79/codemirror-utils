/**
 * Settings for CodeMirror Emmet/Utils Tests
 */

var testSettings = {
  baseSettings: {
    mode: 'text/html',
    lineNumbers: true,
    markTagPairs: true,
    autoRenameTags: true,
    emmet: {
      markupSnippets: {
        foo: '{div.foo[bar=baz]}'
      },
      stylesheetSnippets: {
        myp: 'my-super: ${1:x};'
      }
    }
  }
};
