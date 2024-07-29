const data = [
    {
      "name": "Harry Potter",
      "city": "London"
    },
    {
      "name": "Don Quixote",
      "city": "Madrid"
    },
    {
      "name": "Joan of Arc",
      "city": "Paris"
    },
    {
      "name": "Rosa Park",
      "city": "Alabama"
    }
  ]

// using reduce
 const output = data.map((data) =>{
    return data.name + " " +data.city;
 })

 console.log (output.join(" , "));
