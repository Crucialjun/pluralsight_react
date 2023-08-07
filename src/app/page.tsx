import Image from 'next/image'

export default function Home() {
  function ListItems(){
    const ints = [1,2,3,4,5,6,7,8,9,10]
    return (
      <>
     {
      ints.map(id =>{
        return(
          <li>{id}</li>
        )
      })
     }
      </>
      
    )
  }
  return (
    <ul>
      <ListItems/>
    </ul>
  )
}
