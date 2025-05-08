import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();
  return (
    <div className="cardDetalis">
      <div className="detalisTitle">
      <div className="back-button" onClick={() => navigate("/")}>
          <ChevronLeftIcon />
        </div>
        <h1>Detalhes</h1>
      </div>
      <div className="container-detalis">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TaskPage;
