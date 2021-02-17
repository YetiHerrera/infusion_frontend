import React from "react";
import { Button, NavDropdown, Table } from "react-bootstrap";

export default function Home(): JSX.Element {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6 col-lg-8">
          <p className="subtitle">Contacts</p>
        </div>
        <div className="col-6 col-lg-4">
          <div className="row justify-content-end">
            <NavDropdown title="Order by" id="dropdown_about">
              <NavDropdown.Item className="px-4">Editar</NavDropdown.Item>
              <NavDropdown.Item className="px-4">Eliminar</NavDropdown.Item>
            </NavDropdown>
            <Button className="mr-2 mr-md-2">New contact</Button>
          </div>
        </div>
      </div>

      <div className="contacts-list row mt-3 p-4">
        <div className="col-12">
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
              <tr>
                <td>
                  <div className="contact-profile">
                    <p className="contact-first-letter">J</p>
                  </div>
                </td>
                <td>Jonathan herrera</td>
                <td>Yetis</td>
                <td>+502 56003171</td>
                <td>jherrera@yetis.io</td>
                <td>
                  <div className="row justify-content-between ml-1 mr-3">
                    <div className="contact-profile contact-profile__social">
                      <p className="contact-first-letter">F</p>
                    </div>
                    <div className="contact-profile contact-profile__social">
                      <p className="contact-first-letter">T</p>
                    </div>
                    <div className="contact-profile contact-profile__social">
                      <p className="contact-first-letter">L</p>
                    </div>
                  </div>
                </td>
                <td>24/10/2020</td>
                <td>
                  <div className="row justify-content-center">
                    <NavDropdown title="" id="dropdown_about">
                      <NavDropdown.Item className="px-4">
                        Editar
                      </NavDropdown.Item>
                      <NavDropdown.Item className="px-4">
                        Eliminar
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="contact-profile">
                    <p className="contact-first-letter">J</p>
                  </div>
                </td>
                <td>Jonathan herrera</td>
                <td>Yetis</td>
                <td>+502 56003171</td>
                <td>jherrera@yetis.io</td>
                <td>
                  <div className="row justify-content-between ml-1 mr-3">
                    <div className="contact-profile contact-profile__social">
                      <p className="contact-first-letter">F</p>
                    </div>
                    <div className="contact-profile contact-profile__social">
                      <p className="contact-first-letter">T</p>
                    </div>
                    <div className="contact-profile contact-profile__social">
                      <p className="contact-first-letter">L</p>
                    </div>
                  </div>
                </td>
                <td>24/10/2020</td>
                <td>
                  <div className="row justify-content-center">
                    <NavDropdown title="" id="dropdown_about">
                      <NavDropdown.Item className="px-4">
                        Editar
                      </NavDropdown.Item>
                      <NavDropdown.Item className="px-4">
                        Eliminar
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="contact-profile">
                    <p className="contact-first-letter">J</p>
                  </div>
                </td>
                <td>Jonathan herrera</td>
                <td>Yetis</td>
                <td>+502 56003171</td>
                <td>jherrera@yetis.io</td>
                <td>
                  <div className="row justify-content-between ml-1 mr-3">
                    <div className="contact-profile contact-profile__social">
                      <p className="contact-first-letter">F</p>
                    </div>
                    <div className="contact-profile contact-profile__social">
                      <p className="contact-first-letter">T</p>
                    </div>
                    <div className="contact-profile contact-profile__social">
                      <p className="contact-first-letter">L</p>
                    </div>
                  </div>
                </td>
                <td>24/10/2020</td>
                <td>
                  <div className="row justify-content-center">
                    <NavDropdown title="" id="dropdown_about">
                      <NavDropdown.Item className="px-4">
                        Editar
                      </NavDropdown.Item>
                      <NavDropdown.Item className="px-4">
                        Eliminar
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
