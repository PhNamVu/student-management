//hasura use tUTC format for timestamp => return utc string then query


import React, { useState, useEffect } from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { makeStyles, createStyles, Backdrop, CircularProgress, Theme} from '@material-ui/core';
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

const loadingStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
        },
    }),
);

export const EditMagazinePage = () => {
  const { id } = useParams()
  const customStyle = loadingStyles()
  const [css, theme] = useStyletron()
  const [name, setName] = useState('')
  const [closureTemp, setClosureTemp] = useState('')
  const [closureFinal, setClosureFinal] = useState('')

  const { data, loading, error } = useGetMagazineQuery({
    fetchPolicy: 'network-only',
    variables: {
      where: {
        id: { _eq: id },
      },
    },
  })
  const magazine = data && data?.magazines[0]
  
  useEffect(() => {
    if (magazine?.label) setName(magazine?.label)
    if (magazine?.closureTemp) setClosureTemp(magazine?.closureTemp)
    if (magazine?.closureFinal) setClosureFinal(magazine?.closureFinal)
  }, [magazine])
  const [editMagazineMutation] = useEditMagazineMutation({
    variables: {
       id: id,
       object: {
        label: name,
        closureTemp,
        closureFinal,
      },
    },
  })
  if (error) return <div>Error at Edit Magazine component {error}</div>
  if (loading) return (
    <Backdrop className={customStyle.backdrop} open={loading}>
        <CircularProgress color="inherit"/>
    </Backdrop>
  )

  const submitHandler = async (e: any) => {
    e.preventDefault()
    try {
      await editMagazineMutation()
      toaster.positive('Submit success', {
        autoHideDuration: 3000,
      })
    } catch (error) {
      console.log(error);
      toaster.negative('Submit Fail', {
        autoHideDuration: 3000,
      })
    }
    
  }

  if(moment(closureTemp).isSameOrAfter(closureFinal)) {
    setClosureFinal(moment(closureTemp).add(1, 'minutes').format())
  }
  return (
    <Row className="d-flex justify-content-center">
      <Col xl="4" lg="5" md="4" sm="10" xs="5">
        <h2 className="mb-4 mt-4" style={{fontWeight:'bold'}}> Edit Magazine</h2>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
                required
                value={name ? name : 'null'}
                name="name"
                onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="closuredate">Closure Date</Label>
            
              {(closureTemp !== '') ? <div className="d-flex justify-content-end">
                  <DatePicker
                  required
                  className="calendar"
                  minDate={moment(closureTemp).toDate()}
                  format="dd/MM/yyyy"
                  value={moment(closureTemp).toDate()}
                  onChange={(date) => setClosureTemp(moment(date.toString()).utc().format())}
                />
                  <div className="ml-2">
                    <TimePicker 
                    value={moment(closureTemp).toDate()} 
                    onChange={(date) => setClosureTemp(moment(date.toString()).utc().format())} />
                  </div>
                </div>
              : null}
          </FormGroup>
          <FormGroup>
            <Label for="finalclosuredate">Final Closure Date</Label>
            {(closureFinal !== '') ? <div className="d-flex justify-content-end">
              <DatePicker
                required
                className="calendar"
                minDate={moment(closureTemp).toDate()}
                format="dd/MM/yyyy"
                value={moment(closureFinal).toDate()}
                onChange={(date) => setClosureFinal(moment(date.toString()).utc().format())}
              />
              <div className="ml-2">
                <TimePicker
                  value={moment(closureFinal).toDate()}
                  onChange={(date) => setClosureFinal(moment(date.toString()).utc().format())}
                />
              </div>
            </div>: null}
          </FormGroup>
          <div className='d-flex justify-content-center'>
            <PrimaryButton type="submit">Update</PrimaryButton>
          </div>
        </Form>
      </Col>
    </Row>
  )
}
