import React, { FC } from "react";
import type { ReactQuillProps } from "react-quill";
import ReactQuill from "react-quill";
import "./style.css";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

const TextEditor: FC<ReactQuillProps> = ({ ...props }) => {
  return (
    <ReactQuill
      id="ReactQuill"
      modules={{
        toolbar: toolbarOptions,
      }}
      theme="snow"
      {...props}
    />
  );
};

export default TextEditor;
