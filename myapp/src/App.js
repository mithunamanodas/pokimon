import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [], 
      searchInput: '', 
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pokemons: data.results });
      })
  }

  render() {
    const { pokemons, searchInput } = this.state;

    
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div>
        <input className='search-box'
          type="text"
          placeholder="Search"
          onChange={(e) => this.setState({ searchInput: e.target.value })}
        />
        <div className="card-list">
        {filteredPokemons.map((pokemon,index) => (
          <div key={pokemon.name}>
            <div className='card-container'>
             <img 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index+1}.png`}
              />
              <p>{pokemon.name}</p>
            </div>
            
            
          </div>
        ))}
        </div>
      </div>
    )
  }
}

export default App