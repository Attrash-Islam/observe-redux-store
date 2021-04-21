export default function observeStore(store, select, onChange) {
    let currentState;

     function handleChange() {
        const nextState = select(store.getState());
        if (nextState !== currentState) {
            const _current = currentState;
            currentState = nextState;
            onChange(nextState, _current);
        }
    }

    const unsubscribe = store.subscribe(handleChange);
    handleChange();
    return unsubscribe;
}
