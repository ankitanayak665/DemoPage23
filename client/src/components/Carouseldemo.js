import Carousel from "react-elastic-carousel";
import Item from "./Item";
import '../App.css';
import { Component } from "react";
import { getApidata } from "../helper/getAPIData";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1, itemsToShow: 2 },
  { width: 1, itemsToShow: 3 },
  { width: 1, itemsToShow: 4 },
  { width: 1, itemsToShow: 5 },
  { width: 1, itemsToShow: 6 }
];

class Carouseldemo extends Component {
  constructor() {
    super();
    this.state = {
      load: true,
      events: []
    }
  }
  componentDidMount() {
    getApidata("GET", null)
      .then(response => {
        this.setState({
          events: response.data,
          load: false
        }, () => {
          console.log(this.state.events);
        })
      })
      .catch(error => {

      })
  }
  renderEvents() {
    let events = [];
    for (let i = 0; i < this.state.events.length; i++) {
      events.push(

        <div class="container" style={{

          position: 'relative',
          textalign: 'center',
          color: 'white',
        }}>
          <img src={this.state.events[i].eventimage} alt="Snow" style={{ height: "150px", width: "150px" }} />
          <div class="bottom-left" style={{
            position: 'absolute',
            bottom: "8px",
            left: "16px",
          }}>{new Date(this.state.events[i].eventdate).getDate()}/{new Date(this.state.events[i].eventdate).getMonth()}/{new Date(this.state.events[i].eventdate).getFullYear()}<br /><h1>{this.state.events[i].eventname}</h1></div>

        </div>

      )
    }
    return events;
  }
  render() {
    return (
      this.state.load ?
        <div style={{ padding: "10%", border: "black" }}>loading...</div>
        :
        <div className="Carouseldemo" style={{ backgroundColor: "white", borderRadius: "10px" }}>


          <Carousel breakPoints={breakPoints}>
            {this.renderEvents()}
          </Carousel>

        </div>
    )
  }
}

export default Carouseldemo;