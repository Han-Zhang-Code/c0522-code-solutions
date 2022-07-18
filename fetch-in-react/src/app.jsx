import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()).then(data => {
        this.setState({ users: data, isLoading: false });
      });
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}
// function App() {
//   const [user, setUser] = useState([]);
//   const [loading, setloading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch(
//         'https://jsonplaceholder.typicode.com/users',
//       );
//       const json = await res.json();
//       setData(json.hits);
//     };
//     fetchData();
//   }, [setData]);

//   return (loading
//     ? <p>Loading...</p>
//     : <UserList users={user} />);
// }

// }

export default App;
