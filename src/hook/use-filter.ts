import { SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'

export interface IProps {
  props: {
    value: string | number
    onChange: (e: React.SyntheticEvent | SelectChangeEvent<any>) => void
  }
  reset: (value: string) => void
  setValue: (value: string) => void
}

export function useFilter(
  initialValue: any,
  number: boolean = false,
  validatorFunc?: (value: string) => boolean
) {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.SyntheticEvent | SelectChangeEvent<any>) => {
    const localValue = (e.target as HTMLInputElement).value

    if (number && validatorFunc) {
      if (validatorFunc(localValue)) {
        setValue(localValue)
      }
      return
    }
    setValue(localValue)
  }

  const props = { value, onChange }
  function reset(): any {
    setValue(initialValue)
  }

  return { props, reset, setValue }
}

export default useFilter
