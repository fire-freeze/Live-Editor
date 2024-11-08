/** @jsxImportSource @emotion/react */
import React from "react";
import FileTab from "../editor-components/editor-view-components/FileTab";
import store from "../../store/store";
import { useSelector } from "react-redux";
interface TabProps {
  file_type: string;
  title: string;
}
type RootState = ReturnType<typeof store.getState>;
const FileTabsContainer: React.FC = () => {
  const activeTabs = useSelector((state: RootState) => state.explorerState.activeTabs);

  const tabPaths = Object.keys(activeTabs);
  const TABS = tabPaths.map((path) => {
    const { file_type, title }: TabProps = activeTabs[path];
    return <FileTab tab_file_type={file_type} title={title} path={path} key={path} />;
  });

  return <div className="monaco-file-tabs-container align-row">{TABS}</div>;
};

export default FileTabsContainer;
