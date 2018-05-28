import { createAction } from "redux-actions";
import { create } from "domain";

export const ADD_ITEM = "ITEM.ADD";
export const UPDATE_ITEM = "ITEM.UPDATE";
export const DELETE_ITEM = "ITEM.DELETE";
export const TOGGLE_ITEM = "ITEM.TOGGLE";
export const TOGGLE_EDIT_MODE = "ITEM.TOGGLE_EDIT";

export type UpdateItemPayload = {
    id: string
    value: string
}

export type ItemIdPayload = {
    id: string
}

export const addItem = createAction<string>(ADD_ITEM);
export const updateItem = createAction<UpdateItemPayload>(UPDATE_ITEM);
export const deleteItem = createAction<ItemIdPayload>(DELETE_ITEM);
export const toggleItem = createAction<ItemIdPayload>(TOGGLE_ITEM);
export const toggleEditMode = createAction<ItemIdPayload>(TOGGLE_EDIT_MODE);