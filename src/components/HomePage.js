import React from 'react';
import '../assets/stylesheets/components/HomePage.scss';
import AmCharts from '@amcharts/amcharts3-react';
import { connect } from 'react-redux';
import { fetchStates } from '../actions/marketsActions';
import classnames from 'classnames';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.fetchStates().then(res => {
      this.setState({loading: false});
    }, err => {

    });
  }

  render() {
    const loading = (
      <div style={{height: '544px'}}>
        <div className="ui active centered loader"></div>
      </div>
    );

    const { states } = this.props;

    return (
      <div className="">
        {this.state.loading ? loading :
        <AmCharts.React
          style={{
            width: "100%",
            height: "500px"
          }}
          options={{
            "type": "map",
            "theme": "light",
            "colorSteps": 10,
            "dataProvider": {
              "map": "usaLow",
              "areas": states
            },
            "areasSettings": {
              "autoZoom": true
            },

            "valueLegend": {
              "right": 10,
              "minValue": "little",
              "maxValue": "a lot!"
            },

            "export": {
              "enabled": true
            },
            "areasSettings": {
              "alpha": 1,
              "color": "#67B7DC",
              "colorSolid": "#003767",
              "rollOverOutlineColor": "none",
              "rollOverColor": "#637BE3",
              "selectedColor": "#F3735D",
              "autoZoom": true
            }
          }} /> }
      </div>
    );
  }
}

HomePage.propTypes = {
  states: React.PropTypes.array.isRequired,
  fetchStates: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    states: state.states
  }
}

export default connect(mapStateToProps, { fetchStates })(HomePage);
