import React from "react";
import PropTypes from "prop-types";
import GaleriaFotos from "./GaleriaFotos";
import axios from "axios";

const url =
  "https://api.unsplash.com/photos/?client_id=13671a063c49f0b639055e4c120c5cc4436e2d8e52028c185826633238aa5585";

export default class Fotos extends React.Component {
  static propTypes = {
    url: PropTypes.string
  };
  static defaultProps = {
    url
  };
  state = { fotos: null, loading: true, error: "" };

  async componentDidMount() {
    try {
      const response = await axios.get(this.props.url);
      this.setState({ fotos: response.data, loading: false });
    } catch (e) {
      console.log(e);
      this.setState({ loading: false, error: e.message });
    }
  }
  render() {
    const { fotos, loading, error } = this.state;
    if (loading) return <p>Espere...</p>;
    if (error) return <p>{error}</p>;
    return <GaleriaFotos fotos={fotos} />;
  }
}
