

const Category = (props) => {
    const { content } = props
    console.log(content)
    return (
        <>
        <div>
             <p>{content}</p>
        </div>
       
        </>
    );
 };
 
 export default Category