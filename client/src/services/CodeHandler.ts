import FilesJSON from "../editor/files.json";
import { setValue } from "../store/slices/CodeSlice";
import store from "../store/store";
console.log("TEST:");
console.log(FilesJSON);
interface FileData {
  value: string;
  title: string;
  file_type: string;
}

interface FileStructure {
  [path: string]: FileData;
}

export default class CodeHandler {
  setStateCallback;
  filesData: FileStructure = structuredClone(FilesJSON);
  constructor(setStateCallback: any) {
    this.setStateCallback = setStateCallback;
  }
  setIframeContent(content: string) {
    var iframe = document.querySelector(".output-iframe") as HTMLIFrameElement;
    var doc = iframe.contentDocument;
    if (doc) {
      doc.open();
      doc.write(content);
      doc.close();
    } else {
      console.error("Unable to access iframe content.");
    }
  }

  handleCodeChanged(value: string, filePath: string) {
    this.filesData[filePath].value = value;
    console.log(this.filesData[filePath].value)
    this.setStateCallback(this.filesData[filePath].value);
    this.setStateCallback(value);
    store.dispatch(
      setValue(value),
    );
    console.log("CODE VALUE CHANGED: ", store.getState().codeState.currentValue);
    //this.setIframeContent(value);
    return;
  }
}
