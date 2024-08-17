import { Link } from "react-router-dom";

interface MyProjectProps {
  title: string;
  link: string;
}

const project = ({ title, link }: MyProjectProps) => {
  return (
    <Link
      to={link}
      className="bg-slate-200 w-60 h-16 flex justify-center items-center rounded-xl mb-32"
    >
      <p className="text-center font-semibold">{title}</p>
    </Link>
  );
};

export default project;
