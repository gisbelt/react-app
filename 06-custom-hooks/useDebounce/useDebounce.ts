// Debouncing is a technique used to avoid excessive execution of functions in response to frequently occurring events, 
// such as a status update in a component.
import { useEffect, useState } from 'react';

// <T> is to make the value type dynamic.
// Example: useDebounce<string>('Hello', 500)
export default function useDebounce<T> (value: T, delay: number = 500): T {
	// Create a state to store the debounced value
	const [debounced, setDebounced] = useState<T>(value)

	useEffect(() => {
	  // We update the debounced value after a while
	  const timer = setTimeout(() => {
		setDebounced(value)
	  }, delay)
	  
	  // Time is reset each time the value changes
	  return () => clearTimeout(timer)
	}, [value, delay])

	// return the value debounced
	return debounced; 	
}

// Usage example
// const [search, setSearched] = useState('')
// const debounced = useDebounce(search, 1000) // 1 segundo