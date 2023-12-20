import { create } from "zustand";

export const useSesionStore = create((set) => ({
    PAT: null,
    RAT: null,
    isLogged: false,
    userData: [],
    timer: 0,
    sesionWasStarted: false,
    isLoading: false,
    setTokens: (tokens) => set(() => ({ PAT: tokens.access, RAT: tokens.refresh, isLogged: true, sesionWasStarted: true })),
    setUserData: (data) => set(() => ({ userData: data })),
    setLoading: (value) => set(() => ({ isLoading: value })),
    increment: () => set((state) => ({ timer: state.timer + 1 })),
    refreshPAT: () => set((token) => ({ PAT: token, timer: 0 })),
    resetTimer: () => set(() => ({ timer: 1 })),
    logout: () => set(() => ({ PAT: null, RAT: null, isLogged: false, userData: [], timer: 0 }))
}))

