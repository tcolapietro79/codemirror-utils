'use strict';

import { expand } from '@emmetio/expand-abbreviation';
import { normalizeText, getIndentation } from '../utils';

const dialogCallback = (editor, dialogText, event) => {
  // Selected Text
  let expandOptions = {
    text: editor.getSelection()
  };

  // Expand result, with correct indentation
  let expandedResult = normalizeText(
    editor,
    expand(dialogText, expandOptions),
    getIndentation(editor)
  );

  // Replace the Text
  if (expandedResult) {
    editor.replaceRange(
      expandedResult,
      editor.getCursor(true),
      editor.getCursor(false)
    );
    return true;
  }

  return false;
};

export default function(editor) {
  let dialogMarkup =
    'Wrap With: <input type="text" style="width: 10em" class="CodeMirror-search-field" placeholder="Emmet entry here"/>';

  let dialogOptions = {};

  // Pass on command if something is selected
  if (!editor.somethingSelected()) {
    return editor.constructor.Pass;
  }

  editor.openDialog(
    dialogMarkup,
    function(dialogText, dialogEvent) {
      dialogCallback(editor, dialogText, dialogEvent);
    },
    dialogOptions
  );
}
