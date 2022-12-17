import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";
import React from "react";
import {IQuestion} from "../store/tests-store";

interface Props {
    answers: IQuestion[]
    open: boolean
    onClose: () => void
}




function TestResult({ answers, open, onClose }: Props) {
    // const rightAnswersCount = answers.reduce(
    //     (acc, el) => acc + (el.answers[el.selected[0]].correct ? 1 : 0),
    //     0
    // )

    return (
        <div>
            {/*<Dialog*/}
            {/*    open={open}*/}
            {/*    onClose={() => onClose()}*/}
            {/*    aria-labelledby="responsive-dialog-title"*/}
            {/*>*/}
            {/*    <DialogTitle id="responsive-dialog-title">*/}
            {/*        Test result*/}
            {/*    </DialogTitle>*/}
            {/*    <DialogContent>*/}
            {/*        {answers.map((el, i)=>(<Typography variant="body1" key={i}>*/}
            {/*            {`${i+1}: Question: ${el.question}, answer: ${el.answers[el.selected[0]].text} - ${el.answers[el.selected[0]].correct?'correct':'incorrect'}`}*/}
            {/*        </Typography>))}*/}
            {/*    </DialogContent>*/}
            {/*    <DialogContent>*/}
            {/*        <Typography variant="body1">*/}
            {/*            {`Number of right answers: ${rightAnswersCount}`}*/}
            {/*        </Typography>*/}
            {/*    </DialogContent>*/}
            {/*    <DialogActions>*/}
            {/*        <Button autoFocus onClick={() => onClose()}>*/}
            {/*            Close*/}
            {/*        </Button>*/}
            {/*    </DialogActions>*/}
            {/*</Dialog>*/}


        </div>
    )
}

export default TestResult;
