import React, {Component} from 'react';
import {ImageBackground, StyleSheet, FlatList} from 'react-native';
import {View, Text} from 'react-native';

import todayImage from '../../assets/imgs/today.jpg';

import moment from 'moment';
import 'moment/locale/pt-br';
import commonStyles from '../commonStyles';
import Task from '../components/Task';
import {data} from './data';

export default class TaskList extends Component {
  state = {
    tasks: data,
  };
  toggleTask = taskId => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date();
      }
    });
    this.setState({tasks});
  };
  render() {
    const today = moment()
      .locale('pt-br')
      .format('ddd, D [de] MMMM');
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subTitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <FlatList
            data={this.state.tasks}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <Task {...item} toggleTask={this.toggleTask} />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
  },
  taskList: {
    flex: 7,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    color: commonStyles.colors.secondary,
    fontFamily: commonStyles.fontFamily,
    fontSize: 50,
    marginBottom: 20,
    marginLeft: 20,
  },
  subTitle: {
    color: commonStyles.colors.secondary,
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
});
