//Greeter,js
import React, { Component } from 'react'
import config from './config.json';
import styles from './Greeter.css';//导入


class Greeter extends Component {
    render() {
        return (
            <div className={styles.root}>
                {config.greetText}{1}{1}{1}
            </div>
        );
    }
}

export default Greeter