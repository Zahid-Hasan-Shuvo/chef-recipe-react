import  { useEffect, useState } from 'react'
import CategiriCard from './CategiriCard';


const ChiefSection = () => {
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            
            .then(data => setCategories(data));
    }, [])


  return (
    <div>
        
       <h3 className='text-center'> All chef list</h3>
      <div className='grid grid-cols-3' >
      {
        categories.map(category=>
            <CategiriCard 
             key={category.Name }
              category={category} 
              >

            </CategiriCard>
        )
       } 
        
      </div>
        </div>
  )
}

export default ChiefSection