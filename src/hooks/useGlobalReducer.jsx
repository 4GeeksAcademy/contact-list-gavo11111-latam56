import React, { useState, useEffect } from "react";
import initialStore from "../store.js";

export const Context = React.createContext(null);

const addContext = ContextComponent => {
    const StoreComponent = props => {
        const [state, setState] = useState(
            initialStore({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: upgradeState =>
                    setState({
                        store: Object.assign(state.store, upgradeState),
                        actions: { ...state.actions }
                    })
            })
        );

        useEffect(() => {
            state.actions.getContacts();
        }, []);

        return (
            <Context.Provider value={state}>
                <ContextComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreComponent;
};

export default addContext;


