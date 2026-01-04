import React from 'react'

function ResponseBox({
  value,
  onChange,
  onSubmit,
  disabled = false,
  buttonLabel = "Submit",
}) {
  if (typeof onChange !== "function") {
    throw new Error("ResponseBox: onChange prop is missing or not a function");
  }
  if (typeof onSubmit !== "function") {
    throw new Error("ResponseBox: onSubmit prop is missing or not a function");
  }

  const safeValue = typeof value === "string" ? value : "";
  const canSubmit = safeValue.trim().length > 0 && !disabled;

  return (
    <div className="w-full max-w-2xl space-y-3">
      <textarea
        value={safeValue}
        onChange={(e) => onChange(e.target.value)}
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
          type="button"
          onClick={onSubmit}
          disabled={!canSubmit}
          className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-white font-medium
                     hover:opacity-95 active:scale-[0.99]
                     disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default ResponseBox
