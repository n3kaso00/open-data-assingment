


import React, { useState, useEffect} from 'react';


function App() {
  const [cocktail, setCocktail] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    fetch('')
    .then(response => response.jason())
    .then(data => setCocktail(data.drinks[0]));
  }, []);

const handleSearch = () => {
  fetch(``)
  .then(response => response.json())
  .then(data => setSearchResult(data.drinks));
};

return (
  <div className='App'>
    <h1>Cocktail Finder</h1>

  {cocktail && (
    <div>
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="200" />
      <p>{cocktail.strInstructions}</p>
    </div>
  )}


  <div>
    <input
    type='text'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder='Searc for a cocktail'
    ></input>
    <button onClick={handleSearch}></button>
  </div>

  {searchResult && (
    <div>
      <h2>Search Results</h2>
      {searchResult.map((drink) => (
        <div key={drink.idDrink}>
          <h3>{drink.strDrink}</h3>
          <img src={drink.strDrinkThumb} alt={drink.strdDrink} width="100" />
          <p>{drink.strInstructions}</p>
          </div>
      ))}
    </div>
  )}

  </div>
);

}

export default App;