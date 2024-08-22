import { useRef, useState, useEffect } from "react";
import { uploadFile } from "./service/api";
import "./App.css";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        try {
          const data = new FormData();
          data.append("name", file.name);
          data.append("file", file);
          // Now calling uploadFile inside getImage and awaiting its result
          const res = await uploadFile(data);
          console.log(res); // Or update state with this response
          setResult(res.path);
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }
    };

    if (file) {
      // Only attempt upload if file is set
      getImage();
    }
  }, [file]); // whenever the file changes
  const fileInputRef = useRef();
  const onUploadClick = () => {
    fileInputRef.current.click();
    // whatever is the current reference inside fileInputref on clicking it it should do the functionality of the ref
    // now the functionality is mapped into the Upload:button
  };
  return (
    <>
      <div>
        <h1>File Sharing Application</h1>
        <h2>Upload and share the download link.</h2>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          style={{ display: "None" }}
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files[0])} // when the value inside the
          // input:file changes we will set the value of the file to whatever is the value stored inside the input:file
          // this
        />

        <a href={result}>{result}</a>
        {/* input:file is our reference for Upload:button */}
        {/* input:file functionality will be mapped into button */}
      </div>
    </>
  );
}

export default App;
