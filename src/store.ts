import {
    ADD_ITEM,
    TOGGLE_ITEM,
    DELETE_ITEM,
    UPDATE_ITEM,
    UpdateItemPayload,
    ItemIdPayload,
    TOGGLE_EDIT_MODE
} from "./actions"
import uuid from "uuid"
import { handleActions, Action } from "redux-actions"

export type Item = {
    id: string
    checked: boolean
    value: string
    editMode: boolean
}

export type AppState = {
    items: Item[]
}

const initialState: AppState = {
    items: []
}

const updateById = (items: Item[], id: string, update: (item: Item) => Partial<Item>) =>
    items.map(item => {
        if (item.id !== id) return item
        console.log(
            update(item)
        )
        return {
            ...item,
            ...update(item)
        }
    })

export default handleActions<any, any>(
    {
        [ADD_ITEM]: (state, action: Action<string>) => ({
            items: state.items.concat({
                id: uuid.v4(),
                checked: false,
                value: action.payload || ""
            })
        }),
        [UPDATE_ITEM]: (state, { payload }: Action<UpdateItemPayload>) => ({
            items: updateById(state.items, payload!.id, item => ({
                value: payload!.value
            }))
        }),
        [DELETE_ITEM]: (state, action: Action<ItemIdPayload>) => ({
            items: state.items.filter(item => item.id !== action.payload!.id)
        }),
        [TOGGLE_ITEM]: (state, { payload }: Action<ItemIdPayload>) => ({
            items: updateById(state.items, payload!.id, item => ({
                checked: !item.checked
            }))
        }),
        [TOGGLE_EDIT_MODE]: (state, { payload }: Action<ItemIdPayload>) => ({
            items: updateById(state.items, payload!.id, item => ({
                editMode: !item.editMode
            }))
        })
    },
    initialState
)
