import React, { Component } from 'react'
import CollectionForm from './CollectionForm';
import Transactions from './Transactions';

export default class ExpenseTracker extends Component {
    render() {
        return (
            <div className="max-w-xl mx-auto">
                <CollectionForm />
                <Transactions />
            </div>
        )
    }
}