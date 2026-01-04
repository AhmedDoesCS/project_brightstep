import Cardshell from "./Cardshell";
import React from 'react'

function CompleteCard({ onRestart }) {
    return (
        <Cardshell>
            <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900">
                    Session complete 🎉
                </h2>
                <p className="text-zinc-600">
                    Good work. Want to run another session?
                </p>

                <button
                    onClick={onRestart}
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-white font-medium
                     hover:opacity-95 active:scale-[0.99] transition"
                >
                    Start another
                </button>
            </div>
        </Cardshell>
    );
}

export default CompleteCard