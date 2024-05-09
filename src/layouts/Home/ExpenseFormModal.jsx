import { createPortal } from "react-dom";
import ExpenseForm from "./ExpenseForm";
import IncomeForm from "./IncomeFrom";

const ExpenseFormModal = () => {
  const mountedElement = document.getElementById("incomeModal");

  return createPortal(<IncomeForm />, mountedElement);
};

export default ExpenseFormModal;
