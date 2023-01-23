import './Burger.css'
export const makeBurger = (ingredients) => {
  const burger = []

  for (let i = 0; i < ingredients.lettuce; i++) {
    burger.push(<div key={burger.length} className='lettuce' />)
  }
  for (let i = 0; i < ingredients.bacon; i++) {
    burger.push(<div key={burger.length} className='bacon' />)
  }
  for (let i = 0; i < ingredients.cheese; i++) {
    burger.push(<div key={burger.length} className='cheese' />)
  }
  for (let i = 0; i < ingredients.meat; i++) {
    burger.push(<div key={burger.length} className='meat' />)
  }
  if (burger.length === 0) {
    return <h2>Add ingredients here</h2>
  }
  return burger
}
