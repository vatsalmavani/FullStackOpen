function Numbers({ searchTerm, persons }) {
  return (
    <div>
      {searchTerm !== ""
        ? persons
            .filter((obj) =>
              obj.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((obj) => (
              <div key={obj.id}>
                {obj.name}: {obj.number}
                <br />
              </div>
            ))
        : persons.map((obj) => (
            <div key={obj.id}>
              {obj.name}: {obj.number}
              <br />
            </div>
          ))}
    </div>
  );
}

export default Numbers;
