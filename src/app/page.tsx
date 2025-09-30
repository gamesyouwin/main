import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-background text-foreground flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/Logo.svg"
          alt="$WIN Logo"
          width={172}
          height={158}
          priority
          className="max-w-full max-h-full"
        />
      </div>
    </main>
  );
}
