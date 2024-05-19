import UrlForm from "./components/shortUrlForm";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 pb-6 pt-8 flex w-full justify-center text-lg font-semibold">Short URL App</h1>
        <UrlForm/>
      </div>
    </main>
  );
}
