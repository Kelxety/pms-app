import { create } from 'zustand'

interface RolesT {
  role: 'user' | 'admin'| null;
  updateRole: (newRole: 'user' | 'admin' | null ) => void;
}

interface AuthT {
  userRole: null | 'user' | 'admin';
  login: (role: 'user' | 'admin' | null) => void;
  logout: () => void;
}

const useRoleStore = create<RolesT>((set) => ({
  role: null,
  updateRole: (newRole: 'user' | 'admin' | null) => set({role: newRole})
}))

const useAuthStore = create<AuthT>((set) => ({
  userRole: null as null | 'user' | 'admin',
  login: (role: 'user' | 'admin' | null) => set((state)=>({ userRole: role })),
  logout: () => {
    set({ userRole: null })
  },
}))

export { useRoleStore, useAuthStore };