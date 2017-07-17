describe('Wrap With Abbreviation Command (wrap-with-abbreviation.js)', function() {
  beforeEach(function() {});

  // HTML Tests
  it('HTML: Wrap Selection With Abbreviation', function() {
    testUtils.prepare({ language: 'htmlmixed' });

    editor.setValue('<div></div>');
    editor.setCursor({ line: 0, ch: 5 });
    editor.execCommand('emmetInsertLineBreak');

    expect(editor.getValue()).to.be.equal('<div>\n  \n</div>');

    var cursor = editor.getCursor();
    expect(cursor.line).to.be.equal(1);
    expect(cursor.ch).to.be.equal(2);
  });
});
