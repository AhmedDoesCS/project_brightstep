import React from 'react'
import { useMemo, useState, useEffect } from "react";
import { PROMPTS } from "./data/prompts";

import WelcomeCard from "./components/WelcomeCard";
import PromptCard from "./components/PromptCard";
import ResponseBox from "./components/ResponseBox";
import ProgressBar from "./components/ProgressBar";
import SavedStep from "./components/SavedStep";
import CompleteCard from "./components/CompleteCard";
import ErrorCard from "./components/ErrorCard";

const UI = {
    WELCOME: "welcome",
    ANSWERING: "answering",
    SUBMITTING: "submitting",
    SAVED: "saved",
    COMPLETE: "complete",
    ERROR: "error",
};

function SessionDriver() {


    const total = useMemo(() => PROMPTS.length, []);
    const [ui, setUi] = useState(UI.WELCOME);

    const [sessionId, setSessionId] = useState(null);
    const [index, setIndex] = useState(0);

    const [responseText, setResponseText] = useState("");
    const [error, setError] = useState("");

    const prompt = PROMPTS[index];

    async function startSession() {
        setError("");
        try {
            const res = await fetch("/sessions/start", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({}),
            });

            if (!res.ok) {
                throw new Error(`Start failed (${res.status})`);
            }

            const data = await res.json();
            if (!data?.session_id) throw new Error("Missing session_id from server.");

            setSessionId(data.session_id);
            setIndex(0);
            setResponseText("");
            setUi(UI.ANSWERING);
        } catch (e) {
            setError(e?.message || "Unknown error");
            setUi(UI.ERROR);
        }
    }

    async function submitResponse() {
        setError("");
        try {
            setUi(UI.SUBMITTING);

            // Save response to backend (even though prompts are local for now)
            const res = await fetch("/responses", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    sessionId: sessionId,
                    promptId: prompt.id,
                    responseText: responseText.trim(),
                }),
            });

            if (!res.ok) {
                throw new Error(`Response save failed (${res.status})`);
            }

            setUi(UI.SAVED);
        } catch (e) {
            setError(e?.message || "Unknown error");
            setUi(UI.ERROR);
        }
    }

    function continueToNext() {
        const nextIndex = index + 1;

        setResponseText("");

        if (nextIndex >= PROMPTS.length || prompt?.is_last) {
            setUi(UI.COMPLETE);
            return;
        }

        setIndex(nextIndex);
        setUi(UI.ANSWERING);
    }

    function reset() {
        setUi(UI.WELCOME);
        setSessionId(null);
        setIndex(0);
        setResponseText("");
        setError("");
    }

    console.log("RENDER UI STATE:", ui);
    useEffect(() => {
        console.log("responseText:", responseText);
    }, [responseText]);


    return (
        <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl space-y-4">
                {ui !== UI.WELCOME && ui !== UI.ERROR && (
                    <ProgressBar current={Math.min(index + 1, total)} total={total} />
                )}

                {ui === UI.WELCOME && (
                    <WelcomeCard onStart={startSession} loading={ui === UI.SUBMITTING} />
                )}

                {ui === UI.ANSWERING && (
                    <>
                        <div className="transition-all duration-300">
                            <PromptCard title={prompt.title} body={prompt.body} />
                        </div>

                        <ResponseBox
                            value={responseText}
                            onChange={setResponseText}
                            onSubmit={submitResponse}
                            disabled={false}
                            buttonLabel="Submit"
                        />
                    </>
                )}

                {ui === UI.SUBMITTING && (
                    <>
                        <PromptCard title={prompt?.title || "One moment…"} body={prompt?.body || "Loading"} />
                        <ResponseBox
                            value={responseText}
                            onChange={setResponseText}
                            onSubmit={() => { }}
                            disabled={true}
                            buttonLabel="Saving…"
                        />
                    </>
                )}

                {ui === UI.SAVED && <SavedStep onContinue={continueToNext} />}

                {ui === UI.COMPLETE && <CompleteCard onRestart={reset} />}

                {ui === UI.ERROR && <ErrorCard message={error} onReset={reset} />}

                <div className="text-xs text-zinc-500 flex justify-between">
                    <span>Session: {sessionId ?? "—"}</span>
                    <span>Prompt ID: {prompt?.id ?? "—"}</span>
                </div>
            </div>
        </div>
    );
}

export default SessionDriver