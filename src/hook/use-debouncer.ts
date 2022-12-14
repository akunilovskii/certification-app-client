import { useEffect, useState } from 'react'

export function useDebouncer(value: any, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const previousTimer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(previousTimer)
  }, [value])

  return debouncedValue
}
