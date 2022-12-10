import {FC, ReactElement, useContext} from 'react'
import * as React from 'react'
import QuestionsForm from '../../../components/QuestionsForm'
import TestsFilterFields from "./TestsFilterFields";
import DataContext from "../../../context/data-context";

const EditTest: FC<any> = ({ editMode, testsList, actionHandler, setFilterTestsConditions }): ReactElement => {

  return (
    <>
        <TestsFilterFields
            editMode={editMode}
            testsList={testsList}
            setFilterTestsConditions={setFilterTestsConditions}
        />
      <button onClick={()=>actionHandler("close")}>Close</button>
    </>
  )
}

export default EditTest
