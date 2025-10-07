import React, { useContext, useState, useEffect } from "react";
import { Context } from "../hooks/useGlobalReducer.jsx";
import { useNavigate, useParams } from "react-router-dom";

export const CreateContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();
    const modify = id;

    const [contactDetails, setcontactDetails] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        if (modify && store.contact) {
            setcontactDetails({
                name: store.contact.name || "",
                email: store.contact.email || "",
                phone: store.contact.phone || "",
                address: store.contact.address || ""
            });
        }
    }, [modify, store.contact]);

    const handleChange = (e) => {
        setcontactDetails({
            ...contactDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!contactDetails.name || !contactDetails.email || !contactDetails.phone || !contactDetails.address) {
            alert("Please complete all of the fields");
            return;
        }

        let complete;
        if (modify) {
            complete = await actions.updateContact(id, contactDetails);
        } else {
            complete = await actions.addContact(contactDetails);
        }

        if (complete) {
            navigate("/");
        } else {
            alert("Error: contact not saved");
        }
    };

    return (
        <div className="container pumpinkContainer">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <h1 className="text-center mb-4">
                        {modify ? "Edit Contact" : "Add New Contact"}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Enter full name"
                                value={contactDetails.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter email"
                                value={contactDetails.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                                Phone
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="phone"
                                name="phone"
                                placeholder="Enter phone"
                                value={contactDetails.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">
                                Address
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                placeholder="Enter address"
                                value={contactDetails.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn pumpkinButton w-100 mb-2">
                            {modify ? "Update Contact" : "Save your Contacts"}
                        </button>
                        <button
                            type="button"
                            className="btn btn-link w-100"
                            onClick={() => navigate("/")}
                        >
                            <i className="fs-4">or go back to your Contact List </i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};


