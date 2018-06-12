import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated
} from 'react-native';

export default class ListItem1 extends Component{

    constructor(props){
        super(props);
        this.state = {
            slideAnim: new Animated.Value(100)
        }
    }

    static propTypes={
        row: PropTypes.number,
        delay: PropTypes.number,
    };

    componentDidMount() {
        Animated.timing(this.state.slideAnim, {
            toValue: 0,
            duration: 500,
            delay: this.props.delay,
        }).start();
    }

    render() {
        return (
            <Animated.View style={{marginLeft: this.state.slideAnim, flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{uri: this.props.row.Poster}} style={styles.poster}/>
                <View style={{flex: 1}}>
                    <Text style={styles.title}>{this.props.row.Title}</Text>
                    <Text style={styles.subHeading}>{this.props.row.Type} - {this.props.row.Year}</Text>
                </View>
            </Animated.View>
        );
    }
}

const  styles = StyleSheet.create({
    poster: {
        height: 75,
        width: 50,
    },
    title: {
        margin: 5,
        fontSize: 15,
    },
    subHeading: {
        margin: 5,
        fontSize: 12,
    }
});

