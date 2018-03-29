import React, { Component } from 'react';

import { Markdown } from 'react-markdown';
import * as fs from 'fs';
import { readFile } from 'fs';

import data from '../json/data.json';

class ResearchTopicWriteup extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {match} = this.props;
    //Hate this should fix this.
    let currData = data[match.params.topic];

    fs.readFile('../markdown/'.concat(match.params.writeup), 'utf8', (err, data) => {
      this.md_data = data;
    });

    return (
        <Markdown source={this.data}/>
      );
  }
}

export default ResearchTopicWriteup;