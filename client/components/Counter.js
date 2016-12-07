import styles from '../css/Counter.scss';
import shared from '../css/shared.scss';

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

export default class Counter extends React.Component {
    render() {
        const {increment, decrement, counter} = this.props;

        return (
            <div>
                <Helmet title="Count"/>
                <section className={shared.section}>
                    <h1>Counter: {counter}</h1>
                    <p>Click the button to increment the counter</p>
                    <p>
                        <button className={styles.button} onClick={increment}>
                            Increment
                        </button>
                        <button className={styles.button} onClick={decrement}>
                            Decrement
                        </button>
                    </p>
                    <p>
                        <Link to="/">
                            <button className={styles.homeButton}>Go Home</button>
                        </Link>
                    </p>
                </section>
            </div>
        );
    }
}
