import { useState, useEffect, useCallback } from "react";
import "./styles.css";

export default function App() {
  const [mediaRecorderType, setMediaRecorderType] = useState("video/webm");
  const [isSupported, setIsSupported] = useState("Not Supported");

  const checkSupportedStatus = useCallback(() => {
    setIsSupported(
      MediaRecorder.isTypeSupported(mediaRecorderType)
        ? "Supported"
        : "Not Supported"
    );
  }, [mediaRecorderType]);

  const onChange = (e) => {
    setMediaRecorderType(e.target.value);
  };

  useEffect(() => {
    checkSupportedStatus();
  }, [mediaRecorderType, checkSupportedStatus]);

  return (
    <div className="App">
      <h1>Webrtc Checking</h1>
      <h2>
        Type:
        <code
          style={{ backgroundColor: "red", color: "black", padding: "10px" }}
        >
          {mediaRecorderType}
        </code>
        isSupported: {isSupported}
      </h2>
      <div>
        <input className="input-type" onChange={onChange} />
        <button className="button" onClick={checkSupportedStatus}>
          Check
        </button>
      </div>
    </div>
  );
}
