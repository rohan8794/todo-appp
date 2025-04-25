import React from 'react'
    import { Todo } from './Todo'
    import { Sun, Moon, Check, X } from 'lucide-react'

    function App() {
      const [darkMode, setDarkMode] = React.useState(false)

      return (
        <div className={`min-h-screen bg-${darkMode ? 'gray-900' : 'gray-100'} text-${darkMode ? 'white' : 'gray-900'}`} data-theme={darkMode ? 'dark' : 'light'}>
          <div className="max-w-md mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8 flex items-center justify-between">
              <span>Todo</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {darkMode ? (
                  <Sun className="w-6 h-6" />
                ) : (
                  <Moon className="w-6 h-6" />
                )}
              </button>
            </h1>
            
            <Todo />
          </div>
        </div>
      )
    }

    export default App
