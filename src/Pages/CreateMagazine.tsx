import React, { useState } from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Datepicker } from 'baseui/datepicker'
import { TimePicker } from 'baseui/timepicker'
import { useStyletron } from 'baseui'
import PrimaryButton from '../components/shared/button/PrimaryBtn'

export const CreateMagazine = () => {
  const [name, setName] = useState('')
  const [css, theme] = useStyletron()
  const [closureTemp, setClosureTemp] = useState(new Date())
  const [closureFinal, setClosureFinal] = useState(new Date())
  
  const submidHandler = (e: any) => {
    e.preventDefault()
    console.log(
      name,
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
              <Datepicker
                mask="99/99/9999"
                formatString="dd/MM/yyyy"
                value={closureTemp}
                onChange={({ date }) =>
                  setClosureFinal(date as Date)
                }
                clearable
                peekNextMonth
              />

              <div className="ml-2">
              <TimePicker value={closureTemp} onChange={setClosureTemp} />
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="finalclosuredate">Final Closure Date</Label>
            <div className="d-flex">
              <Datepicker
                mask="99/99/9999"
                formatString="dd/MM/yyyy"
                value={closureFinal}
                onChange={({ date }) =>
                  setClosureFinal(date as Date)
                }
                clearable
                peekNextMonth
              />
              <div className="ml-2">
                <TimePicker value={closureFinal} onChange={setClosureFinal} />
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
