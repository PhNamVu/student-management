import React from 'react'
import { Container } from 'reactstrap';
import { NavBar } from './nav';

export const Layout = (props: any) => {
    return (
        <>
            <Container fluid>
                <NavBar/>
                <main>
                    {props.children}
                </main>
            </Container>
        </>
    )
}