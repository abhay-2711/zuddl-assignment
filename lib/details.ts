type TypedColumn = "todo" | "inprogress" | "done";

export const boardDetails: { id: string; title: string; status: TypedColumn; image: string }[] = [
    {
        id: "1",
        title: "take the dogs out for a walk",
        status: "todo",
        image: "",
    },
    {
        id: "2",
        title: "Board Component",
        status: "inprogress",
        image: "",
    },
    {
        id: "3",
        title: "Assignment task",
        status: "inprogress",
        image: "",
    }
];