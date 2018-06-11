import React, { Component } from 'react';
import {
    ListView,
    TextInput,
} from 'react-native';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import { debounce } from 'lodash';

export default class main extends Component{

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged:(r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows([]),
        }
        this.searchMovies = this.searchMovies.bind(this);
    }

    searchMovies = debounce(text => {
        fetch('http://www.omdbapi.com/?t=' + text + '&apikey=PlzBanMe')
            .then((response)=>response.json())
            .then((responseData) => {
                // if('Search' in responseData){
                    console.log(responseData);
                    const da = new ListView.DataSource({
                        rowHasChanged:(r1, r2) => r1 !== r2
                    });

                var searchList = new Array(responseData);
                    this.setState({
                        dataSource:da.cloneWithRows(searchList)
                    })
                // }
            })
            .catch((err) => {
                console.log(err)
            })
    }, 500);

    renderRow(row){
        return(
            <View style={styles.listItem}>
                <Image source={{uri: row.Poster}} style={styles.poster}/>
                <View style={{flex: 1}}>
                    <Text style={styles.title}>{row.Title}</Text>
                    <Text style={styles.subHeading}>{row.Type} - {row.Year}</Text>
                </View>
            </View>
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1/*, marginTop:25*/}}
                    onChangeText={this.searchMovies}
                    placeholder= 'Enter search keyword'
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 64,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    listItem: {
        margin: 10,
    },
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