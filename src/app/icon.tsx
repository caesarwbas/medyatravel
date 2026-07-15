import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#090b0d",
        }}
      >
        <div
          style={{
            width: 430,
            height: 430,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            borderRadius: "50%",
            border: "12px solid #c79c59",
            background:
              "radial-gradient(circle at 35% 30%, #27211a 0%, #111315 52%, #070809 100%)",
            boxShadow: "0 0 55px rgba(199,156,89,0.34)",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 290,
              height: 150,
              top: 104,
              borderTop: "12px solid #c79c59",
              borderRadius: "50%",
              transform: "rotate(-12deg)",
            }}
          />

          <div
            style={{
              display: "flex",
              color: "#c79c59",
              fontSize: 240,
              fontWeight: 600,
              fontFamily: "serif",
              lineHeight: 1,
              marginTop: 35,
            }}
          >
            M
          </div>
        </div>
      </div>
    ),
    size,
  );
}