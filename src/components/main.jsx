import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import "./index.css"
import App from './App.jsx'

import AdicionarMembro from './AdicionarMembro.jsx'
import CriarTurma from './CriarTurma.jsx'
import MudarProfessor from './MudarPofessor.jsx'
import RemoverMembro from './RemoverMembro.jsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <AdicionarMembro />
    },
    {
        path: "/",
        element: <CriarTurma />
    },
    {
        path: "/",
        element: <MudarProfessor />
    },
    {
        path: "/",
        element: <RemoverMembro />
    },
    
])
//     <RouterProvider router={router} />
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    
    </StrictMode>,
)

