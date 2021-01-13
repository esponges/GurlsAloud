import React, { Component } from "react";
import {Form, Button} from 'react-bootstrap';

const CheckoutForm = (props) => {
    return (
        <div className="container mt-5">
            <Form action="/order/create" method="post">
                {/* <input type="hidden" value={props.passToken} name="_token" /> */}
                <input type="hidden" value={csrf_token} name="_token" />
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Tu nombre completo"
                        name="name"
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Tu teléfono"
                        name="phone"
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Tu dirección de envío</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="¿A qué dirección enviamos?"
                        name="address"
                    />
                </Form.Group>
                <div className="mb-3">
                    <Form.Check
                        type="radio"
                        id={`default-radio`}
                        label="Depósito/transferencia"
                        name="payment_mode"
                        value="1"
                    />
                    <Form.Check
                        type="radio"
                        id={`default-radio`}
                        label="Paypal"
                        name="payment_mode"
                        value="2"
                    />
                </div>
                <Button variant="primary" type="submit">
                    Generar orden
                </Button>
            </Form>
        </div>
    );
};

export default CheckoutForm;
