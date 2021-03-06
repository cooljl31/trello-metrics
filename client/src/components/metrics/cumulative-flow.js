'use strict';
import React, { Component } from 'react';
import Highcharts from 'highcharts';

class CumulativeFlow extends Component {

  constructor(props) {
    super(props);
  }


  componentDidMount() {
    if (this.props.modules) {
      this.props.modules.forEach(function(module) {
        module(Highcharts);
      });
    }

    const cumulativeFlowOptions = {
      chart: { type: this.props.chartType },
      title: { text: this.props.chartTitle },
      xAxis: { categories: ['Step'] },
      yAxis: { title: { text: 'Time' } },
      tooltip: { pointFormat: '{series.name}: {point.y} - {series.time}' },
      series: this.props.series
    };

    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.props.container,
      cumulativeFlowOptions
    );
  }


  componentWillUnmount() {
    this.chart.destroy();
  }


  render() {

    return <div className="cumulative-flow" id={ this.props.container }></div>;
  }
}

export default CumulativeFlow;
