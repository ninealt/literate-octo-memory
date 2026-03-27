import { useRef, useEffect, useState } from 'react';

function VideoBackground() {
  const videoRef = useRef(null);
  const [isSafari, setIsSafari] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [useVideo, setUseVideo] = useState(true);

  useEffect(() => {
    // Detectar Safari
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafariBrowser);
    
    // En Safari, usar solo imagen
    if (isSafariBrowser) {
      setUseVideo(false);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    // Timeout: si no carga en 3 segundos, usar imagen
    const timeout = setTimeout(() => {
      if (!videoLoaded) {
        setUseVideo(false);
      }
    }, 3000);

    const handleCanPlay = () => {
      setVideoLoaded(true);
    };

    const handleError = () => {
      setUseVideo(false);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      clearTimeout(timeout);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [videoLoaded]);

  // Solo mostrar imagen en Safari o si el video falla
  if (!useVideo || isSafari) {
    return (
      <div className="video-bg-container">
        <div className="video-bg-fallback" style={{ opacity: 1 }} />
      </div>
    );
  }

  return (
    <div className="video-bg-container">
      {/* Fallback image */}
      <div 
        className="video-bg-fallback"
        style={{ 
          opacity: videoLoaded ? 0 : 1,
          transition: 'opacity 0.8s ease'
        }}
      />
      
      {/* Video MP4 con loop */}
      <video
        ref={videoRef}
        className="video-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ 
          opacity: videoLoaded ? 1 : 0,
          transition: 'opacity 1s ease'
        }}
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoBackground;
