export const ChangeNameComponent = ({ name, changeName }) => {
  return (
    <button onClick={changeName}>Change Name {name}</button>

  )
}