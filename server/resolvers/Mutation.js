const { v4 } = require('uuid')

const Mutation = {
    addAnimal:(parent,args,
        {
      image,
      title,
      rating,
      price,
      description,
      stock,
      slug,
      onSale,
      category,
    },{animals}) => {
     
    let newAnimal = {
      id: v4(),
      image,
      title,
      rating,
      price,
      description,
      stock,
      slug,
      onSale,
      category,
    }
    
    animals.push(newAnimal);

    },

    removeAnimal: (parent,{id},{animals}) => {
        const index = animals.findIndex((animal) => {
            return animal.id === id;
        })

        animals.slice(index,1);
        return true;
}
}

module.exports = Mutation;