"use client"

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useModalStore } from '@/store/ModalStore';
import { useBoardStore } from '@/store/BoardStore';

const  Modal = () => {

    const [isOpen, closeModal] = useModalStore((state) => [
        state.isOpen, 
        state.closeModal
    ]);

    const [addTask, newTaskInput, setNewTaskInput] = useBoardStore((state) => [
        state.addTask,
        state.newTaskInput,
        state.setNewTaskInput
    ]);

    const [newTaskType, setNewTaskType] = useBoardStore((state) => [
        state.newTaskType,
        state.setNewTaskType
    ]);

    const generateUniqueId = () => {
        return Math.random().toString(36).substr(2, 9);
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newTaskInput) return;
        const todo = {
            id: generateUniqueId(), 
            title: newTaskInput,
            status: newTaskType,
        };
        console.log(todo);
        addTask(todo, newTaskType);
        setNewTaskInput('');
        closeModal();
    }

  return (
    // Use the `Transition` component at the root level
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="form" onSubmit={handleSubmit} className="relative z-10" onClose={closeModal}>
      <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
    </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 pb-2">
                    Add a Task
                </Dialog.Title>
                <div className="mt-2">
                    <input 
                        type="text" 
                        value={newTaskInput}
                        onChange={(e) => setNewTaskInput(e.target.value)}
                        placeholder="Enter a task here..." 
                        className="w-full border border-gray-300 rounded-md outline-none p-5" 
                    />
                    <button
                    type="submit"
                    disabled={!newTaskInput}
                    className='inline-flex justify-center w-full mt-4 rounded-md border border-transparent bg-blue-100 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-offset-2 focus-visible:ring-2 px-4 py-2 disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed focus-visible:ring-blue-500 sm:text-sm p-4'
                    >Add a task</button>
                </div>
            </Dialog.Panel>
        </Transition.Child>

        </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal