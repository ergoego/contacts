import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
state = {
  contacts: []
}
componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
}
removeContact = (contact) => {
  this.setState((state) => ({
    contacts: state.contacts.filter((c) => c.id !== contact.id)
  }))

  ContactsAPI.remove(contact)
}
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => ( // the 'exact' here means that the url has to be www.asdf.com/, whereas if we do not have the 'exact', www.asdf.com/about would also return true here. 
          <ListContacts 
            onDeleteContact={this.removeContact} 
            contacts={this.state.contacts} 
          />
        )}/>
        <Route path='/create' component ={CreateContact}/> 
      </div>
    ) // the Route path name must equal the state name. This is how a state change is linked to fetching a component(s). So we see here that onNavigate() sets the state to 'create', which then automatically is associated with the route /create, and that route fetches the component specified (in this case, the CreateContact component)
  }
}

export default App;
