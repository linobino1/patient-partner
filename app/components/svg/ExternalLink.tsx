export function ExternalLink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Pixelarticons by Gerrit Halfmann - https://github.com/halfmage/pixelarticons/blob/master/LICENSE */}
      <path
        fill="currentColor"
        d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4zM11 5H3v16h16v-8h-2v6H5V7h6z"
      />
    </svg>
  );
}
