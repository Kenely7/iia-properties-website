import Image from "next/image";
import { CheckCircle2, ExternalLink, XCircle } from "lucide-react";

interface Field {
  label: string;
  value: string;
}

interface VerifyCardProps {
  portalTitle: string;
  valid: boolean;
  validMessage: string;
  invalidTitle: string;
  invalidMessage: string;
  fields?: Field[];
  documentLink?: string;
  documentLinkLabel?: string;
}

export default function VerifyCard({
  portalTitle,
  valid,
  validMessage,
  invalidTitle,
  invalidMessage,
  fields = [],
  documentLink,
  documentLinkLabel,
}: VerifyCardProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-gray px-4 py-12 font-body">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-100">
        <div className="flex justify-center">
          <Image
            src="/iia-logo.jpg"
            alt="Iwuba Ifediora & Associates"
            width={130}
            height={130}
            className="h-24 w-24"
          />
        </div>

        <h1 className="mt-6 text-center text-lg font-medium text-slate-500">
          {portalTitle}
        </h1>

        {valid ? (
          <div className="mt-6 flex items-start gap-3 rounded-xl bg-green-50 p-4 text-green-800">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            <p className="font-semibold">{validMessage}</p>
          </div>
        ) : (
          <div className="mt-6 flex items-start gap-3 rounded-xl bg-red-50 p-4 text-red-800">
            <XCircle className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <p className="font-bold">{invalidTitle}</p>
              <p className="mt-1 text-sm">{invalidMessage}</p>
            </div>
          </div>
        )}

        {valid && fields.length > 0 && (
          <dl className="mt-6 divide-y divide-slate-100">
            {fields.map((field) => (
              <div key={field.label} className="grid grid-cols-2 gap-4 py-3">
                <dt className="font-bold text-slate-900">{field.label}</dt>
                <dd className="text-slate-600">{field.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {valid && documentLink && (
          <a
            href={documentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
          >
            {documentLinkLabel}
            <ExternalLink className="h-4 w-4" />
          </a>
        )}

        <p className="mt-8 text-center text-xs text-slate-400">
          {`© ${new Date().getFullYear()} Iwuba Ifediora & Associates. All rights reserved.`}
        </p>
      </div>
    </div>
  );
}
