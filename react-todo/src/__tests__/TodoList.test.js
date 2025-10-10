/* eslint-disable no-undef */
/* eslint-env jest */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

describe("TodoList Component", () => {

  // اختبار العرض الابتدائي
  test("يعرض المهام الابتدائية", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Todo App")).toBeInTheDocument();
  });

  // اختبار إضافة مهمة جديدة
  test("يمكن إضافة مهمة جديدة", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add new todo");
    fireEvent.change(input, { target: { value: "مهمة جديدة" } });
    fireEvent.submit(input.closest("form"));
    expect(screen.getByText("مهمة جديدة")).toBeInTheDocument();
  });

  // اختبار تبديل حالة المهمة
  test("يمكن تبديل حالة المهمة بين مكتملة وغير مكتملة", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  // اختبار حذف مهمة
  test("يمكن حذف مهمة", () => {
    render(<TodoList />);
    const todo = screen.getByText("Write Todo App");
    const deleteButton = todo.nextSibling;
    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });

});
