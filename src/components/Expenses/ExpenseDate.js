import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  const expenseDate = date,
    month = expenseDate.toLocaleString("en-US", { month: "long" }),
    day = expenseDate.toLocaleString("en-US", { day: "2-digit" }),
    year = expenseDate.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
