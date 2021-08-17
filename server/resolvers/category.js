

 const category = {
   animals: (parent, args, {  animals }) => {
     return animals.filter((animal) => {
       return animal.category === parent.id
     })
   },
 }

  module.exports = category;