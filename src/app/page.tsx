import Image from "next/image";

import { getBaseUrl } from "@/utils/Helpers";

const baseUrl = getBaseUrl();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is GrowsIT NextJS Boilerplate</h1>
      {baseUrl}
    </main>
  );
}
