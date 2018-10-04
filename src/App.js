import React, { Component } from 'react'
import styled from 'styled-components'
import Assessments from './assessments'

class App extends Component {
  state = {
    currentStudent: 12345,
    assessments: [],
    student: 12345,
    lesson: 126,
    score: 100
  }

  componentDidMount = () => {
    this.setState(state => {
      return {
        ...state,
        assessments: Assessments
      }
    })
  }


  addAssessment = (id, lessonId, value) => {
    let a = this.state.assessments
    console.log(id, lessonId, value)
    a.push({
      id,
      lesson: {
        id: lessonId,
        value
      }
    })

    console.log(a)
    this.setState(state => {
      return {
        ...state,
        assessments: a
      }
    })
  }

  filterAssessments = (id) => {
    return this.state.assessments.filter(a => a.id === id)
  }

  onInput = (e) => {
    e.persist()
    this.setState(state => {
      return {
        ...state,
        [e.target.name]: e.target.value
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    let { student, lesson, score } = this.state
    console.log(this.state)
    this.addAssessment(student, lesson, score)
  }

  render() {
    return (
      <Row>
        <Column>
          {this.filterAssessments(this.state.currentStudent).map(a => (
            <Assessment key={a.id + a.lesson.id}>
              <Student>Student: {a.id}</Student>
              <Lesson>Lesson {a.lesson.id}: {a.lesson.value}</Lesson>
            </Assessment>
          ))}
        </Column>
        <Column>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Student</label>
              <input
                name={'student'}
                value={this.state.student}
                onChange={this.onInput} />
            </div>
            <div>
              <label>Lesson</label>
              <input
                name={'lesson'}
                value={this.state.lesson}
                onChange={this.onInput} />
            </div>
            <div>
              <label>Score</label>
              <input
                name={'score'}
                value={this.state.score}
                onChange={this.onInput} />
            </div>
            <input type='submit' value='Add Value' />
          </form>
        </Column>
      </Row>
    )
  }
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Assessment = styled.div`
  margin-top: 10px;
  margin-left: 5px;
`

const Student = styled.div`
  font-size: 14px;
`

const Lesson = styled.div`
  font-size: 18px;
`

export default App
