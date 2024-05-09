import { createPortal } from "react-dom";
import ExpenseForm from "./ExpenseForm";

const ExpenseFormModal = () => {
  const mountedElement = document.getElementById("incomeModal");

  return createPortal(<ExpenseForm />, mountedElement);
};

export default ExpenseFormModal;
