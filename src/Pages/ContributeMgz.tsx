import React from 'react'
import { Container, Row, Button } from 'reactstrap'
import { useParams } from 'react-router-dom'

export const ContributeMgzPage = () => {
    const params = useParams();
    return (
        <Container>
            <div className="justify-content">
                <h2 style={{}}>Contribution of {params.mgzTitle}</h2>
            </div>

        </Container>
    )
}
export default ContributeMgzPage