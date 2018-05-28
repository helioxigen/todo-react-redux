import React from "react"
import { connect, Dispatch } from "react-redux"
import { Button, FormGroup, InputGroup, Glyphicon } from "react-bootstrap"

type Props = {
    main?: boolean
    value?: string
    onSubmit: (value: string) => void
}

type State = {
    value: string
}

export default class EditField extends React.Component<Props, State> {
    constructor(props) {
        super(props)

        this.state = {
            value: props.value || ""
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (state.value) return {}

        return {
            value: props.value || ""
        }
    }

    handleChange = ({ target: { value } }) => this.setState({ value })

    handleSubmit = () => {
        this.setState({ value: "" })
        this.props.onSubmit(this.state.value)
    }

    render() {
        return (
            <form className={this.props.main ? "omnibar" : "editfield"} onSubmit={this.handleSubmit}>
                <FormGroup>
                    <InputGroup>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <InputGroup.Button>
                            <Button bsStyle={this.props.main ? "primary" : "success"} onClick={this.handleSubmit}>
                                <Glyphicon
                                    glyph={this.props.main ? "plus" : "ok"}
                                />
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </form>
        )
    }
}
