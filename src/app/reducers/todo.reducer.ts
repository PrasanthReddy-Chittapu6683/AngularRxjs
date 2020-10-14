import { TodoActionTypes } from '../shared/todo-action-types.enum'
import { ActionParent } from '../actions/Todo.actions'
import { Todo } from '../models/Todo'
import { reduceState } from '@ngrx/store'


export const initialState: Todo[] = [
    { title: 'Todo 1' },
    { title: 'Todo 2' },
    { title: 'Todo 3' },
    { title: 'Todo 4' },
]


export function TodoReducer(state = initialState, action: ActionParent) {
    debugger;
    switch (action.type) {
        case TodoActionTypes.Add:
            return [...state, action.payload]
        case TodoActionTypes.Remove:

            return [

                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ];// Here action.payload having index value of the list which we deleting.

        default:
            return state;

    }
}
