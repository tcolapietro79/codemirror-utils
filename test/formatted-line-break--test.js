describe('Testing Formatted Line Break Command', function() {
  beforeEach(function() {});

  // HTML Tests
  it('HTML: Insert Formatted Line Break (2 spaces)', function() {
    testUtils.prepare({ language: 'htmlmixed' });

    editor.setValue('<div></div>');
    editor.setCursor({ line: 0, ch: 5 });
    editor.execCommand('emmetInsertLineBreak');

    expect(editor.getValue()).to.be.equal('<div>\n  \n</div>');

    var cursor = editor.getCursor();
    expect(cursor.line).to.be.equal(1);
    expect(cursor.ch).to.be.equal(2);
  });

  it('HTML: Insert Formatted Line Break (4 spaces)', function() {
    testUtils.prepare({ language: 'htmlmixed' });

    editor.setOption('indentUnit', 4);

    editor.setValue('<div></div>');
    editor.setCursor({ line: 0, ch: 5 });
    editor.execCommand('emmetInsertLineBreak');

    expect(editor.getValue()).to.be.equal('<div>\n    \n</div>');

    var cursor = editor.getCursor();
    expect(cursor.line).to.be.equal(1);
    expect(cursor.ch).to.be.equal(4);
  });

  it('HTML: Insert Indented Formatted Line Break (spaces)', function() {
    testUtils.prepare({ language: 'htmlmixed' });

    editor.setValue('<div>\n  <div></div>\n</div>');
    editor.setCursor({ line: 1, ch: 7 });
    editor.execCommand('emmetInsertLineBreak');

    expect(editor.getValue()).to.be.equal(
      '<div>\n  <div>\n    \n  </div>\n</div>'
    );

    var cursor = editor.getCursor();
    expect(cursor.line).to.be.equal(2);
    expect(cursor.ch).to.be.equal(4);
  });

  it('HTML: Insert Formatted Line Break (tabs)', function() {
    testUtils.prepare({ language: 'htmlmixed' });

    editor.setOption('indentWithTabs', true);

    editor.setValue('<div></div>');
    editor.setCursor({ line: 0, ch: 5 });
    editor.execCommand('emmetInsertLineBreak');

    expect(editor.getValue()).to.be.equal('<div>\n\t\n</div>');

    var cursor = editor.getCursor();
    expect(cursor.line).to.be.equal(1);
    expect(cursor.ch).to.be.equal(1);
  });
});
