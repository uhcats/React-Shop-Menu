class App extends React.Component {

  state = {
    items: [
      {id: 1, name: "herbata", active: false},
      {id: 2, name: "ziemniaki", active: false},
      {id: 3, name: "kasza", active: false},
      {id: 4, name: "ryż", active: false},
      {id: 5, name: "woda", active: false},
      {id: 6, name: "chleb", active: false},
    ]
  }

  handleChangeStatus = (id) => {
    console.log(id);
    
    const items = this.state.items.map(item => {
      if(id === item.id){
        item.active = !item.active;
      }
      return item;
    })

    this.setState({
      items,
    })

  }

  render() {
    return (
      <>
      <Header items = {this.state.items}/>    
      <ListItems items = {this.state.items} 
      changeStatus = {this.handleChangeStatus}/>
      </>
    
    );
  }
}

