import {FC, ReactElement} from 'react'
import * as React from 'react'

const EditTest: FC<any> = (props: any): ReactElement => {

    console.log(props.testId)

    return (
        <div>
            {props.testId}
            <button onClick={props.clearTestId}>Close</button>
        </div>
    )
}

export default EditTest;
