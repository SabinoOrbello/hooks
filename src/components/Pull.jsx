import Button from "react-bootstrap/Button";

const Pull = (props) => {
  return (
    <>
      <div className="mb-2">
        <Button variant="primary" size="lg">
          Large button
        </Button>{" "}
        <Button variant="secondary" size="lg">
          Large button
        </Button>
      </div>
      <div>
        <Button variant="primary" size="sm">
          Small button
        </Button>{" "}
        <Button variant="secondary" size="sm">
          Small button
        </Button>
      </div>
    </>
  );
};

export default Pull;
