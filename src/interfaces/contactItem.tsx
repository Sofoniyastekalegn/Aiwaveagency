import React, { FC } from "react";

import { Contact } from "../types";

const ContactItem: FC<Contact> = ({ firstName, lastName, phoneNumber, address, email }) => {
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phoneNumber}</td>
            <td>{email}</td>

        </tr>
    );
};

export default ContactItem;