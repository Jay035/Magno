import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center mt-10 pb-20 px-6 md:px-12">
      <p className="text-4xl capitalize mb-8 font-medium">NotFound</p>
      <Link to="/">GO HOME</Link>
    </div>
  );
}
