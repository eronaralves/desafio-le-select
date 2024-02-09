import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth';

// Interface
interface AuthRoutesProps {
  children?: ReactNode;
}

export function PrivateRoute({ children }: AuthRoutesProps) {
  const { authenticated } = useAuth()
  
  return authenticated ? children : <Navigate to="/login" />
}