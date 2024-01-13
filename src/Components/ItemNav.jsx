

const ItemNav = ({name,active,setActive}) => {
  return (
    <>
        <span className={`ItemNav ${active?'active':''}`}
        onClick={()=>setActive(true)}
        >
      
            {name}
        </span>
    </>
  )
}

export default ItemNav