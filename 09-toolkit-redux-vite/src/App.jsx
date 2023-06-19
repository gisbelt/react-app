import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const { counter } = useSelector((state) => state.counter); // select something from store
	const dispatch = useDispatch() // dispatch actions

	const byAmount = () => {
		dispatch(incrementByAmount(2))
	}

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Count is {counter}</h1>
			<div className="card">
				<button onClick={() => dispatch(increment())}>
					Increment
				</button>

				<button onClick={() => dispatch(decrement())}>
					Decrement
				</button>

				<button onClick={byAmount}>
					Increment by 2
				</button>
			</div>
		</>
	)
}

export default App
