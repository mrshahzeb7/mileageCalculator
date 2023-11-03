import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from './types/reduxTypes';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// so that we don't have to give type to selector
