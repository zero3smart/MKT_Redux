import React from 'react';
import topodata from '../data/us.json';
import unemploy from '../data/unemployment.tsv';
import '../assets/stylesheets/components/ExplorePage.scss';
import * as topojson from "topojson-client";
import { MapChoropleth } from 'react-d3-map-choropleth';
import WorldMap from './WorldMap';

class ExplorePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /*let width = 960, height = 600;

    // data should be a MultiLineString
    let dataStates = topojson.mesh(topodata, topodata.objects.states, function(a, b) { return a !== b; });
    /// data should be polygon
    let dataCounties = topojson.feature(topodata, topodata.objects.counties).features;

    // domain
    let domain = {
      scale: 'quantize',
      domain: [0, .15],
      range: d3.range(9).map(function(i) { return "q" + i + "-9"; })
    };
    let domainValue = function(d) { return +d.rate; };
    let domainKey = function(d) {return +d.id};
    let mapKey = function(d) {return +d.id};

    let scale = 1280;
    let translate = [width / 2, height / 2];
    let projection = 'albersUsa';

    var tooltipContent = function(d) {return d.properties;}*/

    return (
      <div>
        {/* <MapChoropleth
          width= {width}
          height= {height}
          dataPolygon= {dataCounties}
          dataMesh= {dataStates}
          scale= {scale}
          domain= {domain}
          domainData= {unemploy}
          domainValue= {domainValue}
          domainKey= {domainKey}
          mapKey = {mapKey}
          translate= {translate}
          projection= {projection}
          showGraticule= {true}
        /> */}
        <WorldMap />
      </div>
    );
  }
}

export default ExplorePage;