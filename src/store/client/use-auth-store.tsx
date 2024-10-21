import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  businesses: string[];
  setBusinesses: (businesses: string[]) => void;
  currentBusiness: string;
  setCurrentBusiness: (currentBusiness: string) => void;
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      businesses: ["Payshiga Technologies", "Joseph Technologies"],
      setBusinesses: (businesses: string[]) => set(() => ({ businesses })),
      currentBusiness: "Payshiga Technologies",
      setCurrentBusiness: (currentBusiness: string) =>
        set(() => ({ currentBusiness })),
    }),
    {
      name: "alert-mfb-store",
    }
  )
);

export default useAuthStore;
