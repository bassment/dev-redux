import styles from '../scss/Counter.scss';
import shared from '../scss/shared.scss';

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

export default class Counter extends React.Component {
    render() {
        const {increment, decrement, counter} = this.props;

        return (
            <div>
                <Helmet title="Count"/>
                <section className={shared['section']}>
                    <h1>Counter: {counter}</h1>
                    <p>Click the button to increment the counter</p>
                    <div>
                        <button className={styles['button']} onClick={increment}>
                            Increment
                        </button>
                        <button className={styles['button']} onClick={decrement}>
                            Decrement
                        </button>
                    </div>
                    <Link to="/">
                        <button className={styles['button-home']}>Go Home</button>
                    </Link>
                    <Link to="/login">
                        <button className={styles['button']}>Logout</button>
                    </Link>
                </section>
            </div>
        );
    }
}
