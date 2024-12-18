import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store/store';

// Create a typed dispatch hook for use throughout the app
export const useAppDispatch = () => useDispatch<AppDispatch>();