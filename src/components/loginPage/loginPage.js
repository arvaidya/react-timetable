import React, {useState} from 'react';
import Form from "react-bootstrap/cjs/Form";
import Button from "react-bootstrap/cjs/Button";
import Container from "react-bootstrap/cjs/Container";

export default function LoginPage() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const isValidLogin = () => username === 'testUser' && password === 'testPassword';

    const handleSubmit = async e => {
        e.preventDefault()
        if(isValidLogin()) {
            sessionStorage.setItem('validUser', true)
            window.location.href='/trips'
        }
    }

    return (
            <>
                <Container>
                    <div>
                        <h2>Login Page</h2>
                        <p>Please enter your user name and password below</p>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User name</Form.Label>
                            <Form.Control type="text" placeholder="Enter user name" name="username"
                                          onChange={event => setUsername(event.target.value)}/>
                            <Form.Text className="text-muted">
                                We'll never share your data with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password"
                                onChange={event => setPassword(event.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" value="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </>
        );
    }
