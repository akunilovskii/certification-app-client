import { useState } from 'react'

export function useFilter(initialValue) {
  const [value, setValue] = useState(initialValue)

  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ]
}

export default useFilter
