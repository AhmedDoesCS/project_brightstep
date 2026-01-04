import React from 'react'
import Cardshell from "./Cardshell";


function PromptCard({ title, body }) {
    return (
        <Cardshell>
            <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600">
                    <span className="h-2 w-2 rounded-full bg-zinc-900" />
                    Prompt
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
                    {title}
                </h2>

                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                    {body}
                </p>
            </div>
        </Cardshell>
    );
}

export default PromptCard
