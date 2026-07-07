import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "About Yeswanth Bhavanasi — Android Native and Flutter engineer, background, and experience.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Hello! I&rsquo;m{" "}
              <span className="border-b border-foreground/30 pb-0.5">
                Sai Yeswanth Bhavanasi
              </span>
              .
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                An{" "}
                <strong className="font-semibold text-foreground">
                  Android Native and Flutter Engineer
                </strong>{" "}
                with 3+ years of experience building production mobile
                applications. I specialize in{" "}
                <strong className="font-semibold text-foreground">
                  Kotlin, Java, and Dart
                </strong>
                , with deep hands-on work across Gradle, CI/CD, and release
                engineering.
              </p>
              <p>
                My work spans integrating application modules, third-party SDKs,
                REST APIs, and Firebase into stable releases. I&rsquo;m
                comfortable across the full mobile delivery cycle: debugging with
                Logcat, root cause analysis, smoke and regression testing, and
                Play Store deployments.
              </p>
              <p>
                Recently at{" "}
                <strong className="font-semibold text-foreground">
                  Feqma Technologies
                </strong>
                , I&rsquo;ve shipped Android and Flutter apps including AI-powered
                features with Ollama LLM integration. I&rsquo;m always looking for
                opportunities to build{" "}
                <strong className="font-semibold text-foreground">
                  reliable, performance-optimized mobile products
                </strong>
                .
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
