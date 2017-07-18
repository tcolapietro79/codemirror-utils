describe('Wrap With Abbreviation Command (wrap-with-abbreviation.js)', function() {
  beforeEach(function() {});

  // HTML Tests
  it('HTML: Wrap Selection With Abbreviation', function() {
    testUtils.prepare({ language: 'htmlmixed' });

    editor.setValue('<div></div>');
    editor.setSelection({ line: 0, ch: 0 }, { line: 0, ch: 12 });
    window.codeMirrorTestDialogData = 'div';
    editor.execCommand('emmetWrapWithAbbreviation');

    expect(editor.getValue()).to.be.equal('<div>\n  <div></div>\n</div>');
  });
});
