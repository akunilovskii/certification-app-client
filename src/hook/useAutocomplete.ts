import { createFilterOptions, SelectChangeEvent } from '@mui/material'
import { SyntheticEvent, useState } from 'react'
import { itemType } from '../pages/Tests/components/TestFields'

export function useAutocomplete(initialValue: any) {
  const [value, setValue] = useState(initialValue)

  const onChange = (
    e: SyntheticEvent | SelectChangeEvent<any>,
    newValue: any
  ) => {
    if (typeof newValue === 'string') {
      setValue({
        value: newValue,
      })
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      setValue({
        value: newValue.inputValue,
      })
    } else {
      setValue(newValue)
    }
  }

  const getOptionLabel = (option: itemType | string) => {
    // Value selected with enter, right from the input
    if (typeof option === 'string') {
      return option
    }
    // Add "xxx" option created dynamically
    if (option.inputValue) {
      return option.inputValue
    }
    // Regular option
    return option.value
  }
  const filter = createFilterOptions<itemType | string>()
  const filterOptions = (options: (itemType | string)[], params: any) => {
    const filtered = filter(options, params)
    const { inputValue } = params
    // Suggest the creation of a new value
    //@ts-ignore
    const isExisting = options.some((option) => inputValue === option.value)
    if (inputValue !== '' && !isExisting) {
      filtered.push({
        inputValue,
        value: `Add "${inputValue}"`,
      })
    }
    return filtered
  }

  const props = { value, onChange, getOptionLabel, filterOptions }
  function reset(): any {
    setValue(initialValue)
  }

  return { props, reset, setValue }
}

export default useAutocomplete
