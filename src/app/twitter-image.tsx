/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "next/og";

export const alt =
  "MEDYA TRAVEL – Individuelle Reisen und Rundreisen nach Syrien";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const logoUrl =
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1783941973/Gemini_Generated_Image_27jxkk27jxkk27jx_m7v3kj.png";

const backgroundUrl =
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1783899049/wallpaperflare.com_wallpaper_offtoy.jpg";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#11110f",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <img
          src={backgroundUrl}
          alt=""
          width="1200"
          height="630"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, rgba(7,7,6,0.97) 0%, rgba(7,7,6,0.85) 55%, rgba(7,7,6,0.28) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            padding: "70px",
          }}
        >
          <div
            style={{
              width: "72%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "22px",
                marginBottom: "36px",
              }}
            >
              <div
                style={{
                  width: "116px",
                  height: "116px",
                  display: "flex",
                  borderRadius: "9999px",
                  overflow: "hidden",
                  border: "4px solid #c4a465",
                }}
              >
                <img
                  src={logoUrl}
                  alt="MEDYA TRAVEL"
                  width="116"
                  height="116"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  letterSpacing: "5px",
                }}
              >
                MEDYA TRAVEL
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "69px",
                lineHeight: 1.03,
                fontWeight: 500,
              }}
            >
              <span>Syrien entdecken.</span>

              <span
                style={{
                  color: "#c4a465",
                }}
              >
                Authentisch reisen.
              </span>
            </div>

            <div
              style={{
                marginTop: "30px",
                fontSize: "25px",
                color: "rgba(255,255,255,0.82)",
              }}
            >
              Individuelle Rundreisen und Kulturreisen ab Deutschland.
            </div>

            <div
              style={{
                marginTop: "40px",
                fontSize: "20px",
                letterSpacing: "3px",
                color: "#d7c398",
              }}
            >
              MEDYATRAVEL.DE
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}