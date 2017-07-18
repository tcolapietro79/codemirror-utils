'use strict';

import { expand } from '@emmetio/expand-abbreviation';
import { normalizeText, getIndentation } from '../utils';
import replaceContent from '../utils/replace-content';

const dialogCallback = (editor, dialogText, event) => {
  // Selected Text
  let expandOptions = {
    text: ['', editor.getSelection(), ''] // Content goes on a new line
  };

  // Expand result, with correct indentation
  let expandedResult = normalizeText(
    editor,
    expand(dialogText, expandOptions),
    getIndentation(editor)
  );

  // Replace the Text
  if (expandedResult) {
    replaceContent(
      editor,
      expandedResult,
      editor.getCursor(true),
      editor.getCursor(false),
      true // Indent
    );
    return true;
  }

  return false;
};

export default function(editor) {
  let dialogMarkup =
    'Wrap With: <input type="text" style="width: 10em" class="CodeMirror-search-field" placeholder="eg: div.class"/>';

  let dialogOptions = {};

  // Pass on command if something is selected
  if (!editor.somethingSelected()) {
    return editor.constructor.Pass;
  }

  // For testing only, automatically callback
  if (window.codeMirrorTestDialogData) {
    dialogCallback(editor, window.codeMirrorTestDialogData);
    return;
  }

  editor.openDialog(
    dialogMarkup,
    function(dialogText, dialogEvent) {
      dialogCallback(editor, dialogText, dialogEvent);
    },
    dialogOptions
  );
}
