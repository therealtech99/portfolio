import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function escapePdf(text) {
  return String(text)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function wrap(text, width) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > width) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function block(font, size, x, y, lines, leading = size + 4) {
  const parts = ["BT", `/${font} ${size} Tf`, `${x} ${y} Td`];
  lines.forEach((line, index) => {
    if (index > 0) parts.push(`0 -${leading} Td`);
    parts.push(`(${escapePdf(line)}) Tj`);
  });
  parts.push("ET");
  return parts.join("\n");
}

const content = [
  "0.09 0.21 0.25 RG 1.6 w 48 742 m 564 742 l S",
  block("F2", 20, 48, 712, ["MD ATHAR ALI ANSARI"]),
  block("F1", 11, 48, 694, ["Full-Stack Developer  |  React / Next.js / Flutter / Firebase"]),
  block("F1", 9, 48, 676, [
    "Bangalore, India  |  +91 92345 78836  |  mdatharaliansari786@gmail.com",
  ]),
  block("F1", 9, 48, 662, [
    "GitHub: github.com/therealtech99  |  LinkedIn: md-athar-ali-ansari-544a201a2",
  ]),
  "0.89 0.88 0.84 RG 0.6 w 48 648 m 564 648 l S",
  block("F2", 11, 48, 628, ["SUMMARY"]),
  block(
    "F1",
    9,
    48,
    612,
    wrap(
      "Full-stack developer with 4+ years building and shipping production web and mobile applications end to end - from React/Next.js websites with integrated payments to Flutter/Firebase mobile apps. Founder of VillageMart, with freelance delivery of client websites for sports infrastructure, manufacturing, and productivity products.",
      108,
    ),
    12,
  ),
  block("F2", 11, 48, 548, ["SKILLS"]),
  block("F1", 9, 48, 532, [
    "Frontend: React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3",
    "Mobile: Flutter, Dart",
    "Backend / APIs: REST APIs, Firebase, Authentication, API Integration",
    "Payments & Cloud: UPI, Cashfree, Google Cloud Platform, PDF generation",
    "Development: Git, GitHub, Testing, Debugging, Deployment",
  ], 12),
  block("F2", 11, 48, 456, ["EXPERIENCE"]),
  block("F2", 10, 48, 438, ["Founder & Lead Product Engineer, VillageMart"]),
  block("F1", 9, 48, 424, ["Nov 2021 - Present  |  Bangalore, India"]),
  block("F1", 9, 48, 408, [
    "- Built a 3-app ecosystem (Customer, Admin, Delivery) using Flutter and Firebase.",
    "- 1,000+ Google Play installs and 150+ successful deliveries.",
    "- Offline-first ordering with atomic Firebase transactions to prevent overselling.",
    "- Dynamic QR UPI payments, inventory, billing, last-mile logistics, and FSSAI compliance.",
  ], 12),
  block("F2", 10, 48, 348, ["Freelance Full-Stack Developer, Independent / Client Projects"]),
  block("F1", 9, 48, 334, ["2022 - Present"]),
  block("F1", 9, 48, 318, [
    "- Havocline Ventures: Next.js marketing site with WhatsApp lead capture.",
    "- Ujala Electric: Next.js catalog with product listings and dealer onboarding.",
    "- Resume4u.in: Next.js resume builder with import/parsing and Cashfree UPI checkout.",
    "- Full lifecycle: requirements, design, development, deployment, and client support.",
  ], 12),
  block("F2", 11, 48, 256, ["TECHNICAL HIGHLIGHTS"]),
  block("F1", 9, 48, 240, [
    "- Offline-first architecture for zero-network browsing and ordering.",
    "- Firebase atomic transactions for inventory consistency.",
    "- Resume parsing for PDF/DOCX/TXT with assisted content writing.",
    "- Voice-to-cart ordering system (beta).",
  ], 12),
  block("F2", 11, 48, 180, ["EDUCATION"]),
  block("F1", 10, 48, 162, ["Bachelor of Commerce (B.Com) - Bangalore University, 2021"]),
].join("\n");

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 6 0 R /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  `<< /Length ${Buffer.byteLength(content, "utf8")} >>\nstream\n${content}\nendstream`,
];

let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf, "utf8"));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});
const xrefStart = Buffer.byteLength(pdf, "utf8");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
offsets.slice(1).forEach((offset) => {
  pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
});
pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

const output = join(__dirname, "..", "public", "resume.pdf");
writeFileSync(output, pdf);
console.log(`Wrote ${output}`);
