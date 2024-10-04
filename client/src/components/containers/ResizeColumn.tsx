import React, { useEffect, useRef } from "react";

interface PropTypes {}

const resizeStatus: {
  isResizing: boolean,
  targetSash?: HTMLElement | undefined
} = {
  isResizing: false,
  targetSash : undefined,
};

const mousemoveHandler = (event: MouseEvent) => {
  const targetType = resizeStatus.targetSash?.dataset.resizeTarget;
  const targetElement = document.querySelector(targetType === "explorer" ? ".explorer-container" : ".code-output-frame") as HTMLElement;
  const editorContainer = document.querySelector(".editor-view") as HTMLElement;

  let newWidth;
  const sash_x : number = (resizeStatus.targetSash as HTMLElement)?.getBoundingClientRect().x;
  if (targetType === "explorer") {
    newWidth = targetElement.clientWidth + (event.clientX - sash_x);
    editorContainer.style.width = editorContainer.clientWidth - (event.clientX - sash_x) + "px";
  }

  if (targetType === "output") {
    newWidth = targetElement.clientWidth - (event.clientX - sash_x);
    editorContainer.style.width = editorContainer.clientWidth + (event.clientX - sash_x) + "px";
  }
  targetElement.style.width = `${newWidth}px`;
};

const mouseupHandler = () => {
  const sashContainer = document.querySelector(".sash-container") as HTMLElement;
  document.removeEventListener("mouseup", mouseupHandler);
  document.removeEventListener("mousemove", mousemoveHandler);
  resizeStatus.isResizing = false;
  sashContainer.style.cursor = "";
  sashContainer.style.pointerEvents = "none";
  (resizeStatus.targetSash as HTMLElement).classList.remove("sash-active");
  document.exitPointerLock();
};

const SashContainer: React.FC<PropTypes> = ({}) => {
  return (
    <div className="sash-container">
      <ResizeSash resizeTarget="explorer" />
      <ResizeSash resizeTarget="output" />
    </div>
  );
};

interface SashPropTypes {
  left?: number;
  right?: number;
  resizeTarget: string;
}

const ResizeSash: React.FC<SashPropTypes> = ({ resizeTarget }) => {
  const sashRef = useRef<any>(undefined);
  useEffect(() => {
    const selector: string = resizeTarget === "explorer" ? ".explorer-container" : ".code-output-frame";
    const target = document.querySelector(selector) as HTMLElement;

    const setSashPosition = () => {
      sashRef.current.style.left =
        (sashRef.current as HTMLElement).dataset.resizeTarget === "output" ? target.getBoundingClientRect().x + "px" : target.clientWidth + "px";
      const sashContainer = document.querySelector(".sash-container") as HTMLElement;
      const editorContainer = document.querySelector(".editor-container") as HTMLElement;
      sashContainer.style.height = editorContainer.clientHeight + "px";
    };
    setSashPosition();
    window.onresize = setSashPosition;
    const resizeObserver = new ResizeObserver(setSashPosition);
    sashRef.current && resizeObserver.observe(target);
    return () => {
      resizeObserver.unobserve(target);
    };
  }, [sashRef]);

  return (
    <div
      ref={sashRef}
      className="resize-sash"
      data-resize-target={resizeTarget}
      onMouseDown={(event: React.MouseEvent) => {
        resizeStatus.isResizing = true;
        resizeStatus.targetSash = event.currentTarget as HTMLElement;
        event.currentTarget
        event.currentTarget.classList.add("sash-active");
        const sashContainer = document.querySelector(".sash-container") as HTMLElement;
        sashContainer.style.pointerEvents = "auto";
        sashContainer.style.cursor = "ew-resize";
        document.addEventListener("mouseup", mouseupHandler);
        document.addEventListener("mousemove", mousemoveHandler);
      }}
    ></div>
  );
};

export default SashContainer;
