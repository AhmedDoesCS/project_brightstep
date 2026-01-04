import Cardshell from "./Cardshell";
import React from 'react'

function SavedStep({ onContinue }) {
    return (
        <Cardshell>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-zinc-900 text-white flex items-center justify-center">
                        ✓
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-zinc-900">Saved.</h3>
                        <p className="text-zinc-600">Nice — let’s keep going.</p>
                    </div>
                </div>

                <button
                    onClick={onContinue}
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-white font-medium
                     hover:opacity-95 active:scale-[0.99] transition"
                >
                    Continue
                </button>
            </div>
        </Cardshell>
    );

}

export default SavedStep
