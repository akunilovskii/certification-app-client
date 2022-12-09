import { FC, ReactElement } from 'react'
import * as React from 'react'
import QuestionsForm from './QuestionsForm'

const EditTest: FC<any> = ({ closeEditForm, test }): ReactElement => {
  console.log(test)
  return (
    <>
      <QuestionsForm questions={test.questions} />
      {/* {test._id} */}
      <button onClick={closeEditForm}>Close</button>
    </>
  )
}

export default EditTest
