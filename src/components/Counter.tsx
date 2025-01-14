import { RootState } from '../redux/types'
import { decremet, increment, reset } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap'

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="col-6 bg-light p-5 my-5 border rounded">
          <h1 className="text-center mb-4">Counter: {count}</h1>

          <ButtonGroup className="col-12">
            <Button variant="secondary" onClick={() => dispatch(decremet())}>
              Decrement
            </Button>
            <Button variant="primary" onClick={() => dispatch(reset())}>
              Reset
            </Button>
            <Button variant="secondary" onClick={() => dispatch(increment())}>
              Increment
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Counter
