import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

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
          background: "#090b0d",
        }}
      >
        <div
          style={{
            width: 154,
            height: 154,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            borderRadius: "50%",
            border: "5px solid #c79c59",
            background:
              "radial-gradient(circle at 35% 30%, #27211a 0%, #111315 52%, #070809 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 104,
              height: 54,
              top: 36,
              borderTop: "4px solid #c79c59",
              borderRadius: "50%",
              transform: "rotate(-12deg)",
            }}
          />

          <div
            style={{
              display: "flex",
              color: "#c79c59",
              fontSize: 86,
              fontWeight: 600,
              fontFamily: "serif",
              lineHeight: 1,
              marginTop: 13,
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