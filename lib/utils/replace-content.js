/**
 * Replaces the content, with new content (duh)
 */

export default function replaceContent(editor, value, start, end, indent) {
  editor.replaceRange(value, start, end);

  // Auto Indent newly created lines
  if (!!indent) {
    var newLines = value.split(/\r\n|\r|\n/).length;
    for (var i = 0; i < newLines; i++) {
      editor.indentLine(start.line + i);
    }
  }
}
