import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './pages/Home'

function App() {
	return (
		<div className="App">
			<AnimatePresence exitBeforeEnter>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</Router>
			</AnimatePresence>
		</div>
	)
}

export default App
