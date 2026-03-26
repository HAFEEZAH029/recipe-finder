import { Link } from "react-router-dom";

type Prop = {
    title: string
}

const Button = ({title}:Prop) => {
  return (
    <button
    className="bg-evergreen-900 font-semibold text-xl text-white border-none outline-none hover:text-orange-500 px-5 md:px-6 py-2 md:py-2.5 rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
    >
        <Link to='/recipes'>{title}</Link>
    </button>
  )
}

export default Button;
