import { create, SetState } from 'zustand';

// Definindo o tipo de estado do switch
interface SwitchState {
  toggle: boolean;
  setToggle: (value: boolean) => void;
}

// Hook Zustand para controlar o estado do switch
const useSwitchStore = create<SwitchState>((set: SetState<SwitchState>) => ({
  toggle: true,
  setToggle: (value: boolean) => set({ toggle: value }),
}));

export default useSwitchStore;
