import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  //if there are no images available, default images will be provided via the url below
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    this.setState({
      //the target is the img tag
      //the below comes back as a string so adding the + sign coerces it into a number
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    //props is state from the parent component and is one-way data flow, it cannot be changed(immutable) -or- it can only be changed at the parent level (in this case, Details.js)
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            //need the below line bc technically the onClick should be a button and it is not in this case
            // eslint-disable-next-line
            <img
              src={photo}
              key={photo}
              data-index={index}
              onClick={this.handleIndexClick}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
