import './Burger.css'
export const makeBurger = (ingredients) => {
  let burger = [];

  for (let i = 0; i < ingredients.lettuce; i++) {
    burger.push(<div key={burger.length} className="lettuce"></div>);
  }
  for (let i = 0; i < ingredients.bacon; i++) {
    burger.push(<div key={burger.length} className="bacon"></div>);
  }
  for (let i = 0; i < ingredients.cheese; i++) {
    burger.push(<div key={burger.length} className="cheese"></div>);
  }
  for (let i = 0; i < ingredients.meat; i++) {
    burger.push(<div key={burger.length} className="meat"></div>);
  }
  if (burger.length === 0) {
    return <h2>Add ingredients here</h2>;
  }
  return burger;
};
