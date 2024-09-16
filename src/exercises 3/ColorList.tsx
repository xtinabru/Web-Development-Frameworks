function ColorList(){
  const colors = ['Red', 'Green', 'Blue'];

  return (
    <div>
      <ul>
        {colors.map((color, index) =>(
          <li> { color }</li>
        ))}
      </ul>
    </div>
  )
}

export default ColorList;