 export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 pb-6 pt-8 flex w-full justify-center text-lg font-semibold">Short URL App</h1>
        <fieldset>
          <div className="mt-6 flex items-center gap-x-6">
            <div className="flex items-center gap-x-3">
              <input defaultChecked
                  id="createShortUrl"
                  name="mode"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                Create Short URL
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                  id="getOriginalUrl"
                  name="mode"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                Get Original URL
              </label>
            </div>
          </div>

          <label className="block mt-6">
            <input type="url"
                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                   placeholder="URL" />
          </label>
          <button type="submit"
                  className="mt-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send
          </button>
        </fieldset>
      </div>
    </main>
  );
}
