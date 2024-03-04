export default function Loading() {
  return (
    <>
      <div className="shadow-lg rounded-md animate-pulse bg-slate-400 my-8 w-full aspect-[16/9] mx-auto flex items-center justify-center text-4xl">
        coming soon
      </div>
      <div className="grid shadow-lg rounded-md px-4 w-full mx-auto my-8">
        <div className="animate-pulse flex space-x-4 items-center">
          <div className="rounded-full bg-slate-400 h-20 w-20"></div>
          <div className="flex-1 space-y-6 py-4">
            <div className="h-2 bg-slate-400 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                <div className="h-2 bg-slate-400 rounded col-span-2"></div>
                <div className="h-2 bg-slate-400 rounded col-span-1"></div>
                <div className="h-2 bg-slate-400 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-400 rounded"></div>
              <div className="h-2 bg-slate-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
