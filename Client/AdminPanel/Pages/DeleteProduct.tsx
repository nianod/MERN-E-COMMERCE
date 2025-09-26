

export const DeleteProduct = ({confirmDelete, setconfirmDelete}) => {
  return (
    <div>
        {confirmDelete && (
            <div 
                className="inset-0 backdrop-blur-md z-50 fixed"
                onClick={() => setconfirmDelete(false)}
            ></div>
        )}
    </div>
  )
}
