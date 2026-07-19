"use client";

import { useEffect, useRef } from "react";

const DESKTOP_VIDEO = "/videos/hero-desktop.mp4";
const MOBILE_VIDEO = "/videos/hero-mobile.mp4";
const POSTER_IMAGE = "/videos/hero-poster.jpg";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;

    const play = () => {
      void video.play().catch(() => {
        // A browser may wait for the first interaction. The listeners below retry.
      });
    };

    const resumeWhenVisible = () => {
      if (document.visibilityState === "visible") {
        play();
      }
    };

    video.addEventListener("canplay", play);
    window.addEventListener("pointerdown", play, { once: true });
    window.addEventListener("touchstart", play, { once: true });
    document.addEventListener("visibilitychange", resumeWhenVisible);
    play();

    return () => {
      video.removeEventListener("canplay", play);
      window.removeEventListener("pointerdown", play);
      window.removeEventListener("touchstart", play);
      document.removeEventListener("visibilitychange", resumeWhenVisible);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={POSTER_IMAGE}
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      tabIndex={-1}
      className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center"
    >
      <source
        src={MOBILE_VIDEO}
        type="video/mp4"
        media="(max-width: 767px)"
      />
      <source src={DESKTOP_VIDEO} type="video/mp4" />
    </video>
  );
}
