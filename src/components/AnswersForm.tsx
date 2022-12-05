import React, {FC, ReactElement} from "react";
import {TextField, Checkbox} from "@mui/material";
import useFilter from "../hook/use-filter";

const AnswersForm: FC<any> = ({answers, setAnswers}): ReactElement => {
    const [textProps, resetText] = useFilter('')
    const [correctProps, resetCorrect] = useFilter(false);
    const addAnswer = () => {
        //@ts-ignore
        setAnswers((prev:[]) => [...prev, {text: textProps.value, correct: correctProps.value}]);

        // @ts-ignore
        resetText();
        // @ts-ignore
        resetCorrect();
    }

    // @ts-ignore
    return (
        <div>
            <div>
            <TextField
                label="Answer"
                type="text"
                // fullWidth
                size="small"
                {...textProps}
            />
                <button onClick={addAnswer}>add</button>
            </div>
            <ul>
                {answers.map((answer: any, index: number) => <li key={answer._id + index}>
                    {answer.text}
                    <Checkbox
                        {...correctProps}
                        inputProps={{ 'aria-label': 'controlled' }}
                        // @ts-ignore
                        label={correctProps.value?'Correct':'Incorrect'}
                    />

                    {answer.correct ? 'correct' : 'incorrect'}
                </li>)}
            </ul>
        </div>
    )
}

export default AnswersForm;
