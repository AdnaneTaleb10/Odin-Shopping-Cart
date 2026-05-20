import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const glowRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!glowRef.current) return;

      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
      glowRef.current.style.opacity = "1";
    };

    const leave = () => {
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
      {/* MOUSE GLOW */}
      <div
        ref={glowRef}
        className="
          fixed w-55 h-55 rounded-full pointer-events-none z-0
          opacity-0 transition-opacity duration-300 blur-2xl
          -translate-x-1/2 -translate-y-1/2
          bg-[radial-gradient(circle,rgba(255,107,53,0.18)_0%,transparent_60%)]
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
            bg-clip-text text-transparent

            drop-shadow-[3px_3px_0px_rgba(255,107,53,0.25)]

            animate-[fadeInDown_0.8s_ease-out_both,floating_4s_ease-in-out_infinite]
          "
        >
          Your Essential Style,
          <br />
          <span
            className="
              block

              text-[clamp(2.6rem,6vw,4.6rem)]
              leading-tight

              bg-[linear-gradient(135deg,var(--primary))]
              bg-clip-text text-transparent

              drop-shadow-[3px_3px_0px_rgba(255,107,53,0.4)]

              animate-[floating_4s_ease-in-out_infinite]
            "
          >
            Carefully Chosen.
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-muted-foreground text-[clamp(1.1rem,2.5vw,1.25rem)] leading-7 mb-10 max-w-2xl">
          Welcome to{" "}
          <span className="font-bold text-transparent bg-clip-text bg-[linear-gradient(135deg,var(--primary),var(--warning))]">
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
              px-6 py-3
              bg-primary text-primary-foreground
              rounded-xl
              cursor-pointer
              font-[Bungee]
              text-[1.05rem]
              tracking-tight

              transition hover:opacity-90
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
