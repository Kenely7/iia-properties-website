import "server-only";
import nodemailer from "nodemailer";
import type { Property } from "./types";

const NOTIFY_EMAIL = "iwuba.ifediora@gmail.com";

// Sends via Gmail SMTP using an App Password (Google Account > Security >
// 2-Step Verification > App Passwords). Set GMAIL_USER and
// GMAIL_APP_PASSWORD in the environment to activate — until then this
// no-ops so property creation never fails because email isn't configured.
export async function sendNewPropertyNotification(property: Property) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.warn(
      "[email] GMAIL_USER / GMAIL_APP_PASSWORD not set — skipping new property notification."
    );
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://iia-properties-website.vercel.app";
  const reviewUrl = `${siteUrl}/admin/properties/${property.id}/edit`;

  try {
    await transporter.sendMail({
      from: `IIA Properties Website <${user}>`,
      to: NOTIFY_EMAIL,
      subject: `New Property Awaiting Approval: ${property.title}`,
      text: `A new property listing has been uploaded and is waiting for your approval before it goes live on the site.

Title: ${property.title}
Status: ${property.status}
Address: ${property.address}, ${property.city}, ${property.state}
Price: ${property.price}

Review and approve it here: ${reviewUrl}`,
    });
  } catch (err) {
    console.error("[email] Failed to send new property notification:", err);
  }
}
