import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sean Gleeson — Commerce, Product, Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAFAF8",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: "#1C1917",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Sean Gleeson
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#57534E",
            lineHeight: 1.5,
            maxWidth: 720,
          }}
        >
          Commerce leader. Product strategist. At Target, building pricing tools
          that earn trust.
        </div>
        <div
          style={{
            marginTop: 48,
            width: 48,
            height: 3,
            background: "#C97D2E",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
