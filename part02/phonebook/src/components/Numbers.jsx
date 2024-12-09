function Numbers({ searchTerm, persons, handleDelete }) {
  const peopleToShow =
    searchTerm !== ""
      ? persons.filter((obj) =>
          obj.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : persons;
  return (
    <>
      {peopleToShow.map((obj) => (
        <div key={obj.id}>
          {obj.name}: {obj.number}
          <button onClick={() => handleDelete(obj)}>delete</button>
          <br />
        </div>
      ))}
    </>
  );
}

export default Numbers;
