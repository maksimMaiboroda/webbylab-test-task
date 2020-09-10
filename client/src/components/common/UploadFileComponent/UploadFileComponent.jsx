import React, { useRef, useState } from "react";
import classes from "./UploadFileComponent.module.scss";
import { Form } from "react-bootstrap";

const UploadFileComponent = ({ getFilmsList }) => {
  const onLoad = () => {
    setTimeout(() => {
      getFilmsList();
    }, 1000);
  };

  const [changeFileName, setChangeFileName] = useState(false);
  const [fileName, setFileName] = useState("");

  const fileInput = useRef(null);

  function handleChange() {
    setFileName(fileInput.current.files[0].name);
    setChangeFileName(true);
  }

  return (
    <div className={classes.uploadWrap}>
      <Form.File id="formcheck-api-custom" custom>
        <form
          className={classes.uploadForm}
          action="/api/films/upload"
          method="post"
          enctype="multipart/form-data"
        >
          <Form.File.Input
            onChange={handleChange}
            ref={fileInput}
            type="file"
            name="filedata"
            isValid
          />
          <Form.File.Label data-browse="Button text">
            {changeFileName ? fileName : "Custom file input"}
          </Form.File.Label>
          <input
            onClick={onLoad}
            className={classes.uploadBntSend}
            type="submit"
            value="Send"
          />
        </form>
      </Form.File>
    </div>
  );
};

export default UploadFileComponent;
