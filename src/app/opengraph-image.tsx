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

export default function OpenGraphImage() {
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
              "linear-gradient(90deg, rgba(7,7,6,0.97) 0%, rgba(7,7,6,0.88) 48%, rgba(7,7,6,0.32) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(0deg, rgba(7,7,6,0.88) 0%, transparent 52%)",
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            padding: "65px 72px",
          }}
        >
          <div
            style={{
              width: "68%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "22px",
                marginBottom: "34px",
              }}
            >
              <div
                style={{
                  width: "116px",
                  height: "116px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "9999px",
                  overflow: "hidden",
                  border: "4px solid #c4a465",
                  background: "#11110f",
                  boxShadow: "0 0 34px rgba(196,164,101,0.35)",
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
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontSize: "34px",
                    fontWeight: 700,
                    letterSpacing: "5px",
                    color: "#ffffff",
                  }}
                >
                  MEDYA TRAVEL
                </div>

                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "17px",
                    letterSpacing: "4px",
                    color: "#c4a465",
                  }}
                >
                  DEUTSCHLAND · SYRIEN
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "67px",
                lineHeight: 1.02,
                fontWeight: 500,
                letterSpacing: "-2px",
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
                width: "85%",
                marginTop: "28px",
                fontSize: "25px",
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              Individuelle Rundreisen, Kulturreisen und unvergessliche
              Begegnungen.
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "38px",
                gap: "16px",
                fontSize: "19px",
                letterSpacing: "2px",
                color: "#d7c398",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "2px",
                  display: "flex",
                  background: "#c4a465",
                }}
              />

              medyatravel.de
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