"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_VIDEO = "/videos/hero-desktop.mp4";
const MOBILE_VIDEO = "/videos/hero-mobile.mp4";
const POSTER_IMAGE = "/videos/hero-poster.jpg";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSource, setVideoSource] = useState<string>();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const selectVideo = () => {
      setVideoSource(mediaQuery.matches ? MOBILE_VIDEO : DESKTOP_VIDEO);
    };

    selectVideo();
    mediaQuery.addEventListener("change", selectVideo);

    return () => mediaQuery.removeEventListener("change", selectVideo);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !videoSource) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.load();

    const playVideo = () => {
      void video.play().catch(() => {
        // Some browsers delay autoplay until the first user interaction.
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    };

    video.addEventListener("loadeddata", playVideo);
    video.addEventListener("canplay", playVideo);
    window.addEventListener("pointerdown", playVideo, { once: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    playVideo();

    return () => {
      video.removeEventListener("loadeddata", playVideo);
      video.removeEventListener("canplay", playVideo);
      window.removeEventListener("pointerdown", playVideo);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [videoSource]);

  return (
    <video
      key={videoSource ?? "hero-poster"}
      ref={videoRef}
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={POSTER_IMAGE}
      src={videoSource}
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      tabIndex={-1}
      className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center"
    />
  );
}
