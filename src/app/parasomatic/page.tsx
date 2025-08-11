"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ParasomaticPage() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const REQUIRED_PASSWORD = "parasomatic";

  useEffect(() => {
    // Prevent background scroll while password required
    if (!authorized) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [authorized]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() === REQUIRED_PASSWORD) {
      setAuthorized(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <>
      {/* Page-scoped background to ensure the top is cream even in dark mode */}
      <div className="fixed inset-0 -z-10 bg-[var(--cream)]" />
      <div className="min-h-screen w-full">
        <main className="lato-regular bg-[var(--cream)] text-[var(--charcoal)] w-full flex flex-col items-center justify-center min-h-screen p-4">
          {/* Back Button (visible when authorized) */}
          {authorized && (
            <div className="absolute top-8 left-8">
              <Link 
                href="/" 
                aria-label="Back to home"
                className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
              >
                <Image src="/back.svg" alt="Back" width={24} height={24} priority />
                <span className="lato-bold text-sm md:text-base text-[var(--charcoal)]">Back</span>
              </Link>
            </div>
          )}

          {/* PDF Viewer (when authorized) */}
          {authorized && (
            <div className="w-full max-w-4xl h-[80vh] border border-[var(--charcoal)]/20 shadow-lg">
              <iframe
                src="/parasomatic/_I_Feel_It_Nervous__TEI_2026.pdf"
                className="w-full h-full"
                title="I Feel It Nervous - TEI 2026 Paper"
              />
            </div>
          )}
        </main>

        {/* Password Overlay */}
        {!authorized && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-[var(--charcoal)]/70 backdrop-blur-sm md:backdrop-blur-md" />
            <Link
              href="/"
              aria-label="Back to home"
              className="absolute top-6 left-6 z-50 hover:opacity-90 flex items-center gap-2"
            >
              <Image
                src="/back-cream.svg"
                alt="Back"
                width={24}
                height={24}
                priority
              />
              <span className="lato-bold text-lg text-[var(--cream)]">Back</span>
            </Link>
            <div className="relative z-50 w-[90%] max-w-md bg-[var(--cream)] p-6 shadow-xl lato-regular text-[var(--charcoal)]">
              <h2 className="text-lg md:text-xl font-bold mb-2">
                Password Required
              </h2>
              <p className="text-sm md:text-base mb-6">
                This is an unpublished paper. Contact{" "}
                <a href="mailto:kl527@cornell.edu" className="underline">
                  kl527@cornell.edu
                </a>{" "}
                for the password.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 border border-[var(--charcoal)]/30 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--charcoal)]/30"
                  placeholder="Enter password"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-[var(--charcoal)] px-4 py-2 text-[var(--cream)] hover:opacity-90"
                >
                  Enter
                </button>
              </form>
              {error && <div className="mt-3 text-sm text-red-600">{error}</div>}
            </div>
          </div>
        )}
      </div>
    </>
  );
}