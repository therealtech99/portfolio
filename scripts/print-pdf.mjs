import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const browsers = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
].filter(Boolean);

function findBrowser() {
  for (const candidate of browsers) {
    if (existsSync(candidate)) return candidate;
  }
  return null;
}

function printToPdf(inputHtml, outputPdf) {
  const browser = findBrowser();
  if (!browser) {
    throw new Error("Chrome or Edge not found. Set CHROME_PATH and retry.");
  }

  const htmlUrl = pathToFileURL(resolve(inputHtml)).href;
  const out = resolve(outputPdf);
  mkdirSync(dirname(out), { recursive: true });
  const result = spawnSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${out}`,
      htmlUrl,
    ],
    { stdio: "inherit" },
  );

  if (result.status !== 0) {
    throw new Error(`PDF print failed for ${inputHtml} (exit ${result.status})`);
  }

  if (!existsSync(out)) {
    throw new Error(`PDF was not written: ${out}`);
  }

  console.log(`Wrote ${out}`);
}

const desktopDir = join(
  process.env.USERPROFILE || "",
  "OneDrive",
  "Desktop",
  "Somnio Application",
);

const jobs = [
  {
    html: join(__dirname, "templates", "resume.html"),
    pdf: join(root, "public", "resume.pdf"),
  },
  {
    html: join(__dirname, "templates", "resume.html"),
    pdf: join(desktopDir, "Md Athar Ali Ansari Resume.pdf"),
  },
  {
    html: join(__dirname, "templates", "cover-letter-somnio.html"),
    pdf: join(desktopDir, "Md Athar Ali Ansari Cover Letter - Somnio Software.pdf"),
  },
];

for (const job of jobs) {
  printToPdf(job.html, job.pdf);
}
