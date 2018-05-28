import React from "react"
import { connect, Dispatch } from "react-redux"

import { PageHeader, ListGroup } from "react-bootstrap"

import EditField from "./EditField"
import { Item, AppState } from "./store"
import ListItem from "./ListItem"
import { addItem } from "./actions"

type Props = {
    items: Item[]
}

type DispatchProps = {
    dispatch: Dispatch<any>
}

const App: React.SFC<Props & DispatchProps> = ({ items, dispatch }) => (
    <div className="App__container">
        <PageHeader>TODO_LIST</PageHeader>
        <EditField main onSubmit={value => dispatch(addItem(value))} />
        <ListGroup>{items.map(item => <ListItem key={item.id} item={item} />)}</ListGroup>
    </div>
)

export default connect<Props, {}, {}, AppState>(state => ({
    items: state.items
}))(App)
