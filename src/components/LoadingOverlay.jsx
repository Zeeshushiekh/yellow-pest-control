export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-[100] bg-white">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-16 w-16">
            <div className="absolute inset-0 rounded-full border-4 border-yellowpc-200" />
            <div className="absolute inset-0 rounded-full border-4 border-t-yellowpc-500 animate-spin" />
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-ink">Preparing your service…</p>
            <p className="text-xs text-zinc-600">Yellow Pest Control Services</p>
          </div>
        </div>
      </div>
    </div>
  )
}

