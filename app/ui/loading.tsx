export default function Loading() {
  return (
    <>
      <div className="mx-auto my-8 flex aspect-[16/9] w-full animate-pulse items-center justify-center rounded-md bg-slate-400 text-4xl shadow-lg">
        coming soon
      </div>
      <div className="mx-auto my-8 grid w-full rounded-md px-4 shadow-lg">
        <div className="flex animate-pulse items-center space-x-4">
          <div className="size-20 rounded-full bg-slate-400"></div>
          <div className="flex-1 space-y-6 py-4">
            <div className="h-2 rounded bg-slate-400"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-slate-400"></div>
                <div className="col-span-2 h-2 rounded bg-slate-400"></div>
                <div className="col-span-1 h-2 rounded bg-slate-400"></div>
                <div className="col-span-1 h-2 rounded bg-slate-400"></div>
              </div>
              <div className="h-2 rounded bg-slate-400"></div>
              <div className="h-2 rounded bg-slate-400"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
