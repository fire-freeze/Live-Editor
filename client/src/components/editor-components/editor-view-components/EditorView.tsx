/** @jsxImportSource @emotion/react */

import { Editor } from "@monaco-editor/react";
import editorTheme from "../../../editor-config/editor-theme.json";
import FileTabsContainer from "../../containers/FileTabsContainer";
import { css } from "@emotion/react";
import globalScriptHandler from "../../../services/globalServicePoint";
import { useState } from "react";

const editorViewStyle = css`
  position: relative;
  width: 50vw;
  min-width: 20em;
  flex-grow: 1;
`;

interface PropTypes {
  children?: React.ReactNode;
}

const EditorView: React.FC<PropTypes> = () => {
  const [codeValue, setCodeValue] = useState<string>("");
  const [currentFilePath, setCurrentFilePath] = useState<string>("/script.js");
  const { CodeHandler } = globalScriptHandler;
  const _codeHandler = new CodeHandler(setCodeValue);
  const applyTheme = () => {
    window.monaco.editor.defineTheme("editor-theme", editorTheme);
    window.monaco.editor.setTheme("editor-theme");
  };
  return (
    <div className="editor-view" css={editorViewStyle}>
      <FileTabsContainer />
      <Editor
        path={currentFilePath}
        value={codeValue}
        language="javascript"
        defaultValue="//some code here"
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={(value: any) => _codeHandler.handleCodeChanged(value, currentFilePath)}
        theme="editor-theme"
        onMount={applyTheme}
      />
    </div>
  );
};

export default EditorView;
