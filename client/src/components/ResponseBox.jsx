import React from 'react'

function ResponseBox(
    value,
    onChange,
    onSubmit,
    disabled,
    buttonLabel,
) {
    const safeValue = typeof value === "string" ? value : "";
    const safeOnChange =
        typeof onChange === "function" ? onChange : () => { };

    const canSubmit = safeValue.trim().length > 0 && !disabled;

    return (
        <div className="w-full max-w-2xl space-y-3">
            <textarea
                value={safeValue}
                onChange={(e) => safeOnChange(e.target.value)}
                disabled={disabled}
                rows={4}
                placeholder="Type your answer here…"
                className="w-full rounded-2xl border border-zinc-200 bg-white p-4 text-zinc-900 shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-zinc-900 disabled:opacity-60"
            />

            <div className="flex items-center justify-between gap-3">
                <p className="text-xs text-zinc-500">
                    Keep it simple. One sentence is okay.
                </p>

                <button
                    onClick={onSubmit}
                    disabled={!canSubmit}
                    className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-white font-medium
                     hover:opacity-95 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                    {buttonLabel || "Submit"}
                </button>
            </div>
        </div>
    );
}

export default ResponseBox
