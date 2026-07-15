/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

const logoUrl =
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1783941973/Gemini_Generated_Image_27jxkk27jxkk27jx_m7v3kj.png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at center, #2b2924 0%, #151513 65%, #080808 100%)",
        }}
      >
        <div
          style={{
            width: "164px",
            height: "164px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "9999px",
            overflow: "hidden",
            border: "4px solid #b9985a",
            background: "#11110f",
          }}
        >
          <img
            src={logoUrl}
            alt="MEDYA TRAVEL"
            width="164"
            height="164"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}