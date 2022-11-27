import { useState } from 'react'

export function useFilter(initialValue) {
  const [value, setValue] = useState(initialValue)
  const onChange = (e) => {
    setValue(e.target.value)
  }

  return [{ value, onChange }, () => setValue(initialValue)]
}

export default useFilter
