import Cardshell from "./Cardshell";

export default function WelcomeCard({ onStart, loading }) {
  return (
    <Cardshell>
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900">
            Ready for a quick session?
          </h1>
          <p className="mt-2 text-zinc-600">
            You’ll see a few prompts. Answer honestly, then hit continue.
            No pressure — just progress.
          </p>
        </div>

        <button
          onClick={onStart}
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-white font-medium
                     hover:opacity-95 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {loading ? "Starting..." : "Start"}
        </button>

        <p className="text-xs text-zinc-500">
          Tip: short answers are totally fine.
        </p>
      </div>
    </Cardshell>
  );
}
