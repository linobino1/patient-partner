export const ToggleMuteButton: React.FC<{
  isMuted: boolean;
  onClick: () => void;
  color: string;
}> = ({ isMuted, color, ...props }) => {
  return (
    <button
      className={`absolute max-sm:top-4 sm:bottom-4 right-4 z-20 flex items-center justify-center gap-2 rounded-full p-2 md:p-3 ${color}`}
      {...props}
    >
      <img
        src={isMuted ? "/img/speaker_off.svg" : "/img/speaker_on.svg"}
        alt="Speaker Icon"
        className="w-6 md:w-8 aspect-square"
      />
    </button>
  );
};
