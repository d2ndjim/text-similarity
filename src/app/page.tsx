import LargeHeading from "@/components/ui/LargeHeading";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-x-hidden">
      <div className="container mx-auto h-full w-full max-w-7xl pt-32">
        <div className="flex h-full flex-col items-center justify-start gap-6 lg:items-start lg:justify-center">
          <LargeHeading
            size="lg"
            className="three-d text-black dark:text-light-gold"
          >
            Easily determine <br /> text similarity.
          </LargeHeading>
        </div>
      </div>
    </div>
  );
}
