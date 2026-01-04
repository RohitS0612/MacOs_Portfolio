import { create } from 'zustand';

const useThemeStore = create((set) => ({
  theme: 'light',
  toggleTheme: (theme) => set({ theme }),
}));

export default useThemeStore;
