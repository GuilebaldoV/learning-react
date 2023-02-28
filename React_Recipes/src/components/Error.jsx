const Error = ({props}) => {
    
    return (
        <>
        <div className="error">
            <p>Error Status:{props.status}</p>
            <p>Error:{props.statusText}</p>
        </div>
        </>
      );
}
 
export default Error;