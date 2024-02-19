import BlogList from "./BlogList.js"
import useFetch from "./useFetch.js";

const Home = () => {
  const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
  
  return ( 
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs!"}/>}
      {/* conditional templating:
      logical & evaluates the first condition first
      and since it is false, it doesn't check the second condition*/}
    </div>
   );
}
 
export default Home;