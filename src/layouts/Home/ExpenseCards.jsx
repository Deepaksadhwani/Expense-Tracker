import { Card, Row } from "antd";
import React from "react";

const ExpenseCards = ({ onToggleIncomeModal }) => {
  return (
    <div className="py-10">
      <Row className="mx-[2rem]  flex  flex-wrap items-center justify-evenly">
        <Card
          bordered={true}
          title="Current Balance"
          className="min-w-[400px] space-y-2 py-2 shadow-xl"
        >
          <p className="py-2">$0</p>
          <button className="b-btn w-full ">Reset Balance</button>
        </Card>
        <Card
          title="Total Income"
          className="min-w-[400px] space-y-2 py-2 shadow-xl"
        >
          <p className="py-2">$0</p>
          <button className="b-btn w-full">Add Income</button>
        </Card>
        <Card
          title="Total Expenses"
          className="min-w-[400px] space-y-2 py-2 shadow-xl"
        >
          <p className="py-2">$0</p>
          <button onClick={()=> onToggleIncomeModal(true)} className="b-btn w-full">
            Add Expense
          </button>
        </Card>
      </Row>
    </div>
  );
};

export default ExpenseCards;
