import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    console.log(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <Webcam mirrored={true} imageSmoothing={true} audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button type="button" onClick={capture}>
        Capture
      </button>
      {imgSrc && <img src={imgSrc} />}
    </>
  );
};

export default WebcamCapture;
