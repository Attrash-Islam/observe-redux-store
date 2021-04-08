export default function observeStore(store, select, onChange) {
    let currentState;

     function handleChange() {
        const nextState = select(store.getState());
        if (nextState !== currentState) {
            onChange(nextState, currentState);
            currentState = nextState;
        }
    }

     const unsubscribe = store.subscribe(handleChange);
    handleChange();
    return unsubscribe;
}
