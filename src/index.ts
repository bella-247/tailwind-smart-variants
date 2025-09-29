// src/index.ts

import { twMerge } from "tailwind-merge";

const PSEUDO_CLASSES = [
    "hover",
    "focus",
    "active",
    "disabled",
    "visited",
    "focus-visible",
] as const;

const BREAKPOINTS = ["sm", "md", "lg", "xl", "2xl"] as const;

type PseudoClass = (typeof PSEUDO_CLASSES)[number];
type Breakpoint = (typeof BREAKPOINTS)[number];

export type TwSmartObject = {
    base?: string;
    condition?: string;
    dark?: string;
    light?: string;
    [key: string]: string | TwSmartObject | undefined; // fallback for pseudo & breakpoints
};

export function twSmart(obj: TwSmartObject): string {
    const result: string[] = [];

    function processObject(baseObj: TwSmartObject, prefix = "") {
        for (const key in baseObj) {
            const value = baseObj[key as keyof TwSmartObject];
            if (!value) continue;

            // Compute new prefix
            let newPrefix = prefix;
            if (PSEUDO_CLASSES.includes(key as PseudoClass))
                newPrefix += `${key}:`;
            if (BREAKPOINTS.includes(key as Breakpoint)) newPrefix += `${key}:`;
            if (key === "dark" || key === "light") newPrefix += `${key}:`;

            // Nested object
            if (typeof value === "object") {
                processObject(value as TwSmartObject, newPrefix);
                continue;
            }

            // Base and condition are added as-is
            if (key === "base" || key === "condition") {
                result.push(value as string);
            }
            // Dark/light: split multiple classes and prefix each
            else if (key === "dark" || key === "light") {
                (value as string)
                    .split(" ")
                    .forEach((cls) => result.push(`${key}:${cls}`));
            }
            // All others (pseudo, breakpoints) get prefixed
            else {
                result.push(`${newPrefix}${value}`);
            }
        }
    }

    processObject(obj);

    // Merge all classes and resolve conflicts
    return twMerge(result.join(" "));
}
