import React from 'react'

function ProgressBar({ current, total }) {
    const pct = total === 0 ? 0 : Math.round((current / total) * 100);

    return (
        <div className="w-full">
            <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                <span>Progress</span>
                <span>
                    {current} / {total}
                </span>
            </div>
            <div className="h-2 w-full rounded-full bg-zinc-200 overflow-hidden">
                <div
                    className="h-full bg-zinc-900 transition-all duration-300"
                    style={{ width: `${pct}%` }}
                />
            </div>
        </div>
    );
}

export default ProgressBar
