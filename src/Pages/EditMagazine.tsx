import React, { useState } from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { TimePicker } from 'baseui/timepicker'
import { useStyletron } from 'baseui'
import PrimaryButton from '../components/shared/button/PrimaryBtn'
import DatePicker from 'react-date-picker'
import moment from 'moment'
import {
  useEditMagazineMutation,
  useGetMagazineQuery,
} from '../graphql/autogenerate/hooks'
import { toaster } from 'baseui/toast'
import { useNavigate, useParams } from 'react-router-dom'

export const EditMagazinePage = () => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [css, theme] = useStyletron()
  const [closureTemp, setClosureTemp] = useState(new Date())
  const [closureFinal, setClosureFinal] = useState(new Date())
  const [updateMagazine] = useEditMagazineMutation()
  const navigate = useNavigate()
  const { data, error } = useGetMagazineQuery({
    fetchPolicy: 'network-only',
    variables: {
      where: {
        id: { _eq: id },
      },
    },
  })
  
  if (error) return <div>Error at Edit Magazine component {error}</div>
  const submitHandler = async (e: any) => {
    e.preventDefault()
    try {
      await updateMagazine({
        variables: {
          object: {
            label: name,
            closureTemp,
            closureFinal,
          },
        },
      })
      toaster.positive('Add magazine successful', {
        autoHideDuration: 3000,
      })
      navigate('/')
    } catch (error) {
      console.log(error)
      toaster.negative('Add magazine fail', {
        autoHideDuration: 3000,
      })
    }
  }
  
  const magazine = data?.magazines[0]
  console.log('magazine ne', magazine)
  return (
  
    <Row className="d-flex justify-content-center">
      <Col xl="4" lg="5" md="4" sm="10" xs="5">
        <h3 className="mb-5"> Edit Magazine</h3>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <Label for="name">Name</Label>
            {magazine?.label &&
              <Input
                required
                value={magazine ? magazine?.label : 'Name no set'}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            }
          </FormGroup>
          <FormGroup>
            <Label for="closuredate">Closure Date</Label>
            <div className="d-flex justify-content-end">
              <DatePicker
                required
                className="calendar"
                minDate={new Date()}
                format="dd/MM/yyyy"
                value={closureTemp}
                onChange={(date) => setClosureTemp(date as Date)}
              />
              <div className="ml-2">
                <TimePicker value={closureTemp} onChange={setClosureTemp} />
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="finalclosuredate">Final Closure Date</Label>
            <div className="d-flex justify-content-end">
              <DatePicker
                required
                className="calendar"
                minDate={new Date()}
                format="dd/MM/yyyy"
                value={closureFinal}
                onChange={(date) => setClosureFinal(date as Date)}
              />
              <div className="ml-2">
                <TimePicker
                  value={closureFinal}
                  onChange={setClosureFinal}
                />
              </div>
            </div>
          </FormGroup>
          <div
            className={css({
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: theme.sizing.scale500,
            })}
          >
            <PrimaryButton type="submit">Update</PrimaryButton>
          </div>
        </Form>
      </Col>
    </Row>
  )
}
