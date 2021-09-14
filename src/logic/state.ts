type storeType = {}

const store = {
    _state: {
        panelValues: {
            inputValue: "",
            currentWordIndex: 0
        }
    },
    _callSubscriber() {
        console.log("No subscriber")
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: object) {
    }
}

// Action Creators
const inputValueActionCreator = () => ({
    type: ""
})

export default store