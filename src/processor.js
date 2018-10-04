export const addAssessment = (id, lessonId, value) => {
  let a = this.state.assessments
  return a.push({
    id,
    lesson: {
      id: lessonId,
      value
    }
  })
}
