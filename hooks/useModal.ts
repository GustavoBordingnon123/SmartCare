import { create, SetState } from 'zustand';

interface ModalState {
  toggle: boolean;
  setToggle: (value: boolean) => void;
}

// Hook Zustand para controlar o estado do Modal
const useModalStore = create<ModalState>((set: SetState<ModalState>) => ({
  toggle: true,
  setToggle: (value: boolean) => set({ toggle: value }),
}));

export default useModalStore;
