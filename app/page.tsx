import { Metadata } from "next";
import Image from "next/image";

import { Sidebar } from "@/components/sidebar";
import { playlists } from "../data/playlists";

export const metadata: Metadata = {
  title: "Fusio",
  description: "next gen co-writing tool for musicians",
};

export default function MusicPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/music-light.png"
          width={1280}
          height={1114}
          alt="Music"
          className="block dark:hidden"
        />
        <Image
          src="/examples/music-dark.png"
          width={1280}
          height={1114}
          alt="Music"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden md:block">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
