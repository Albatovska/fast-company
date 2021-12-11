
const Quality = ({quality}) => {
  
   return (
      <span
            className={`badge bg-${quality.color} m-1`}
            key={quality._id}
            >
            {quality.name}
      </span>)
}

export default Quality;

