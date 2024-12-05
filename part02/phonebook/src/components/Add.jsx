export default function Add({
  handleChangeName,
  handleChangeNum,
  handleSubmit,
  newName,
  newNum,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleChangeName} />
      </div>
      <div>
        number: <input value={newNum} onChange={handleChangeNum} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
