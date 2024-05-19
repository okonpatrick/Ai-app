import React, { useState, useEffect } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import SnapshotImg from "./../assets/img/snapshot1.png";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GeminiLeafClassifier = () => {
  const [hasCamera, setHasCamera] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const webcamRef = React.createRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);
  const [classes, setClasses] = useState([]);

  //come back
  //this is where the project halted because roboflow blocked their free api endpoint.
  //The class props are not tested yet because thier data needs to be gotten from the enpoint results.
  const GoogleGenerativeAIComponent = ({ classes }) => {
    useEffect(() => {
      const run = async () => {
        // Access your API key as an environment variable
        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `Write the cure for the disease in ${classes.join(", ")}`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        console.log(text);
        console.log(classes);
      };
      run();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [classes]); // Run whenever the classes prop changes
    return <div>Generating content...</div>;
  };

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      setHasCamera(devices.some((device) => device.kind === "videoinput"));
    });
  }, []);
  
  const handleCaptureImage = async () => {
    if (!webcamRef.current) return;
    const capturedImage = await webcamRef.current.getScreenshot();
    const imageBlob = dataURItoBlob(capturedImage); // Assuming dataURI format
    setSelectedFile(imageBlob);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please capture or select an image to upload.");
      return;
    }
    setIsLoading(true);
    setUploadResult(null); // Clear previous results

    const formData = new FormData();
    formData.append("file", selectedFile); // Assuming the API expects the image in a 'file' field

    try {
      const response = await axios.post(
        "https://detect.roboflow.com/plantdoc-mwbvd/1",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set for image upload
          },
          params: {
            api_key: import.meta.env.VITE_ROBOFLOW_API_KEY, // Replace with your actual API key
          },
        }
      );
      const predictions = response.data.predictions;
  // Loop through predictions and extract class values
  const classes = predictions.map((prediction) => prediction.class);

  // Now the `classes` array contains all the class values from predictions
  setClasses(classes);
      setUploadResult(response.data);
    } catch (error) {
      setUploadResult({ error: "An error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCameraToggle = () => {
    setIsCameraOn(!isCameraOn);
  };

  return (
    <div className="bg-[#ECF0EA]">
      {hasCamera ? (
        <>
          {isCameraOn ? <Webcam audio={false} ref={webcamRef} className="" /> : null}
        {isCameraOn ? <img
            src={SnapshotImg}
            className=" hidden pt-40 text-center align-center m-auto"
          /> : <img
          src={SnapshotImg}
          className=" pt-40 text-center align-center m-auto"
        />} 
          <div className="text-center">
            <button
              onClick={handleCameraToggle}
              className="text-center text-xl font-bold lg:p-5 lg:m-4 pt-6 text-black"
            >
              {isCameraOn ? "Stop Camera" : "Take a Snapshot"}
            </button>
          </div>

          <div className="m-3 text-center">
            <button
              onClick={handleCaptureImage}
              disabled={!isCameraOn}
              className="text-xl font-bold bg-[#6FBD53] lg:p-5 lg:m-4 p-2 text-white"
            >
              Capture Image
            </button>
          </div>
        </>
      ) : (
        <p>No camera detected on this device.</p>
      )}

      <div className="text-center">
      <div className="text-center mt-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="text-center text-sm font-bold bg-[#6FBD53] lg:p-5 lg:m-4 p-3 text-white"
        />
      </div>

        <button onClick={handleUpload} disabled={isLoading} className="px-4 text-white m-4 bg-[#6FBD53]">
          {isLoading ? "Identifying..." : "Identify"}
        </button>
        <p className="text-[#6FBD53] pb-32">save and identify later</p>
        {uploadResult && (
          <div className="">
            {uploadResult.error ? (
              <p className="error">{uploadResult.error}</p>
            ) : (
              <div>
                 <p>
                Classification Result: {JSON.stringify(uploadResult, null, 2)}
              </p>
              <div>

              <h2 className="font-bold">Description</h2>
              <GoogleGenerativeAIComponent classes={handleUpload}/>
              </div>
                </div>      
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GeminiLeafClassifier;
// Helper function to convert data URI to Blob (assuming dataURI format)
function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(",")[1]);
  const mimeType = dataURI.split(",")[0].split(":")[1].split(";")[0];
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const intArray = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([arrayBuffer], { type: mimeType });
  return blob;
}