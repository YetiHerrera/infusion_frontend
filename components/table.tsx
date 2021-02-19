import React from "react";
import { useState } from "react";
import ContactRow from "components/contact_row";

import { Table } from "react-bootstrap";

export default function TableContacts(): JSX.Element {
  const [contacts] = useState([1, 2, 3, 4, 5]);

  return (
    <Table responsive="md" borderless>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Company</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Social media</th>
          <th>Created at</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((element: number) => (
          <ContactRow key={element} />
        ))}
      </tbody>
    </Table>
  );
}
