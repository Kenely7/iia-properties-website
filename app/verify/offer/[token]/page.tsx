import VerifyCard from "@/components/verify/VerifyCard";
import { getOfferLetter } from "@/lib/verify.server";

export const metadata = {
  title: "Offer Letter Verification | IIA Properties",
};

export default async function VerifyOfferPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const offer = await getOfferLetter(token);
  const valid = Boolean(offer);

  return (
    <VerifyCard
      portalTitle="Offer Letter Verification Portal"
      valid={valid}
      validMessage="This offer letter is authentic and verified."
      invalidTitle="Invalid Offer Letter"
      invalidMessage="This offer letter could not be verified."
      fields={
        offer
          ? [
              { label: "Letter ID", value: offer.reportNumber },
              { label: "Client Name", value: offer.clientName },
              { label: "Issue Date", value: offer.issueDate },
              { label: "Subject Property", value: offer.subjectProperty },
            ]
          : []
      }
      documentLink={offer?.driveLink || undefined}
      documentLinkLabel="View Offer Letter"
    />
  );
}
