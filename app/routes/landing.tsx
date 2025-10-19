import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "~/components/svg/ExternalLink";
import { ToggleMuteButton } from "~/components/ToggleMuteButton";

export default function Home() {
  const [isMuted, setIsMuted] = useState({
    aiAgentOrange: true,
    theDream: true,
  });

  const toggleMute = (video: "aiAgentOrange" | "theDream") => {
    setIsMuted((prev) => ({
      aiAgentOrange: true,
      theDream: true,
      [video]: !prev[video],
    }));
  };

  const theDreamAudioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (!isMuted.theDream) {
      theDreamAudioRef.current?.play();
    }
  }, [isMuted]);

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<
    "theDream" | "aiAgentOrange"
  >("theDream");

  const handleScroll = () => {
    const sections = containerRef.current?.querySelectorAll("section");
    sections?.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 10 && rect.bottom >= 0) {
        setActiveSection(section.id as "theDream" | "aiAgentOrange");
      }
    });
  };

  useEffect(() => {
    containerRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      containerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen snap-y snap-mandatory overflow-scroll"
    >
      <title>
        {`${
          activeSection === "theDream" ? "🌱 🌱 🌱" : "🩸🩸🩸"
        } Patient Partner`}
      </title>
      <meta
        name="description"
        content="Patient Partner - 'AI Agent Orange' is out since July 4th 2025 on Vinyl and YouTube"
      />
      <section
        id="theDream"
        className="h-screen snap-start relative w-screen flex flex-col"
      >
        <div className="-z-10 absolute left-0 top-0 h-full w-full opacity-100">
          <video
            src="/the_dream.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="min-h-full min-w-full object-cover"
          />
          <audio
            ref={theDreamAudioRef}
            src="/the_dream.mp3"
            loop
            muted={isMuted.theDream}
            className="hidden"
          />
        </div>

        <ToggleMuteButton
          isMuted={isMuted.theDream}
          onClick={() => toggleMute("theDream")}
          color="bg-[#1FFF11]"
        />

        <div className="flex-col text-blue-950 flex items-center justify-center text-white z-10 flex-1 text-center p-4">
          <h1 className="text-3xl md:text-5xl uppercase font-bold tracking-[0.4em]">
            Patient Partner
          </h1>
          <p className="text-xl md:text-4xl tracking-[0.2em] mt-4">
            “The Dream”
          </p>

          <span className="tracking-[0.1em] text-neutral-100 font-bold italic md:text-lg">
            <p className="mt-16">
              12" Vinyl
              <br />&<br />
              Digital Single
            </p>
            <p className="my-12 font-normal">official release Oct 3 ’25</p>

            <p className="mt-8 font-normal">consume here:</p>
            <div className="flex gap-4 justify-center items-center mt-4">
              <a
                href="https://patientpartner.bandcamp.com/album/the-dream"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center text-[#0000FF] hover:underline gap-2 text-lg md:text-2xl"
              >
                <ExternalLink />
                bandcamp
              </a>
            </div>
          </span>
        </div>
      </section>
      <section
        id="aiAgentOrange"
        className="h-screen snap-start relative w-screen overflow-hidden flex flex-col"
      >
        <div className="-z-10 absolute left-0 top-0 h-full w-full opacity-100">
          <video
            src="/ai_agent_orange.mp4"
            autoPlay
            loop
            muted={isMuted.aiAgentOrange}
            playsInline
            className="min-h-full min-w-full object-cover"
          />
        </div>

        <ToggleMuteButton
          isMuted={isMuted.aiAgentOrange}
          onClick={() => toggleMute("aiAgentOrange")}
          color="bg-[#F11]"
        />

        <div className="flex-col text-blue-950 flex items-center justify-center text-white z-10 flex-1 text-center p-4">
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
            <p className="my-12 font-normal"> official release July 4 ’25</p>

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
        </div>
      </section>
    </div>
  );
}
