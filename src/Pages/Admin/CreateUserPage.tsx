import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { useStyletron } from 'baseui'
import PrimaryButton from '../../components/shared/button/PrimaryBtn'
import { toaster } from 'baseui/toast'
import { useAddUserMutation, useGetFacultyQuery } from '../../graphql/autogenerate/hooks'
import { gql, useMutation } from '@apollo/client'

export const CreateUserPage = () => {
  const [fullName, setFullName] = React.useState('')
  const [email, setEmail] = React.useState('@gmail.com')
  const [password, setPassWord] = React.useState('123456789')
  const [facultyId, setFacultyId] = React.useState('a2774788-65ce-4018-9d76-5e989a7c479b')
  const [roles, setRoles] = React.useState('MANAGER')
  const [css, theme] = useStyletron()
  const [addUser] = useAddUserMutation()
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

  const [managerSetup] = useMutation(gql`
    mutation ManagerSetup($input: ManagerSetupInput!) {
      managerSetup(input: $input) {
        status
        statusCode
        message
      }
    }
  `)

  const [coordinatorSetup] = useMutation(gql`
  mutation CoordinatorSetup($input: CoordinatorSetupInput!) {
    coordinatorSetup(input: $input) {
      status
      statusCode
      message
    }
  }
  `)

  const [guestSetup] = useMutation(gql`
    mutation GuestSetup($input: GuestSetupInput!) {
      guestSetup(input: $input) {
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
            },
          },
        })
        if (dataRes && dataRes.data.studentSetup.status === 'success') {
          try {
            await addUser({
              variables: {
                object: {
                  id: dataRes.data.studentSetup.message,
                  email,
                  facultyId,
                  fullName,
                  roles,
                },
              },
            })
            toaster.positive('Add student successful', {
              autoHideDuration: 3000,
            })
          } catch (error) {
            console.log(error)
            toaster.negative('Add to database fail', {
              autoHideDuration: 3000,
            })
          }
        }
      } catch (error) {
        console.log(error)
        toaster.negative('Add user fail', {
          autoHideDuration: 3000,
        })
      }
    }
    // MANAGER
    else if (roles === 'MANAGER') {
      try {
        const dataRes = await managerSetup({
          variables: {
            input: {
              email,
              fullName,
              password,
            },
          },
        })
        if (dataRes && dataRes.data.managerSetup.status === 'success') {
          try {
            await addUser({
              variables: {
                object: {
                  id: dataRes.data.managerSetup.message,
                  email,
                  fullName,
                  roles,
                },
              },
            })
            toaster.positive('Add manager successful', {
              autoHideDuration: 3000,
            })
          } catch (error) {
            console.log(error)
            toaster.negative('Add to database fail', {
              autoHideDuration: 3000,
            })
          }
        }
      } catch (error) {
        console.log(error)
        toaster.negative('Add user fail', {
          autoHideDuration: 3000,
        })
      }
    }
    // MCO
    else if (roles === 'MCO') {
      try {
        const dataRes = await coordinatorSetup({
          variables: {
            input: {
              email,
              facultyId,
              fullName,
              password,
            },
          },
        })
        if (dataRes && dataRes.data.coordinatorSetup.status === 'success') {
          try {
            await addUser({
              variables: {
                object: {
                  id: dataRes.data.coordinatorSetup.message,
                  email,
                  facultyId,
                  fullName,
                  roles,
                },
              },
            })
            toaster.positive('Add coordinator successful', {
              autoHideDuration: 3000,
            })
          } catch (error) {
            console.log(error)
            toaster.negative('Add to database fail', {
              autoHideDuration: 3000,
            })
          }
        }
      } catch (error) {
        console.log(error)
        toaster.negative('Add user fail', {
          autoHideDuration: 3000,
        })
      }
    }
    // GUEST
    else if (roles === 'GUEST') {
      try {
        const dataRes = await guestSetup({
          variables: {
            input: {
              email,
              facultyId,
              fullName,
              password,
            },
          },
        })
        if (dataRes && dataRes.data.guestSetup.status === 'success') {
          try {
            await addUser({
              variables: {
                object: {
                  id: dataRes.data.guestSetup.message,
                  email,
                  facultyId,
                  fullName,
                  roles,
                },
              },
            })
            toaster.positive('Add guest successful', {
              autoHideDuration: 3000,
            })
          } catch (error) {
            console.log(error)
            toaster.negative('Add to database fail', {
              autoHideDuration: 3000,
            })
          }
        }
      } catch (error) {
        console.log(error)
        toaster.negative('Add user fail', {
          autoHideDuration: 3000,
        })
      }
    } 
    else {
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
