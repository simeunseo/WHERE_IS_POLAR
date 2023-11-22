import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';

const WebcamCapture = ({ handleImgSrcChange }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    handleImgSrcChange(imageSrc);
  }, [webcamRef, setImgSrc, handleImgSrcChange]);

  return (
    <WebcamCaptureWrapper>
      {imgSrc ? (
        <RecaptureButton onClick={() => setImgSrc(null)}>다시찍기</RecaptureButton>
      ) : (
        <CaptureButton onClick={capture}>촬영하기</CaptureButton>
      )}
      {imgSrc ? (
        <img src={imgSrc} />
      ) : (
        <StyledWebcam
          mirrored={true}
          imageSmoothing={true}
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/webp"
        />
      )}
    </WebcamCaptureWrapper>
  );
};

export default WebcamCapture;

const WebcamCaptureWrapper = styled.div`
  position: relative;
  margin-top: 3rem;
`;

const StyledWebcam = styled(Webcam)`
  width: 64rem;
  height: 48rem;
`;

const CaptureButton = styled.button`
  position: absolute;
  z-index: 1;
  right: 3rem;
  bottom: 3rem;
  ${({ theme }) => theme.fonts.head2}
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey10};

  border: 0.1rem solid ${({ theme }) => theme.colors.white};

  width: max-content;
  padding: 1rem 1.4rem;
  border-radius: 2rem;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey10};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const RecaptureButton = styled.button`
  position: absolute;
  z-index: 1;
  right: 3rem;
  bottom: 3rem;
  ${({ theme }) => theme.fonts.head2}
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey10};

  border: 0.1rem solid ${({ theme }) => theme.colors.white};

  width: max-content;
  padding: 1rem 1.4rem;
  border-radius: 2rem;

  cursor: pointer;
`;
