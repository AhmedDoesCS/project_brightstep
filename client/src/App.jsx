import { useState } from "react";

export default function App() {
  const [prompt, setPrompt] = useState(null);
  const [error, setError] = useState("");

  async function getWhyPrompt() {
    setError("");
    try {
      const res = await fetch("/prompts/why");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setPrompt(data);
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">WhyWorks (Phase 1)</h1>

        <button
          onClick={getWhyPrompt}
          className="px-4 py-2 rounded bg-black text-white"
        >
          Get WHY prompt
        </button>

        {error && <div className="text-red-600">Error: {error}</div>}

        {prompt && (
          <div className="p-4 border rounded space-y-2">
            <div className="text-sm text-gray-600">
              Prompt #{prompt.id} • {prompt.difficulty_level}
            </div>
            <div className="text-lg">{prompt.prompt_text}</div>
          </div>
        )}
      </div>
    </div>
  );
}
