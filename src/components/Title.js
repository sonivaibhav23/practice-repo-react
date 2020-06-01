import React, { Component } from 'react';

const TITLES = [
    'a software engineer',
    'a music lover',
    'an enthusiatic learner',
    'a cooking lover'
];

class Title extends Component {

    state = { titleIndex : 0, fadeIn: true};

    componentDidMount() {
        this.timeout = setTimeout(() => {this.setState({fadeIn: false})}, 2000);

        console.log('Component mounted');

        this.animateTitles();
    }

    componentWillUnmount() {
        console.log('Component is unmounted!');

        clearInterval(this.intervalState);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.intervalState = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({titleIndex, fadeIn: true});

            this.timeout = setTimeout(() => {this.setState({fadeIn: false})}, 2000);
        }, 4000);

        console.log('this.intervalState', this.intervalState);
    }

    render() {
        const {titleIndex, fadeIn} = this.state;

        const title = TITLES[titleIndex]

        return(
            <p className = {fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        );
    }

}

export default Title;