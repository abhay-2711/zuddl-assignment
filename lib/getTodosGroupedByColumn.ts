import { boardDetails } from "./details";

export const getTodosGroupedByColumn = async () => {
    const data = boardDetails;
    const todos = data;
    
    const columns = todos.reduce((acc, todo) => {
        if(!acc.get(todo.status)){
            acc.set(todo.status, {
                id: todo.status,
                todos: []
            })
        }

        acc.get(todo.status)!.todos.push({
            id: todo.id,
            title: todo.title,
            status: todo.status,
            ...(todo.image!=="" && {image: todo.image})
        });

        return acc;

    }, new Map<TypedColumn, Column>)

    //if columns doesn't have todo, inprogress and done , add them with empty todos
    const columnTypes: TypedColumn[] = ["todo", "inprogress", "done"]; 
    for(const columnType of columnTypes){
        if(!columns.get(columnType)){
            columns.set(columnType, {
                id: columnType,
                todos: []
            });
        }
    }

    //sort columns by column type
    const sortedColumns = new Map(
        Array.from(columns.entries()).sort((a, b) => (
            columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
        ))
    );

    const board: Board = {
        columns: sortedColumns
    };

    return board;
}