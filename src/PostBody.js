import "./App.css";

function PostBody(props) {
  return (
    <div className="bg-white  max-w-md  rounded-b-sm ml-5 dark:bg-darkM-1 ">
      <div className="ml-2 ">
        <p className="text-gray-900 text-base dark:text-white">{props.testo}</p>
      </div>
    </div>
  );
}
export default PostBody;