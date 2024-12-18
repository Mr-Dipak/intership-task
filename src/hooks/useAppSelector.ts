import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '@/store/store';

// Create a typed selector hook for use throughout the app
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;