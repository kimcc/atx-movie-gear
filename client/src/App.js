import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Cart from "./components/Cart";
import Footer from './components/Footer';
import { StoreProvider } from "./utils/GlobalState";
import OrderHistory from './pages/OrderHistory';
import Success from './pages/Success';
import Cameras from './pages/Cameras';

let httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
});

if(process.env.NODE_ENV === 'production'){
  httpLink = createHttpLink({
    uri: '/graphql'
  });
}

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Cart />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/Cameras" component={Cameras} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/Cameras/:id" component={Detail} />
              <Route exact path="/success" component={Success} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
