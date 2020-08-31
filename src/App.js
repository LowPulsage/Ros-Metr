import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import { authorized } from 'modules/router/routes'
import { Layout } from 'components'
import React from 'react'

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Layout className='wrapper'>
        <Switch>
          {authorized.map(i => <Route exact key={i.path} path={i.path} component={i.component} />)}
          <Redirect to='/' />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
