import create from "zustand"

const useStore = create((set,get) => ({
    users: [],
    setUsers: (users) => set(({users: users})),
    activeUSer: "",
    setActiveUser: (userId) => set(({activeUSer: userId})),
    messages: ""
}))

export default useStore