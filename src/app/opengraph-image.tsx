import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.seoTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f0e8",
          color: "#12110f",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#5e5b55",
          }}
        >
          Flutter Developer · Bangalore
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              fontWeight: 500,
            }}
          >
            Md Athar Ali Ansari
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 28,
              color: "#5e5b55",
              maxWidth: 860,
            }}
          >
            4+ years architecting production Flutter applications.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            fontSize: 20,
            color: "#16363f",
          }}
        >
          Flutter · Dart · Firebase · REST APIs · Git
        </div>
      </div>
    ),
    size,
  );
}
