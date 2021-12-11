
const BookMark = ({status, id, onToggleBookMark}) => {
return (
    <i 
    className={`bi bi-bookmark-heart${status ? "-fill" : ""} fs-2 text-secondary `} 
    onClick = {() => onToggleBookMark(id)}
    ></i>
)
 }

export default BookMark;