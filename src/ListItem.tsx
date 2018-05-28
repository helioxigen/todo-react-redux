import React from "react"
import classNames from "classnames"
import { connect, Dispatch } from "react-redux"
import { ListGroupItem, Button, Glyphicon, ButtonToolbar, ButtonGroup } from "react-bootstrap"

import EditField from "./EditField"

import { addItem, deleteItem, toggleItem, updateItem, toggleEditMode } from "./actions"
import { Item } from "./store"
import { Action } from "redux-actions"

interface IProps {
    item: Item
    dispatch: Dispatch<any>
}

class ListItem extends React.Component<IProps> {
    handleUpdate = (getAction: (id: string) => Action<any>) =>
        this.props.dispatch(getAction(this.props.item.id))

    handleEditModeToggle = () => this.handleUpdate(id => toggleEditMode({ id }))
    handleCheckClick = () => this.handleUpdate(id => toggleItem({ id }))
    handleDeleteClick = () => this.handleUpdate(id => deleteItem({ id }))

    handleSubmit = value => {
        this.handleEditModeToggle()
        this.handleUpdate(id =>
            updateItem({
                id,
                value
            })
        )
    }
    render() {
        const { editMode, checked, value } = this.props.item

        return (
            <ListGroupItem
                disabled={checked}
                className={classNames("item", { "edit-mode": editMode }, { checked })}
            >
                <ButtonToolbar className="options">
                    <ButtonGroup vertical>
                        <Button bsSize="xs" bsStyle="default" onClick={this.handleDeleteClick}>
                            <Glyphicon glyph="remove" />
                        </Button>
                        <Button bsSize="xs" bsStyle="default" onClick={this.handleEditModeToggle}>
                            <Glyphicon glyph="pencil" />
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
                <Button
                    bsSize="xs"
                    className="check"
                    active={!checked}
                    onClick={this.handleCheckClick}
                >
                    <Glyphicon glyph="ok" />
                </Button>
                {editMode ? (
                    <EditField value={value} onSubmit={this.handleSubmit} />
                ) : (
                    <div className="itemText">{value}</div>
                )}
            </ListGroupItem>
        )
    }
}

export default connect()(ListItem)
