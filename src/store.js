const initialStore = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            contact: ""
        },
        actions: {
            createAgenda: async () => {
                const store = getStore();
                try {
                    const response = await fetch(
                        `https://playground.4geeks.com/contact/agendas/contacts_gavotroll`,
                        {
                            method: "POST"
                        }
                    );
                    if (response.ok) {
                        console.log("Agenda created successfully");
                        getActions().getContacts();
                    }
                } catch (error) {
                    console.error("Error at creating agenda:", error);
                }
            },

            getContacts: async () => {
                const store = getStore();
                try {
                    const response = await fetch(
                        `https://playground.4geeks.com/contact/agendas/contacts_gavotroll/contacts`
                    );
                    
                    if (response.status === 404) {
                        await getActions().createAgenda();
                        return;
                    }
                    
                    const data = await response.json();
                    setStore({ contacts: data.contacts || [] });
                } catch (error) {
                    console.error("Error getting contacts:", error);
                    setStore({ contacts: [] });
                }
            },

            addContact: async (contact) => {
                const store = getStore();
                try {
                    const response = await fetch(
                        `https://playground.4geeks.com/contact/agendas/contacts_gavotroll/contacts`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(contact)
                        }
                    );
                    
                    if (response.ok) {
                        await getActions().getContacts();
                        return true;
                    }
                    return false;
                } catch (error) {
                    console.error("Error at creating contacts:", error);
                    return false;
                }
            },

            updateContact: async (id, contact) => {
                const store = getStore();
                try {
                    const response = await fetch(
                        `https://playground.4geeks.com/contact/agendas/contacts_gavotroll/contacts/${id}`,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(contact)
                        }
                    );
                    
                    if (response.ok) {
                        await getActions().getContacts();
                        return true;
                    }
                    return false;
                } catch (error) {
                    console.error("Error at updating contacts:", error);
                    return false;
                }
            },

            delContact: async (id) => {
                const store = getStore();
                try {
                    const response = await fetch(
                        `https://playground.4geeks.com/contact/agendas/contacts_gavotroll/contacts/${id}`,
                        {
                            method: "DELETE"
                        }
                    );
                    
                    if (response.ok) {
                        await getActions().getContacts();
                        return true;
                    }
                    return false;
                } catch (error) {
                    console.error("Error at deleting contacts:", error);
                    return false;
                }
            },

            setContact: (contact) => {
                setStore({ contact: contact });
            }
        }
    };
};

export default initialStore;



