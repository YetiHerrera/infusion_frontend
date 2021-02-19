import React from "react";
import { NavDropdown } from "react-bootstrap";

export default function ContactRow(): JSX.Element {
  return (
    <tr className="shadow-sm">
      <td className="p-2 p-lg-0">
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
            <a
              href="http://facebook.com"
              className="contact-first-letter"
              target="blank"
            >
              F
            </a>
          </div>
          <div className="contact-profile contact-profile__social">
            <a
              href="http://facebook.com"
              className="contact-first-letter"
              target="blank"
            >
              T
            </a>
          </div>
          <div className="contact-profile contact-profile__social">
            <a
              href="http://facebook.com"
              className="contact-first-letter"
              target="blank"
            >
              L
            </a>
          </div>
        </div>
      </td>
      <td>24/10/2020</td>
      <td>
        <div className="row justify-content-center">
          <NavDropdown title="" id="dropdown_about">
            <NavDropdown.Item className="px-4">Editar</NavDropdown.Item>
            <NavDropdown.Item className="px-4">Eliminar</NavDropdown.Item>
          </NavDropdown>
        </div>
      </td>
    </tr>
  );
}
