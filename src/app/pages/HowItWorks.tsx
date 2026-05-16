import { useState } from "react";

const steps = [
  {
    number: "01",
    icon: "📞",
    title: "Call or Text Us",
    description:
      "Reach out directly — no app, no waitlist, no middleman. Tell us your pickup location, drop-off destination, and preferred time. We respond fast.",
    detail: "Available Mon–Sat, 7am–7pm · Phoenix Metro & All of Arizona",
  },
  {
    number: "02",
    icon: "💬",
    title: "Get a Clear Quote",
    description:
      "We give you a straight price before we touch your vehicle. No hidden fees, no surprise charges at delivery — just honest, upfront pricing.",
    detail: "Pricing based on distance & service type",
  },
  {
    number: "03",
    icon: "🚗",
    title: "We Handle Everything",
    description:
      "Sit back while we pick up, deliver, or run your errand. We'll send you a confirmation when the job is done — simple as that.",
    detail: "Vehicle delivery · Parts runs · Oil changes · Car washes · Local errands",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "#f9f7f4",
        minHeight: "100vh",
        padding: "80px 24px",
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: 680, margin: "0 auto 64px", textAlign: "center" }}>
        <p
          style={{
            fontSize: 11,
            fontFamily: "'Courier New', monospace",
            letterSpacing: "0.18em",
            color: "#c0392b",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Simple Process
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 400,
            color: "#1a1a1a",
            lineHeight: 1.15,
            margin: "0 0 20px",
            letterSpacing: "-0.02em",
          }}
        >
          Book in 3 Easy Steps
        </h2>
        <p
          style={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: 17,
            color: "#666",
            lineHeight: 1.7,
            maxWidth: 480,
            margin: "0 auto",
          }}
        >
          No app downloads. No waiting on hold. Just a direct line to an
          owner who gets it done.
        </p>
      </div>

      {/* Steps */}
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        {steps.map((step, i) => {
          const isActive = active === i;
          const isLast = i === steps.length - 1;

          return (
            <div key={i} style={{ display: "flex", gap: 0 }}>
              {/* Left: number + line */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: 32,
                  flexShrink: 0,
                  width: 48,
                }}
              >
                <div
                  onClick={() => setActive(isActive ? null : i)}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: `2px solid ${isActive ? "#c0392b" : "#1a1a1a"}`,
                    background: isActive ? "#c0392b" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: 13,
                      fontWeight: 700,
                      color: isActive ? "#fff" : "#1a1a1a",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                {!isLast && (
                  <div
                    style={{
                      width: 1,
                      flex: 1,
                      minHeight: 40,
                      background: "#d0ccc6",
                      margin: "8px 0",
                    }}
                  />
                )}
              </div>

              {/* Right: content card */}
              <div
                style={{
                  flex: 1,
                  paddingBottom: isLast ? 0 : 40,
                  paddingTop: 8,
                }}
              >
                <div
                  onClick={() => setActive(isActive ? null : i)}
                  style={{
                    cursor: "pointer",
                    background: isActive ? "#fff" : "transparent",
                    border: isActive
                      ? "0.5px solid #e0dbd4"
                      : "0.5px solid transparent",
                    borderRadius: 12,
                    padding: isActive ? "24px 28px" : "0 0 0 0",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      padding: isActive ? 0 : "0",
                    }}
                  >
                    <span style={{ fontSize: 26, lineHeight: 1, flexShrink: 0 }}>
                      {step.icon}
                    </span>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontFamily: "'Georgia', serif",
                          fontSize: 22,
                          fontWeight: 400,
                          color: "#1a1a1a",
                          margin: "0 0 8px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Helvetica Neue', sans-serif",
                          fontSize: 15,
                          color: "#555",
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {step.description}
                      </p>

                      {/* Expanded detail */}
                      {isActive && (
                        <div
                          style={{
                            marginTop: 16,
                            paddingTop: 16,
                            borderTop: "0.5px solid #e8e4de",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "'Courier New', monospace",
                              fontSize: 12,
                              color: "#c0392b",
                              margin: 0,
                              letterSpacing: "0.04em",
                            }}
                          >
                            {step.detail}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Expand hint */}
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: 18,
                        color: "#999",
                        flexShrink: 0,
                        transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        marginTop: 2,
                      }}
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div style={{ textAlign: "center", marginTop: 64 }}>
        <p
          style={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: 14,
            color: "#888",
            marginBottom: 20,
          }}
        >
          Ready to get started?
        </p>
        <a
          href="tel:+1XXXXXXXXXX"
          style={{
            display: "inline-block",
            background: "#1a1a1a",
            color: "#f9f7f4",
            fontFamily: "'Courier New', monospace",
            fontSize: 13,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "16px 40px",
            borderRadius: 2,
            textDecoration: "none",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.background = "#c0392b")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.background = "#1a1a1a")
          }
        >
          📞 Call or Text to Book
        </a>
      </div>
    </section>
  );
}
