import Head from "next/head";
import styles from "../styles/Home.module.css";
import { CreateHotspots } from "../components/CreateHotspots";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Hotspots</title>
        <meta name="description" content="Build custom hotspot components to use across the web." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full">
        <CreateHotspots />
      </main>
    </>
  );
}
