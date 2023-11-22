import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const WebcamCapture = ({ handleImgSrcChange }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    handleImgSrcChange(imageSrc);
  }, [webcamRef, setImgSrc, handleImgSrcChange]);

  return (
    <>
      <Webcam mirrored={true} imageSmoothing={true} audio={false} ref={webcamRef} screenshotFormat="image/webp" />
      <button type="button" onClick={capture}>
        Capture
      </button>
      {imgSrc && <img src={imgSrc} />}
    </>
  );
};

export default WebcamCapture;
