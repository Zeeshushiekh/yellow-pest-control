export default function EmergencyBanner() {
  return (
    <div className="bg-yellowpc-500 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-black/20" aria-hidden="true">
              <span className="text-lg">🚨</span>
            </span>
            <div>
              <p className="text-sm font-extrabold">Emergency Pest Control</p>
              <p className="text-xs text-white/90">Fast response for urgent pest issues.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-2 text-sm font-extrabold text-yellowpc-900 hover:opacity-95 transition-opacity"
            >
              Get Free Inspection
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

