import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { useStyletron } from 'baseui'
import PrimaryButton from '../components/shared/button/PrimaryBtn'
import { toaster } from 'baseui/toast'
import { useGetFacultyQuery } from '../graphql/autogenerate/hooks'
import { gql, useMutation } from '@apollo/client'

export const CreateUserPage = () => {
  const [fullName, setFullName] = React.useState('')
  const [email, setEmail] = React.useState('@gmail.com')
  const [password, setPassWord] = React.useState('123456789')
  const [facultyId, setFacultyId] = React.useState('')
  const [roles, setRoles] = React.useState('')
  const [css, theme] = useStyletron()

  const { data } = useGetFacultyQuery()

  const [studentSetup] = useMutation(gql`
    mutation StudentSetup($input: StudentSetupInput!) {
      studentSetup(input: $input) {
        status
        statusCode
        message
      }
    }
  `)

  const submitHandler = async (e: any) => {
    e.preventDefault()
    if (roles === 'STUDENT') {
      try {
        const dataRes = await studentSetup({
          variables: {
            input: {
              email,
              facultyId,
              fullName,
              password,
              roles,
            },
          },
        })
        if (dataRes && dataRes.data.studentSetup.status === 'success') {
          toaster.positive('Add user thanh cong', {
            autoHideDuration: 3000,
          })
        }
      } catch (error) {
        console.log(error)
        toaster.negative('Add user fail', {
          autoHideDuration: 3000,
        })
      }
    } else {
      console.log('submit')
    }
  }

  const facultys = data && data.facultys

  return (
    <Row className="d-flex justify-content-center">
      <Col xl="4" lg="5" md="4" sm="10" xs="5">
        <h3 className="mb-5"> Create User</h3>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <Label for="fullName">Full name</Label>
            <Input
              id="fullName"
              required
              name="fullName"
              placeholder="Full name"
              type="text"
              onChange={(e) => setFullName(e.currentTarget.value)}
              value={fullName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              required
              name="email"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.currentTarget.value)}
              value={email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              required
              name="password"
              placeholder="password"
              type="password"
              onChange={(e) => setPassWord(e.currentTarget.value)}
              value={password}
            />
          </FormGroup>
          <FormGroup>
            <Label for="roles">Role</Label>
            <Input
              id="roles"
              required
              type="select"
              name="roles"
              onChange={(e) => setRoles(e.target.value)}
            >
              <option> MANAGER</option>
              <option>STUDENT</option>
              <option>GUEST</option>
              <option> MCO</option>
            </Input>
          </FormGroup>
          {roles !== 'MANAGER' && roles !== '' && (
            <FormGroup>
              <Label for="facultyId">Faculty</Label>
              <Input
                id="facultyId"
                required
                type="select"
                name="facultyId"
                onChange={(e: any) => setFacultyId(e.target[0].id)}
              >
                {facultys?.map((item: any) => (
                  <option id={item.id} key={item.id}>
                    {' '}
                    {item.label}{' '}
                  </option>
                ))}
              </Input>
            </FormGroup>
          )}
          <div
            className={css({
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: theme.sizing.scale500,
            })}
          >
            <PrimaryButton type="submit">Save</PrimaryButton>
          </div>
        </Form>
      </Col>
    </Row>
  )
}
