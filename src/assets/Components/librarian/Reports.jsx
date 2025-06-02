import React from "react";
import BookIssuedOverTime from "../Reports/BookIssuedOverTime";
import MostBorrowedBook from "../Reports/MostBorrowedBook";
import GenreDistributionChart from "../Reports/GenreDistributionChart";
import PenaltyCollectionChart from "../Reports/PenaltyCollectionChart";

function Reports() {
  return (
    <div className="w-100">
      <div className="d-flex w-100 justify-content-around">
        <BookIssuedOverTime />
        <MostBorrowedBook />
      </div>
      <div className="d-flex w-100 justify-content-around">
        <GenreDistributionChart />
        <PenaltyCollectionChart />
      </div>
    </div>
  );
}

export default Reports;
