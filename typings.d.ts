interface Board {
    columns: Map<TypedColumn, Column>
}

type TypedColumn = 'todo' | 'inprogress' | 'done';

interface Column {
    id: TypedColumn,
    todos: Todo[],
}

interface Todo {
    id: string,
    title: string,
    status: TypedColumn,
    image?: string,
}