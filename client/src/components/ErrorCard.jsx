import Cardshell from "./Cardshell";
import React from 'react'

function ErrorCard({ message, onReset }) {
    return (
        <Cardshell>
            <div className="space-y-3">
                <h2 className="text-xl font-semibold text-red-600">Something went wrong</h2>
                <p className="text-zinc-700">{message}</p>
                <button
                    onClick={onReset}
                    className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-white font-medium
                     hover:opacity-95 active:scale-[0.99] transition"
                >
                    Back to start
                </button>
            </div>
        </Cardshell>
    );
}

export default ErrorCard
