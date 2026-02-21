"use client";

import { useEffect, useMemo, useState } from 'react'

type Props = {
    words: string[];
    typingMs?: number;      // speed per char
    deletingMs?: number;    // speed per char while deleting
    pauseMs?: number;       // pause when word completes
    className?: string;
};

export default function TypeWriter({
    words,
    typingMs = 55,
    deletingMs = 28,
    pauseMs = 900,
    className = "",
}: Props) {
    const = list = UseMemo(() => words.filter(Boolean), [words]);
    const [i, setI] = useState(0);      // which word
    const [text, setText] = useState(""); // current substring
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (list.length === 0) return;

        const word = list[i % list.length];

        const tick = () {
            if (!deleting) {
                const next = word.slice(0, text.length + 1);
                setText(next)
                if (next === word) {
                    // pause then start deleting
                    setTimeout(() => setDeleting(true), pauseMs);
                    return;
                }
            } else {
                const next = word.slice(0, Math.max(0, text.length - 1));
                setText(next);
                if (next === "") {
                    setDeleting(false);
                    setI((v) => (v + 1) % list.length);
                }
            }
        };
        const ms = deleting ? deletingMs : typingMs;
        const t = setTimeout(tick, ms);
        return () => clearTimeout(t);
    }, [text, deleting, i, list, typingMs, deletingMs, pauseMs]);

    return (
        <span className={className}>
            {text}
            <span className = "m1-1 inline-block w-[0.6ch] animate-pulse text-white">
                |
            </span>
        </span>
    );
}
