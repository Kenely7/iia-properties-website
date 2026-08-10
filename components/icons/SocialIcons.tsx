import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 5.9c-.72.32-1.5.53-2.3.63a4 4 0 0 0 1.76-2.22 8 8 0 0 1-2.54.97 4 4 0 0 0-6.9 3.65A11.34 11.34 0 0 1 3.9 4.6a4 4 0 0 0 1.24 5.34 4 4 0 0 1-1.81-.5v.05a4 4 0 0 0 3.2 3.92 4 4 0 0 1-1.8.07 4 4 0 0 0 3.73 2.78A8.03 8.03 0 0 1 2 18.4a11.32 11.32 0 0 0 6.13 1.8c7.35 0 11.37-6.09 11.37-11.37l-.01-.52A8.1 8.1 0 0 0 22 5.9Z" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM3.5 8.75h3.9V21h-3.9V8.75Zm6.63 0h3.74v1.68h.05c.52-.98 1.8-2.02 3.7-2.02 3.96 0 4.69 2.6 4.69 6V21h-3.9v-5.72c0-1.37-.02-3.12-1.9-3.12-1.9 0-2.2 1.49-2.2 3.02V21h-3.9V8.75Z" />
    </svg>
  );
}
