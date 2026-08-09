"use client";

import { useState, useRef, useCallback, useLayoutEffect } from "react";
import ImageRowSection from "@/components/ImageRowSection";
import CardSection from "@/components/CardSection";
import ContentWithImageSection from "@/components/ContentWithImageSection";
import GreenListSection from "@/components/GreenListSection";
import LocationCardsSection from "@/components/LocationCardsSection";
import TestimonialSection from "@/components/TestimonialSection";
import HomecareServices from "@/components/HomecareServices";
import FaqsSection from "@/components/FaqsSection";
import ImageWithOverlaySection from "@/components/ImageWithOverlaySection";

const HERO_VIDEO_SRC = "/melodMeal.mp4";

export default function Home() {
  const [videoWithSound, setVideoWithSound] = useState(false);
  const [videoLoadFailed, setVideoLoadFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const retryVideo = useCallback(() => {
    setVideoLoadFailed(false);
    setVideoWithSound(false);
  }, []);

  useLayoutEffect(() => {
    if (videoLoadFailed) return;
    const v = videoRef.current;
    if (!v) return;
    v.muted = !videoWithSound;
    const tryPlay = () => {
      void v.play().catch(() => {
        v.muted = true;
        void v.play().catch(() => {});
      });
    };
    tryPlay();
    v.addEventListener("loadeddata", tryPlay, { once: true });
    v.addEventListener("canplay", tryPlay, { once: true });
    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      v.removeEventListener("canplay", tryPlay);
    };
  }, [videoLoadFailed, videoWithSound]);

  return (
    <div className="min-h-screen font-sans">
      <section className="relative flex min-h-[60vh] lg:h-[100vh] bg-[#FFEBD9] w-full items-center overflow-hidden  sm:min-h-[75vh] md:min-h-[90vh]">
        {!videoLoadFailed ? (
          <video
            key={HERO_VIDEO_SRC}
            ref={videoRef}
            className="absolute inset-0  w-full object-cover"
            src={HERO_VIDEO_SRC}
            autoPlay
            muted={!videoWithSound}
            loop
            playsInline
            preload="auto"
            title="Hero video"
            onError={() => setVideoLoadFailed(true)}
            onLoadedData={(e) => {
              const el = e.currentTarget;
              el.muted = !videoWithSound;
              void el.play().catch(() => {
                el.muted = true;
                void el.play().catch(() => {});
              });
            }}
          />
        ) : null}

        {!videoWithSound && !videoLoadFailed ? (
          <button
            type="button"
            className="absolute bottom-6 right-6 z-30 rounded-full border border-white/60 bg-white px-4 py-2 text-sm font-semibold text-[#F2711C] shadow-md transition hover:bg-zinc-50 sm:bottom-10 sm:right-10"
            onClick={() => {
              const v = videoRef.current;
              if (v) {
                v.muted = false;
                v.volume = 1;
                void v
                  .play()
                  .then(() => setVideoWithSound(true))
                  .catch(() => {
                    setVideoWithSound(true);
                  });
              } else {
                setVideoWithSound(true);
              }
            }}
          >
            Sound on
          </button>
        ) : null}

        {videoLoadFailed ? (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-zinc-100 px-4 text-center">
            <p className="max-w-md text-sm text-zinc-800 sm:text-base">
              This browser could not play the .mov file. Export as{" "}
              <strong>H.264 .mp4</strong> (fast start) into{" "}
              <code className="text-[#F2711C]">public/</code>.
            </p>
            <button
              type="button"
              onClick={retryVideo}
              className="rounded-md bg-[#F2711C] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Try again
            </button>
          </div>
        ) : null}

        {/* Scrim so the heading stays readable over any video frame */}
        <div className="absolute inset-0 z-10  to-transparent" />

        <div className="relative z-20 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
          <div className="max-w-xl">
            <h1 className="text-xl text-nowrap lg:text-4xl font-extrabold italic leading-tight tracking-tight text-[#FF9A4D] drop-shadow-[0_3px_8px_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl">
              Your Love, Our Care
            </h1>
          </div>
        </div>
      </section>

      <ImageRowSection />
      <CardSection />
      <ContentWithImageSection />
      <GreenListSection />
      <LocationCardsSection />
      <TestimonialSection />
      <HomecareServices />
      <FaqsSection />
      <ImageWithOverlaySection />
    </div>
  );
}
