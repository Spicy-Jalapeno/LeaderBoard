import create from "zustand";

const useStore = create(set => ({
    test: 0,
    updateCounter: () => set(state => ({ test: state.test + 1 }))
}))

export default useStore