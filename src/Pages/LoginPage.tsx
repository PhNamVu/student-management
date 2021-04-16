import { useStyletron } from 'baseui'
import React, { useState } from 'react'
import { toaster } from 'baseui/toast'

import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { fbase } from '../hooks/use-auth'
import { DownloadBtn } from '../components/DownloadBtn'

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [css, theme] = useStyletron()
  const submitHandler = async (e: any) => {
    try {
      await e.preventDefault()
      await fbase.auth().signInWithEmailAndPassword(email, password)
      toaster.positive('Login successful', {
        autoHideDuration: 5000,
      })
    } catch (error) {
      toaster.warning('Error. Please try again!', {
        autoHideDuration: 5000,
      })
    }
  }
  return (
    <Row className="mx-auto align-items-center" style={{ height: '100vh' }}>
      <Col
        className="mx-auto align-items-center"
        xl="4"
        xs="10"
        md="8"
        lg="5"
        sm="8"
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'center',
          })}
        >
          <h3
            className={css({
              marginBottom: theme.sizing.scale1000,
              ':hover': {
                color: '#17AF84',
              },
            })}
          >
            {' '}
            Welcome back
          </h3>
        </div>
        <Form onSubmit={submitHandler}>
          <FormGroup className="mb-3">
            <Label for="email">Email</Label>
            <Input
              value={email}
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              autoComplete="on"
              value={password}
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <div
            className={css({
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: theme.sizing.scale500,
            })}
          >
            <Button type="submit" outline color="dark">
              Log in
            </Button>
          </div>
        </Form>
        <DownloadBtn/>
      </Col>
    </Row>
  )
}
