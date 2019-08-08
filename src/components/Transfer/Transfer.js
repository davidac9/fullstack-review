import React, {Component} from 'react'
import './Transfer.css'
import {Link} from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'

export default class Transfer extends Component {
    state = {
        account: '',
        amount: '',
        transactionType: ''
    }
    handleChange = (key, e) => {
        this.setState({[key]: e.target.value})
    }
    render() {
        return (
            <div className="Transfer">
                <Dropdown changeFn={this.handleChange} prop='transactionType'>
                    <option>Deposit</option>
                    <option>Withdraw</option>
                </Dropdown>
                <Dropdown changeFn={this.handleChange} prop='account' >
                    <option value='savings'>Savings</option>
                </Dropdown>
                    <input onChange={e => this.handleChange('amount', e)} type='number' />
                <Link to='/dashboard'>
                    <button>Cancel</button>
                </Link>
                <button>Submit</button>
            </div>
        )
    }
}