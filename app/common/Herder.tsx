"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-header border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="https://iagainstitute.com">
          <Image src="/logo.png" alt="iaga-logo" width={220} height={200} />
        </Link>

        <Button
          variant="default"
          size="lg"
          className="bg-[#E5E5E5] text-black rounded-2xl"
          onClick={() =>
            document
              .getElementById("admissions")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Apply
        </Button>
      </div>
    </header>
  );
};

export default Header;
