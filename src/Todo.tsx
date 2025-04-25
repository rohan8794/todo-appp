import React from 'react'
    import { Check, X } from 'lucide-react'

    type TodoType = {
      id: string
      text: string
      completed: boolean
      createdAt: Date
    }

    interface TodoProps extends React.HTMLAttributes<HTMLDivElement> {
      todo: TodoType
      onToggle: (id: string) => void
      onDelete: (id: string) => void
    }

    const Todo = ({ todo, onToggle, onDelete, ...props }: TodoProps) => {
      return (
        <div {...props} className="group relative mb-4 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => onToggle(todo.id)}
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors
                  ${todo.completed ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {todo.completed && (
                  <Check className="w-3 h-3" />
                )}
              </button>
              <span className={`text-sm ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => onDelete(todo.id)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )
    }

    export default Todo
