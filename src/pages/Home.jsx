import React, { useContext, useEffect, useState } from "react";
import { Context } from "../hooks/useGlobalReducer.jsx";
import { Contacts } from "../components/Contacts.jsx";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts();
    }, []);

    const handleDelete =  async (contact) => {
        if (contact) {
            const success = await actions.delContact(contact.id);
            if (success) {
                console.log("Deleted Contact successfully");
            }
        }
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {store.contacts.length === 0 ? (
                        <div className="alert alert-warning text-center mt-4" role="alert">
                            <h5>You don´t have any contacts yet!
                            Add your first contact using the button above.</h5>
                        </div>
                    ) : (
                        store.contacts.map((contact) => (
                            <Contacts
                                key={contact.id}
                                contact={contact}
                                delContact={handleDelete}
                            />
                        ))
                    )}
                </div>
            </div>
            
        </div>
    );
};
