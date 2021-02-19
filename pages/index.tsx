import TableContacts from "components/table";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { TrendingUp, TrendingDown, UserPlus } from "react-feather";

export default function Home(): JSX.Element {
  const [isAscending, setOrder] = useState(true);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6 col-lg-8">
          <p className="subtitle">Contacts</p>
        </div>
        <div className="col-6 col-lg-4">
          <div className="row justify-content-end">
            <Button
              className="mr-2 mr-md-2 btn-light border-0 shadow"
              onClick={() => setOrder(!isAscending)}
            >
              {!isAscending ? (
                <TrendingUp className="pr-2" />
              ) : (
                <TrendingDown className="pr-2" />
              )}
              {isAscending ? `Descending Order ` : `Ascending Order `}
            </Button>
            <Button className="mr-2 mr-md-2 btn-primary border-0 shadow">
              <UserPlus className="pr-2" />
              New contact
            </Button>
          </div>
        </div>
      </div>

      <div className="contacts-list row mt-3 p-4">
        <div className="col-12">
          <TableContacts />
        </div>
      </div>
    </div>
  );
}
