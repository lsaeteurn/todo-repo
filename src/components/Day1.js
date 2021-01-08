import logo from '../logo.svg';
import React from 'react'

function Day1() {
  const [name, setName] = React.useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Who run the world?
        </a>
        <input
          placeholder="Name please..."
          value={ name }
          onChange={ e => setName(e.target.value) }
        />
        {
          name && name === 'leo' ?
          <div>hi leo</div> :
          <div>welp no name
            .+
          </div>
        }
      </header>
    </div>
  );
}
export default Day1;