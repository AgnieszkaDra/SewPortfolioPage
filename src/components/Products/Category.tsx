interface CategoryProps {
    content: string;
}
const Category: React.FC<CategoryProps> = (props)  => {
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