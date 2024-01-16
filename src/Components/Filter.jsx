import '../scss/filter.scss'

const Filter = ({name,handleChange}) => {
  return (
    <>
        
        <div className="containerFilter"
        onClick={()=>handleChange(name)}
        >
            {name}
        </div>
    </>
  )
}

export default Filter