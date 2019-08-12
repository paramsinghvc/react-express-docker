import React, { Component } from 'react';

class List extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    // this.getList();
    fetch('http://localhost:5000/api/token', {
      method: "POST",
      credentials: "include"
    })
      .then(res => res.text()).then(() => {
        setTimeout(() => {

          this.getList();
        }, 1000);
      })
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('http://localhost:5000/api/getList', {
      credentials: "include",
      method: "GET",
      headers: {
        // "Access-Control-Request-Headers": "content-type,x-token",
        // "Access-Control-Request-Method": "POST",
        // "Accept": "*/*",
        "x-my-token": "dfds",
        // "Access-Control-Request-Method": "POST"
      },
      cache: "no-cache"
    })

      .then(res => {
        console.log(res.headers.get('x-token'));
        return res.json()
      })
      .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>Client</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return (
                <div key={item}>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
            <div>
              <h2>No List Items Found</h2>
            </div>
          )
        }
      </div>
    );
  }
}

export default List;