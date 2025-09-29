// test/twSmart.test.ts
import { describe, it, expect } from "vitest";
import { twSmart } from "../src/index";

describe("twSmart", () => {
    it("applies base classes", () => {
        const result = twSmart({ base: "px-4 py-2 rounded" });
        expect(result).toBe("px-4 py-2 rounded");
    });

    it("applies conditional classes", () => {
        const result = twSmart({
            base: "px-4 py-2",
            condition: "bg-green-500",
        });
        expect(result).toBe("px-4 py-2 bg-green-500");
    });

    it("resolves pseudo-classes", () => {
        const result = twSmart({
            base: "px-4 py-2",
            hover: "bg-blue-500",
            focus: "ring-2",
        });
        expect(result).toBe("px-4 py-2 hover:bg-blue-500 focus:ring-2");
    });

    it("resolves responsive classes", () => {
        const result = twSmart({
            base: "px-4",
            sm: "text-sm",
            md: "text-md",
            lg: "text-lg",
        });
        expect(result).toBe("px-4 sm:text-sm md:text-md lg:text-lg");
    });

    it("handles nested pseudo + responsive", () => {
        const result = twSmart({
            base: "px-4",
            sm: {
                hover: "bg-blue-600",
                focus: "ring-2",
            },
        });
        expect(result).toBe("px-4 sm:hover:bg-blue-600 sm:focus:ring-2");
    });

    it("applies dark and light theme classes", () => {
        const result = twSmart({
            base: "px-4",
            dark: "bg-black text-white",
            light: "bg-white text-black",
        });
        expect(result).toBe(
            "px-4 dark:bg-black dark:text-white light:bg-white light:text-black"
        );
    });

    it("merges conflicting classes correctly", () => {
        const result = twSmart({
            base: "px-4 px-2",
            condition: "px-3",
        });
        // twMerge should keep last applied value
        expect(result).toBe("px-3");
    });

    it("handles multiple nested combinations", () => {
        const result = twSmart({
            base: "px-4 py-2 rounded",
            hover: "bg-blue-500",
            focus: "ring-2",
            sm: { hover: "bg-blue-600", focus: "ring-4" },
            md: { active: "bg-red-500" },
            dark: "text-white",
            condition: "font-bold",
        });
        expect(result).toBe(
            "px-4 py-2 rounded hover:bg-blue-500 focus:ring-2 sm:hover:bg-blue-600 sm:focus:ring-4 md:active:bg-red-500 dark:text-white font-bold"
        );
    });
});
