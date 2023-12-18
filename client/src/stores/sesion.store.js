import { create } from "zustand";

export const useSesionStore = create((set) => ({
    PAT: null,
    RAT: null,
    isLogged: false,
    userData: [],
    isLoading: false,
    setTokens: (tokens) => set(() => ({ PAT: tokens.access, RAT: tokens.refresh, isLogged: true })),
    setUserData: (data) => set(() => ({ userData: data })),
    setLoading: (value) => set(() => ({ isLoading: value })),
    logout: () => set(() => ({ PAT: null, RAT: null, isLogged: false, userData: [] }))
}))

