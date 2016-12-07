import shared from '../scss/shared.scss';
import styles from '../scss/Welcome.scss';

import React from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <Helmet title="React-Redux"/>
                <section className={shared.section}>
                    <h1>Welcome!</h1>
                    <p>If you want to Count</p>
                    <Link to="/count">
                        <button className={styles.button}>
                            Click here!
                        </button>
                    </Link>
                </section>
            </div>
        );
    }
}
