import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;

    if (!section || !glow) return;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();

      // Mouse position relative to HERO section
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      glow.style.opacity = "0";
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        flex flex-col items-center justify-center
        text-center
        px-6 py-24
        overflow-hidden
      "
    >
      {/* MOUSE GLOW */}
      <div
        ref={glowRef}
        className="
          absolute
          w-50 h-50
          rounded-full
          pointer-events-none
          z-0

          opacity-0
          transition-opacity duration-300

          -translate-x-1/2
          -translate-y-1/2

          bg-[radial-gradient(circle,rgba(255,107,53,0.18)_0%,rgba(255,107,53,0.12)_20%,rgba(255,107,53,0.06)_40%,transparent_60%)]

          dark:bg-[radial-gradient(circle,rgba(6,182,212,0.18)_0%,rgba(6,182,212,0.12)_20%,rgba(6,182,212,0.06)_40%,transparent_60%)]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl">
        {/* TITLE */}
        <h1
          className="
            font-bold
            font-[Plus_Jakarta_Sans]

            text-[clamp(2.8rem,6.5vw,5rem)]
            leading-[1.1]
            tracking-[-0.03em]

            mb-6

            bg-[linear-gradient(135deg,var(--foreground),var(--muted-foreground))]
            bg-clip-text
            text-transparent

            drop-shadow-[3px_3px_0px_rgba(255,107,53,0.25)]

            animate-[fadeInDown_0.8s_ease-out_both,floating_4s_ease-in-out_infinite]
          "
        >
          Your Essential Style,
          <br />

          <span
            className="
              block
              leading-tight

              text-[clamp(2.6rem,6vw,4.6rem)]

              bg-[linear-gradient(135deg,var(--primary),var(--warning))]
              bg-clip-text
              text-transparent

              drop-shadow-[3px_3px_0px_rgba(255,107,53,0.4)]

              animate-[floating_4s_ease-in-out_infinite]
            "
          >
            Carefully Chosen.
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            text-muted-foreground
            text-[clamp(1.2rem,2.7vw,1.35rem)]
            leading-8
            mb-10
            max-w-2xl
          "
        >
          Welcome to{" "}
          <span
            className="
              font-bold
              text-transparent
              bg-clip-text
              bg-[linear-gradient(135deg,var(--primary),var(--warning))]
            "
          >
            The Edit
          </span>{" "}
          – where quality, consciousness, and timeless design converge. We
          present a handpicked collection of essentials for your wardrobe and
          home, curated for a more intentional lifestyle.
        </p>

        {/* BUTTON */}
        <Link to="/shop">
          <button
            className="
              px-7 py-3.5

              rounded-xl

              bg-[linear-gradient(135deg,var(--primary),var(--warning))]
              text-primary-foreground

              font-[Bungee]
              text-[1.05rem]
              tracking-tight

              cursor-pointer

              shadow-[0_4px_12px_rgba(255,107,53,0.25)]

              transition-all duration-200

              hover:-translate-y-0.5
              hover:scale-[1.02]
              hover:shadow-[0_8px_25px_rgba(255,107,53,0.35)]
            "
          >
            Explore The Collection
          </button>
        </Link>

        {/* SUBTEXT */}
        <p className="mt-4 text-sm text-muted-foreground italic opacity-80">
          Discover pieces that matter.
        </p>
      </div>
    </section>
  );
}