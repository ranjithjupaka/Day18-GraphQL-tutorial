import React, { useState } from 'react'
import "./CategoryDisplay.css"
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import animals from '../../assets/images'
import { useQuery, gql } from '@apollo/client'

const CATEGORIES_QUERY = gql`
  {
    category {
        id
        category
        image
        slug
    }
  }
`




function CategoryDisplay() {
  const { loading, error, data } = useQuery(CATEGORIES_QUERY)
  console.log(data);

  if (loading) {
    <div>Loading...</div>
  }

  if (error) {
    <div>some Error</div>
  }

  return (
    <div className='CategoryDisplay'>
      <Container className='CategoryDisplay-container'>
        {[].map((category) => {
          return (
            <Link
              to={`/products/${category.slug}`}
              className='CategoryDisplay-card-container'
            >
              <div className='CategoryDisplay-card'>
                <img src={animals[category.image]} />
              </div>
              <h3>{category.category}</h3>
            </Link>
          )
        })}
      </Container>
    </div>
  )
}

export default CategoryDisplay
