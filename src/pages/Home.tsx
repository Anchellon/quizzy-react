import React from "react";
import Button from "react-bootstrap/esm/Button";
import QuizzesTable from "../components/QuizzesTable";
export default function Home() {
  return (
    <div>
      List Of Quizzes
      <Button className="float-end" size="lg">
        Add Quiz +
      </Button>
      <QuizzesTable />
    </div>
  );
}
