import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export function BuildVsBuy() {
  return (
    <section id="build-vs-buy" className="py-4">
      <div className="border rounded-lg p-6 sm:p-8 bg-muted/10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="space-y-1.5">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-xs font-medium">
            Free Tool
          </div>
          <h3 className="text-base sm:text-lg font-bold">
            Should You Build Custom or Use Existing SaaS?
          </h3>
          <p className="text-sm text-muted-foreground max-w-lg">
            As someone who&apos;s built SaaS products from scratch, I created a
            decision matrix to help founders make the right build-vs-buy call.
            Stop guessing — use data.
          </p>
        </div>
        <Button size="sm" variant="outline" asChild className="flex-shrink-0">
          <Link href="#value-pack">
            <Download className="size-3 mr-2" />
            Get Decision Matrix
          </Link>
        </Button>
      </div>
    </section>
  );
}
