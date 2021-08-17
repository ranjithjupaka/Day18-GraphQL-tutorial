

const animal = {
  category: (parent, args, {  categories }) => {
    return categories.find((category) => category.id === parent.category)
  },
}

module.exports = animal
