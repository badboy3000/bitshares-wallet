import React from "react";
const Dialog = require('material-ui/lib/dialog');
const RaisedButton = require('material-ui/lib/raised-button');
import notify from "actions/NotificationActions";
import Translate from "react-translate-component";
import counterpart from "counterpart";
import TransactionConfirmActions from "actions/TransactionConfirmActions";
import TransactionConfirmStore from "stores/TransactionConfirmStore";
import BaseComponent from "./BaseComponent";

class TransactionConfirm extends BaseComponent {
    
    constructor(props) {
        super(props, TransactionConfirmStore);
    }

    componentDidUpdate() {
/*
        if(!this.state.closed) {
            this.refs.confirmModal.show();
        } else {
            this.refs.confirmModal.dismiss();
        }
        */
    }

    onConfirmClick(e) {
        e.preventDefault();
        TransactionConfirmActions.broadcast(this.state.transaction);
       //  this.refs.confirmModal.dismiss();
    }

    onCloseClick(e) {
        e.preventDefault();
        TransactionConfirmActions.close();
        this.refs.confirmModal.dismiss();
    }

    render() {
        if ( !this.state.transaction || this.state.closed ) {return null; }

        let button_group, header;

        if(this.state.error || this.state.included) {
            header = this.state.error ? (
                    this.state.error
                ) :
                (
               "Success!"
            );
            button_group = (
                <div className="button-group">
                    <RaisedButton label="Close"
                        secondary={true}
                        onTouchTap={this.onCloseClick.bind(this)} />
                </div>
            );
        } else {
            header = "Confirm transaction";
                button_group = (
                <div className="button-group">
                   <RaisedButton label="Confirm"
                        primary={true}
                        onTouchTap={this.onConfirmClick.bind(this)} />

                    <RaisedButton label="Cancel"
                        secondary={true}
                        onTouchTap={this.onCloseClick.bind(this)} />
                </div>
            );
        }
        
        return (
            <div ref="transactionConfirm">                   
                 <Dialog title={header}
                     open={true}
                     autoScrollBodyContent={true}
                     ref="confirmModal">
                    <div className="grid-block shrink" style={{paddingTop: "1rem"}}>
                        {button_group}
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default TransactionConfirm;
