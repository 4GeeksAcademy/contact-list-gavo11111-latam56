import React, { useContext } from "react";
import { Context } from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const Contacts = ({ contact, delContact }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const editContact = () => {
        actions.setContact(contact);
        navigate(`/edit/${contact.id}`);
    };

    return (
        <div className="card mb-4">
            <div className="row">
                <div className="col-md-3 d-flex justify-content-center align-items-center p-2">
                <span className="fs-1">&#128512;</span>
                    
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{contact.name}</h5>
                        <p className="card-text mb-1">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            {contact.address}
                        </p>
                        <p className="card-text mb-1">
                            <i className="fas fa-phone-volume me-2"></i>
                            {contact.phone}
                        </p>
                        <p className="card-text">
                            <i className="fas fa-envelope-open me-2"></i>
                            {contact.email}
                        </p>
                    </div>
                </div>
                <div className="col-md-2 d-flex justify-content-center align-items-start p-3">
                    <button
                        className="btn btn-sm me-2"
                        onClick={editContact}
                    >
                        <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button
                        className="btn btn-sm"
                        onClick={() => delContact(contact)}
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};


