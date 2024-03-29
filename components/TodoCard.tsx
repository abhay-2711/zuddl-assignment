"use client"

import React from 'react'
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from '@hello-pangea/dnd'

type Props = {
    todo: Todo,
    index: number,
    id: TypedColumn,
    innerRef: (element: HTMLElement | null) => void,
    draggableProps: DraggableProvidedDraggableProps,
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined,
}

const TodoCard = ({
    todo,
    index,
    id,
    innerRef,
    draggableProps,
    dragHandleProps
}: Props) => {
  return (
    <div
        className='bg-white rounded-md space-y-2 drop-shadow-md'
      {...draggableProps} {...dragHandleProps} ref={innerRef}
    >
        <div className='flex justify-between items-center p-5'>
        <p>{todo.title}</p>
        </div>
    </div>
  )
}

export default TodoCard
