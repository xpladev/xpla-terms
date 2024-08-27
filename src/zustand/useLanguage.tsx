import { create } from 'zustand';

interface LanguageState {
    language: "english" | "korean";
    setLanguage: (input: "english" | "korean") => void;
}

const defaultKorean = window.navigator.language.includes("ko") && window.location.href.includes("hello-pal");

const useLanguage = create<LanguageState>(set => ({
    language: defaultKorean ? "korean" : "english",
    setLanguage: (input) => set({ language: input }),
}));

export default useLanguage;