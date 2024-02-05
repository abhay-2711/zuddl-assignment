import { getTodosGroupedByColumn } from '@/lib/getTodosGroupedByColumn';
import { create } from 'zustand'

interface BoardState {
    board: Board,
    getBoard: () => void,
    setBoardState: (board: Board) => void,
    newTaskInput: string,
    setNewTaskInput: (input: string) => void,
    newTaskType: TypedColumn,
    setNewTaskType: (columnId: TypedColumn) => void,
    addTask: (todo:Todo, columnId:TypedColumn) => void,
}

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  getBoard: async() => {
    const board = await getTodosGroupedByColumn();
    set({ board });
  },  
  setBoardState: (board) => set({ board }),
  newTaskInput: "",
  setNewTaskInput: (input: string) => set({ newTaskInput: input }),
  newTaskType: "todo",
  setNewTaskType: (columnId: TypedColumn) => set({ newTaskType: columnId }),
  addTask: (todo: Todo, columnId: TypedColumn) => {
    set((state) => {
      const updatedColumn = state.board.columns.get(columnId);
      if (updatedColumn) {
        updatedColumn.todos.push(todo);
        const updatedColumns = new Map(state.board.columns);
        updatedColumns.set(columnId, updatedColumn);
        const updatedBoard = { ...state.board, columns: updatedColumns };
        return { board: updatedBoard };
      }
      return state;
    });
  } 
}))