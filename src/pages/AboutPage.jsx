import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h2>AboutPage</h2>
        <p>
          This is a react project for leaving feedback for a product or a
          service
        </p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Go back to home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
