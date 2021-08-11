import { Switch, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import People from './pages/People'
import Post from './pages/Post'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile/:id?" component={Profile} />
        <Route path="/people" component={People} />
        <Route path="/Login" component={Login} />
        <Route path="/post/:id" component={Post} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </>
  )
}

export default App
