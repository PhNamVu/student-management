import React, { useState } from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { DatePicker } from 'baseui/datepicker'
import { TimePicker } from 'baseui/timepicker'
import { useStyletron } from 'baseui'
import PrimaryButton from '../components/shared/button/PrimaryBtn'

export const CreateMagazine = () => {
  const [name, setName] = useState('')
  const [css, theme] = useStyletron()
  const [closureDate, setClosureDate] = useState([new Date()])
  const [finalClosureDate, setFinalClosureDate] = useState([new Date()])
  const [closureTime, setClosureTime] = useState(
    new Date('2021-02-16T08:28:24.591Z')
  )
  const [finalClosureTime, setFinalClosureTime] = useState(
    new Date('2021-02-16T08:28:24.591Z')
  )
  const submidHandler = (e: any) => {
    e.preventDefault()
    console.log(
      name,
      closureDate,
      finalClosureDate,
      closureTime,
      finalClosureTime
    )
  }

  return (
    <Row className="d-flex justify-content-center">
      <Col xl="4" lg="5" md="4" sm="10" xs="5">
        <h3> Create Magazine</h3>
        <Form onSubmit={submidHandler}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="closuredate">Closure Date</Label>
            <div className="d-flex">
              <DatePicker
                value={closureDate}
                onChange={({ date }) =>
                  setClosureDate(Array.isArray(date) ? date : [date])
                }
                clearable
                peekNextMonth
              />
              <div className="ml-2">
                <TimePicker value={closureTime} onChange={setClosureTime} />
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="finalclosuredate">Final Closure Date</Label>
            <div className="d-flex">
              <DatePicker
                value={finalClosureDate}
                onChange={({ date }) =>
                  setFinalClosureDate(Array.isArray(date) ? date : [date])
                }
                clearable
                peekNextMonth
              />
              <div className="ml-2">
                <TimePicker
                  value={finalClosureTime}
                  onChange={setFinalClosureTime}
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
            <PrimaryButton type="submit">Save</PrimaryButton>
          </div>
        </Form>
      </Col>
    </Row>
  )
}
export default CreateMagazine
