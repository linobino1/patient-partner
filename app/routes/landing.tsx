import { useState } from "react";
import type { Route } from "./+types/landing";
import { ExternalLink } from "~/components/svg/ExternalLink";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "🩸🩸🩸 Patient Partner" },
    {
      name: "description",
      content: `Patient Partner - "AI Agent Orange" is out since July 4th 2025 on Vinyl and YouTube`,
    },
  ];
}

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <>
      <div className="-z-10 fixed left-0 top-0 h-full w-full opacity-100">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="min-h-full min-w-full object-cover"
        />
      </div>

      <button
        className="fixed bottom-4 right-4 z-20 flex items-center justify-center gap-2 rounded-full bg-[#F11] p-2 md:p-3"
        onClick={() => setIsMuted(!isMuted)}
      >
        <img
          src={isMuted ? "/img/speaker_off.svg" : "/img/speaker_on.svg"}
          alt="Speaker Icon"
          className="w-6 md:w-8 aspect-square"
        />
      </button>

      <main className="flex-col text-blue-950 flex items-center justify-center text-white z-10 flex-1 text-center p-4">
        <h1 className="text-3xl md:text-5xl uppercase font-bold tracking-[0.4em]">
          Patient Partner
        </h1>
        <p className="text-xl md:text-4xl tracking-[0.2em] mt-4">
          “AI Agent Orange”
        </p>

        <span className="tracking-[0.1em] text-neutral-100 font-bold italic md:text-lg">
          <p className="mt-16">
            Double Vinyl LP
            <br />&<br />
            AudioMovie (feat. mottto)
          </p>
          <p className="my-12 font-normal"> official release July 4th ’25</p>

          <p className="mt-8 font-normal">consume here:</p>
          <div className="flex gap-4 items-center mt-4">
            <a
              href="https://patientpartner.bandcamp.com/album/ai-agent-orange-2"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center text-[#0000FF] hover:underline gap-2 text-lg md:text-2xl"
            >
              <ExternalLink />
              bandcamp
            </a>
            <a
              href="https://youtu.be/f5LNjGqtEBk"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center text-[#0000FF] hover:underline gap-2 text-lg md:text-2xl"
            >
              <ExternalLink />
              youtube
            </a>
          </div>
        </span>
      </main>
    </>
  );
}
