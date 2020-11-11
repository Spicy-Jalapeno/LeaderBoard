import Axios from "axios";
import create from "zustand";

const useStore = create(set => ({
    // test: 0,
    // updateCounter: () => set(state => ({ test: state.test + 1 }))
    games: [],
    players: [],
    playedGames: [],
    fetchGames: async () => {
        const { data } = await Axios.get('/api/games/')
        set({ games: data })
    },
    darkMode: true,
    setDarkMode: () => {}
}))

export default useStore