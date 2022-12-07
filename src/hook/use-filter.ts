import { SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'

export function useFilter(initialValue: any) {
  const [value, setValue] = useState(initialValue)
  const onChange = (e: React.SyntheticEvent | SelectChangeEvent<any>) => {
    setValue((e.target as HTMLInputElement).value)
  }
  const props = { value, onChange }
  function reset(): any {
    setValue(initialValue)
  }
  return [props, reset]
}

export default useFilter
