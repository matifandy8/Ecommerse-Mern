import React, { Component } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Slider.css";

export default class Slider extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      galleryItems: [],
    };
  }
  getData() {
    axios
      .get(`https://picsum.photos/v2/list?limit=6`, {})
      .then((res) => {
        const data = res.data;
        const img = data.map((m) => <img src={m.download_url} alt="" />);
        this.setState({
          galleryItems: img,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <AliceCarousel
          items={this.state.galleryItems}
          responsive={this.responsive}
          autoPlayInterval={3000}
          autoPlayDirection="left"
          autoPlay={true}
          fadeOutAnimation={true}
          mouseTrackingEnabled={true}
          disableAutoPlayOnAction={true}
          infinite={true}
        />
      </div>
    );
  }
}
