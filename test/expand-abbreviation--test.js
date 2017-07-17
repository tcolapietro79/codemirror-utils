describe('Expand Abbreviation Command (expand-abbreviation.js)', function() {
  beforeEach(function() {});

  // HTML Tests
  it('HTML: Expand simple html', function() {
    testUtils.prepare({ language: 'htmlmixed' });

    editor.setValue('div');
    editor.setCursor({ line: 0, ch: 3 });
    editor.execCommand('emmetExpandAbbreviation');

    expect(editor.getValue()).to.be.equal('<div></div>');
  });

  // CSS Tests
  it('CSS: Expand with Fuzzy Matching', function() {
    testUtils.prepare({ language: 'css' });

    editor.setValue('bg');
    editor.setCursor({ line: 0, ch: 2 });
    editor.execCommand('emmetExpandAbbreviation');

    expect(editor.getValue()).to.be.equal('background: #000;');
  });

  it('CSS: Still expand when enclosed in brackets', function() {
    testUtils.prepare({ language: 'css' });

    editor.setValue('.h1{bg}');
    editor.setCursor({ line: 0, ch: 6 });
    editor.execCommand('emmetExpandAbbreviation');

    expect(editor.getValue()).to.be.equal('.h1{background: #000;}');
  });

  it("CSS: Don't expand on class names", function() {
    testUtils.prepare({ language: 'css' });

    editor.setValue('.class');
    editor.setCursor({ line: 0, ch: 6 });
    editor.execCommand('emmetExpandAbbreviation');

    expect(editor.getValue()).to.be.equal('.class');
  });
});
