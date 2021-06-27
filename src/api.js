export default {
    search: (name) =>
      fetch(`https://superheroapi.com/api/531800601584511/search/${name}`)
        .then((res) => res.json())
        .then(({ results }) => results),
    fetch: (id) =>
      fetch(`https://superheroapi.com/api/531800601584511/${id}`).then((res) => res.json()),
    
  };