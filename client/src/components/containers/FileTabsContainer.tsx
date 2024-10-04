import React from "react";
import FileTab from "../editor-components/editor-view-components/FileTab";
import Files from "../../editor/files.json";

interface PropTypes {
  tabs?: any;
}

const FileTabsContainer: React.FC<PropTypes> = ({ tabs }) => {
  interface FileStructure {
    [path: string]: {
      value: string;
      title: string;
      file_type: string;
    };
  }
  const files: FileStructure = Files;
  const paths: string[] = Object.keys(Files);
  const TABS: any = paths.map((path) => {
    return <FileTab tab_file_type={files[path].file_type} title={files[path].title} path={path} />;
  });
  return <div className="monaco-file-tabs-container align-row">{TABS}</div>;
};

export default FileTabsContainer;
