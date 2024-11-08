import fs, { configureSingle } from "@zenfs/core";
import { WebStorage } from "@zenfs/dom";
import { setValue } from "../store/slices/CodeSlice";
import store from "../store/store";
await configureSingle({ backend: WebStorage, storage: localStorage });
// const rootDir = fs.opendirSync("/");
// console.log("rd: ", rootDir)
const contents = fs.readdirSync("/");
console.log("contents : ", contents);
console.log
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
    store.dispatch(setValue(value));
    fs.writeFileSync(filePath, value);
    const contents = fs.readFileSync(filePath, "utf-8");
    console.log(contents);
    //this.setIframeContent(value);
    return;
  }
}
