type storeType = {

}

const store = {
    _state: {
        inputValue: "",
        currentWordIndex: 0
    },
    _callSubscriber() {
        console.log("No subscriber")
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    }
}

export default store