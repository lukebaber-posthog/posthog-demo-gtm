"use client";

import { sendGTMEvent } from "@next/third-parties/google";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6">
      <div className="flex gap-3">
        <Button
          size="lg"
          onClick={() => sendGTMEvent({ event: "signup_clicked" })}
        >
          Sign up
        </Button>

        <Button
          size="lg"
          variant="outline"
          onClick={() => sendGTMEvent({ event: "demo_requested" })}
        >
          Request demo
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">
        Pushes <code className="font-mono">signup_clicked</code> and{" "}
        <code className="font-mono">demo_requested</code> to the dataLayer.
      </p>
    </main>
  );
}
