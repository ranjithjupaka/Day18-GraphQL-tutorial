
  
  const Query = {
    mainCards: (parent, args, { mainCards }) => mainCards,
    animals: (parent, args, { animals }) => animals,
    animal: (parent, args, { animals }) => {
      let animalToFind = animals.find((animal) => {
        return animal.slug === args.slug
      })

      return animalToFind
    },
    categories: (parent, args, { categories }) => categories,
    category: (parent, args, { categories }) => {
      let catogoryToFind = categories.find((category) => {
        return category.slug === args.slug
      })

      return catogoryToFind
    },
  }

  module.exports = Query;