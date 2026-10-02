import VerifyCard from "@/components/verify/VerifyCard";
import { getValuationReport } from "@/lib/verify.server";

export const metadata = {
  title: "Valuation Report Verification | IIA Properties",
};

export default async function VerifyValuationPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const report = await getValuationReport(token);
  const valid = Boolean(report && report.status?.toLowerCase() === "valid");
  const isBankValuation = Boolean(
    report?.clientName?.trim().toLowerCase().startsWith("credit risk")
  );
  const mortgagor = report?.mortgagor?.trim();

  return (
    <VerifyCard
      portalTitle="Valuation Report Verification Portal"
      valid={valid}
      validMessage="This valuation report is authentic and verified."
      invalidTitle="Invalid Report"
      invalidMessage="This valuation report could not be verified."
      fields={
        report
          ? [
              { label: "Report Number", value: report.reportNumber },
              { label: "Client Name", value: report.clientName },
              ...(isBankValuation && mortgagor
                ? [{ label: "Mortgagor", value: mortgagor }]
                : []),
              ...(report.valuationDate
                ? [{ label: "Valuation Date", value: report.valuationDate }]
                : []),
              { label: "Issue Date", value: report.issueDate },
              { label: "Status", value: report.status },
            ]
          : []
      }
      documentLink={report?.driveLink || undefined}
      documentLinkLabel="View Valuation Report"
    />
  );
}
