import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"
import { useQuery, gql } from '@apollo/client'

const ANIMALS_QUERY = gql`
  {

   animals{
       id
       image
       title
       price
       slug

   }
  }
`

function LandingPage() {
   
  const { loading, error, data } = useQuery(ANIMALS_QUERY);

     if (loading) {
       <div>Loading...</div>
     }

     if (error) {
       <div>some Error</div>
     }
     
     console.log(data.animals);
    return (
      <div>
        <MainHero />
        <CategoryDisplay />
        <CardDisplay animals={data.animals} />
      </div>
    )
}

export default LandingPage
